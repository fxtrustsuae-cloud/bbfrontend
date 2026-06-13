import { useState, useEffect, useRef } from "react";
import { AppBar, Box, CssBaseline, Drawer, IconButton, Toolbar, Tooltip, Stack, useMediaQuery } from "@mui/material";
import ModeNightIcon from '@mui/icons-material/ModeNight';
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { NAVIGATION } from "./Navigation";
import RecursiveNavigation from "./RecursiveNavigation";
import { Link, Outlet } from "react-router-dom";
import Footer from '../footer/Footer';
import { useSelector, useDispatch } from "react-redux";
import { setThemeMode } from "../../../globalState/themeMode/themeModeSlice";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuComponent from "../../userPanelComponent/MenuComponent";
import Loading from "../../userPanelComponent/Loading";
import { Suspense } from "react";
import { useGetUserProfileQuery } from "../../../globalState/settings/profileSettingApi";


const drawerWidth = 320;

function DashboardLayout() {

    const { data } = useGetUserProfileQuery()

    const userData = data?.data

    const [sidebarOpen, setSidebarOpen] = useState(true);
    const sidebarRef = useRef(null);
    const mainContentRef = useRef(null);

    const dispatch = useDispatch()

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const { activeTheme } = useSelector((state) => state.themeMode);

    const toggleTheme = () => {
        const newMode = activeTheme === "dark" ? "light" : "dark";
        dispatch(setThemeMode(newMode));
    };


    const theme = createTheme({
        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                md: 900,
                lg: 1230,
                xl: 1536,
            },
        },
        palette: {
            mode: activeTheme === "dark" ? "dark" : "light",
            primary: {
                main: "#f1b811",
            },
            background: {
                default: activeTheme === "dark" ? "#121212" : "#f5f5f5",
                paper: activeTheme === "dark" ? "#1e1e1e" : "#ffffff",
            },
            text: {
                primary: activeTheme === "dark" ? "#ffffff" : "#000000",
            },
        },
        typography: {
            fontFamily: "'Roboto', sans-serif",
        }
    });

    const isLgDown = useMediaQuery(theme.breakpoints.down("lg"));
    const isMdDown = useMediaQuery(theme.breakpoints.down("md"));
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    useEffect(() => {
        if (isLgDown) {
            setSidebarOpen(false);
        }
    }, [isLgDown]);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{ display: "flex", overflow: "hidden" }}>
                <AppBar
                    position="fixed"
                    sx={{
                        zIndex: (theme) => theme.zIndex.drawer + 3,
                        bgcolor: activeTheme === "dark" ? "#121212" : "#ffffff",
                        color: theme.palette.text.primary,
                        boxShadow: "none",
                        borderBottom: `1px solid ${activeTheme === "dark" ? "#333" : "#e0e0e0"}`,
                    }}
                >
                    <Toolbar sx={{ justifyContent: "space-between" }}>
                        <Stack sx={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
                            <Tooltip title={sidebarOpen ? "Collapse menu" : "Expand menu"}>
                                <IconButton
                                    color="inherit"
                                    edge="start"
                                    onClick={toggleSidebar}
                                >
                                    {sidebarOpen ? <MenuOpenIcon /> : <MenuIcon />}
                                </IconButton>
                            </Tooltip>
                            <Link to={"/"}>
                                <Stack>
                                    <img src="/logo512.png" alt="My Logo" style={{ width: "4rem" }} />
                                </Stack>
                            </Link>
                        </Stack>
                        <Stack
                            sx={{
                                flexDirection: "row"
                            }}
                        >
                            <MenuComponent Icon={AccountCircleIcon} userData={userData} />
                            <Tooltip title={activeTheme === "dark" ? "Switch to light mode" : "Switch to dark mode"}>
                                <IconButton color="inherit" onClick={toggleTheme}>
                                    {activeTheme === "dark" ? <LightModeIcon sx={{ color: "primary.main" }} /> : <ModeNightIcon sx={{ color: "primary.main" }} />}
                                </IconButton>
                            </Tooltip>
                        </Stack>
                    </Toolbar>
                </AppBar>
                <Drawer
                    ref={sidebarRef}
                    variant={isLgDown && sidebarOpen ? "temporary" : "permanent"}
                    open
                    onClose={() => setSidebarOpen(false)}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        width: sidebarOpen ? drawerWidth : isMdDown ? 0 : 60,
                        transition: "width 0.5s ease",
                        "& .MuiDrawer-paper": {
                            width: sidebarOpen ? drawerWidth : isMdDown ? 0 : 60,
                            overflowX: "hidden",
                            transition: "width 0.5s ease",
                            bgcolor: activeTheme === "dark" ? "#121212" : "#ffffff",
                            color: theme.palette.text.primary,
                            textAlign: "center",
                            position: "fixed",
                            height: "100vh",
                            scrollbarWidth: !sidebarOpen && "none",
                        },
                    }}
                >
                    <Stack
                        sx={{ py: "5rem", flexGrow: "1" }}
                    >
                        <RecursiveNavigation
                            items={NAVIGATION}
                            sidebarOpen={sidebarOpen}
                            toggleSidebarOpen={setSidebarOpen}
                            darkMode={activeTheme === "dark"}
                            theme={theme}
                        />
                    </Stack>
                </Drawer>
                <Box
                    id="main-content"
                    ref={mainContentRef}
                    component="main"
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        flexGrow: 1,
                        minHeight: "100vh",
                        overflow: "auto",
                        ...(isMobile && {
                            scrollbarWidth: "none",
                            "&::-webkit-scrollbar": {
                                display: "none",
                            },
                        }),
                        bgcolor: activeTheme === "dark" ? "#121212" : "#ffffff",
                        color: theme.palette.text.primary,
                        transition: "width 0.5s ease",
                    }}
                    onClick={() => {
                        if (isLgDown && sidebarOpen) {
                            setSidebarOpen(false);
                        }
                    }}
                >
                    <Box sx={{ flex: 1, mx: { xs: "1rem", md: "2rem" } }}>
                        <Suspense fallback={<Loading mt="20rem" />}>
                            <Outlet />
                        </Suspense>
                    </Box>
                    <Footer />
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default DashboardLayout;