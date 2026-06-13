import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Collapse,
    Tooltip,
    Stack,
    useMediaQuery
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useState, useEffect, useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutThunk } from "../../../globalState/auth/authThunk";

function RecursiveNavigation({ items, sidebarOpen, toggleSidebarOpen, darkMode, theme }) {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const location = useLocation();
    const [openSubmenu, setOpenSubmenu] = useState({});
    const isLgDown = useMediaQuery((theme) => theme.breakpoints.down("lg"));

    const hasActiveChild = useCallback(function checkItem(item) {
        if (location.pathname === item.segment) return true;
        if (item.children) {
            return item.children.some(child => checkItem(child));
        }
        return false;
    }, [location.pathname]);

    useEffect(() => {
        const newOpenSubmenu = {};
        items.forEach(item => {
            if (item.children && hasActiveChild(item)) {
                newOpenSubmenu[item.title] = true;
            }
        });
        setOpenSubmenu(newOpenSubmenu);
    }, [location.pathname, items, hasActiveChild]);

    const handleToggleSubmenu = (key, hasChildren, hasSegment) => {
        if (hasChildren && !sidebarOpen) {
            toggleSidebarOpen(true);
        } else if (!hasChildren && isLgDown && hasSegment) {
            toggleSidebarOpen(false);
        }

        if (hasChildren) {
            setOpenSubmenu((prevState) => ({
                ...prevState,
                [key]: !prevState[key],
            }));
        }
    };

    function handleLogOut() {
        dispatch(logoutThunk());
        navigate("/", { replace: true });
    }

    return (
        <List>
            {items.map((item) => {
                const isActive = location.pathname === item.segment;
                const hasSegment = !!item.segment;
                const hasChildren = !!item.children;

                const listItemContent = (
                    <Tooltip title={!sidebarOpen ? item.title : ""} placement="right">
                        <ListItem
                            button
                            onClick={
                                item.title === 'Log out' ?
                                    handleLogOut
                                    :
                                    () => handleToggleSubmenu(item.title, hasChildren, hasSegment)
                            }
                            sx={{
                                height: "3rem",
                                cursor: "pointer",
                                color: darkMode ? "white" : "#00000099",
                                backgroundColor: isActive ? "#f6e3b063" : "transparent",
                                "&:hover": { backgroundColor: "#f6e3b063" },
                                borderRadius: '8px',
                                display: !sidebarOpen && "flex",
                                alignItems: !sidebarOpen && "center",
                                justifyContent: !sidebarOpen && "center"
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    color: isActive && "primary.main",
                                    minWidth: !sidebarOpen ? "auto" : "45px",
                                }}
                            >
                                <item.icon />
                            </ListItemIcon>
                            {sidebarOpen && <ListItemText
                                primary={item.title}
                                sx={{ '& .MuiListItemText-primary': { fontSize: '15px' } }}
                            />}
                            {hasChildren && sidebarOpen &&
                                (openSubmenu[item.title] ? <ExpandLess /> : <ExpandMore />)}
                        </ListItem>
                    </Tooltip>
                );

                return (
                    <Stack key={item.title} sx={{ px: ".4rem" }}>
                        {hasSegment ? (
                            <Link to={item.segment} style={{ textDecoration: "none" }}>
                                {listItemContent}
                            </Link>
                        ) : (
                            listItemContent
                        )}

                        {hasChildren && sidebarOpen && (
                            <Collapse in={openSubmenu[item.title]} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <RecursiveNavigation
                                        items={item.children}
                                        sidebarOpen={sidebarOpen}
                                        toggleSidebarOpen={toggleSidebarOpen}
                                        darkMode={darkMode}
                                        theme={theme}
                                    />
                                </List>
                            </Collapse>
                        )}
                    </Stack>
                );
            })}
        </List>
    );
}

export default RecursiveNavigation;