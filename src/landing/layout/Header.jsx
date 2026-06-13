import { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Stack } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header({ aboutRef, servicesRef, contactRef }) {

    const { pathname } = useLocation()

    const [anchorElNav, setAnchorElNav] = useState(null);
    const [isBgcolor, setisBgcolor] = useState(false);


    const { token } = useSelector(state => state.auth)

    const pages = [
        { name: 'Services', ref: 'servicesRef' },
        { name: 'About Us', ref: 'aboutRef' },
        { name: 'BBM', link: "/BBM" },
        { name: 'Contact Us', ref: 'contactRef' }
    ];

    // const mobilePages = [
    //     { name: 'Services', ref: 'servicesRef' },
    //     { name: 'About Us', ref: 'aboutRef' },
    //     { name: 'Contact Us', ref: 'contactRef' },
    //     { name: 'BBM', link: "/BBM", ref: null, target: true },
    //     token
    //         ? { link: "/dashboard", name: 'Dashboard', ref: null }
    //         : { link: "/signin", name: 'Sign in', ref: null },
    //     !token && { link: "/signup", name: 'Sign up', ref: null }
    // ].filter(Boolean);

    const mobilePages = [
        { name: 'Services', ref: servicesRef, type: 'scroll' },
        { name: 'About Us', ref: aboutRef, type: 'scroll' },
        { name: 'Contact Us', ref: contactRef, type: 'scroll' },
        { name: 'BBM', link: "/BBM", target: true, type: 'link' },
        token
            ? { link: "/dashboard", name: 'Dashboard', type: 'link' }
            : { link: "/signin", name: 'Sign in', type: 'link' },
        !token && { link: "/signup", name: 'Sign up', type: 'link' },
    ].filter(Boolean);


    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    const handleScrollToSection = (ref) => {
        if (ref && ref.current) {
            const yOffset = -80;
            const y = ref.current.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
        setAnchorElNav(null);
    };


    useEffect(() => {
        const handleScroll = () => {
            const sticky = 80;
            setisBgcolor(window.scrollY > sticky);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const gradientBg = 'linear-gradient(135deg, #000000 0%, #1f063d 85%)';
    const radialOverlays = `
  radial-gradient(circle at 30% 40%, rgba(241,184,17,0.08), transparent 60%),
  radial-gradient(circle at 80% 20%, rgba(241,184,17,0.04), transparent 70%)
`;

    return (
        <AppBar
            position="fixed"
            sx={{
                background: `${radialOverlays}, ${gradientBg}`,
                boxShadow: 'none',
                color: 'white',
                transition: 'box-shadow 0.3s ease',
                zIndex: (theme) => theme.zIndex.appBar + 1,
            }}
        >
            <Container>
                <Toolbar disableGutters>
                    <Box
                        sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: "center", alignItems: "center" }}
                    >
                        <img
                            src={pathname === "/BBM" ? '/BBMCoin.png' : "/logo512.png"}
                            alt='error'
                            style={{ width: pathname === "/BBM" ? "3rem" : "5rem" }}
                        />
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton size="large" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu}>
                            <MenuIcon sx={{ color: isBgcolor ? "#f1b811" : "white" }} />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                            keepMounted
                            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            {mobilePages.map((page) => {
                                if (pathname === "/BBM" && page.type === 'scroll') return null;

                                if (page.type === 'scroll') {
                                    return (
                                        <MenuItem
                                            key={page.name}
                                            onClick={() => handleScrollToSection(page.ref)}
                                        >
                                            <Typography sx={{ color: "black", textAlign: 'center', textTransform: 'capitalize' }}>
                                                {page.name}
                                            </Typography>
                                        </MenuItem>
                                    );
                                }

                                return (
                                    <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                                        <Link
                                            to={page.link}
                                            target={page.target ? "_blank" : undefined}
                                            rel={page.target ? "noopener noreferrer" : undefined}
                                            style={{ textDecoration: "none", color: "black" }}
                                        >
                                            <Typography sx={{ textAlign: 'center', textTransform: 'capitalize' }}>
                                                {page.name}
                                            </Typography>
                                        </Link>
                                    </MenuItem>
                                )
                            })}
                        </Menu>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: "center", alignItems: "center" }}>
                        <img
                            src={pathname === "/BBM" ? '/BBMCoin.png' : "/logo512.png"}
                            alt='error'
                            style={{ width: pathname === "/BBM" ? "3rem" : "5rem" }}
                        />
                    </Box>
                    {
                        pathname !== "/BBM"
                        &&
                        <Stack
                            sx={{
                                flexGrow: 1,
                                display: { xs: 'none', md: 'flex', flexDirection: "row", gap: "2rem", justifyContent: "center", alignItems: "center" }
                            }}
                        >
                            {pages.map((page) => (
                                <Typography
                                    component={page?.link && Link}
                                    to={page.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    key={page.name}
                                    onClick={() => handleScrollToSection(page.ref === 'aboutRef' ? aboutRef : page.ref === 'servicesRef' ? servicesRef : contactRef)}
                                    sx={{
                                        my: 2,
                                        fontSize: "1.1rem",
                                        color: 'white',
                                        display: 'block',
                                        textTransform: "capitalize",
                                        cursor: "pointer",
                                        textDecoration: "none",
                                        border: page.name === "BBM" && "1px solid #f1b811",
                                        padding: page.name === "BBM" && "3px 15px",
                                        borderRadius: page.name === "BBM" && "15px",
                                        bgcolor: page.name === "BBM" && "#f1b811",
                                    }}
                                >
                                    {page.name}
                                </Typography>
                            ))}
                        </Stack>
                    }
                    {pathname === "/BBM" && <Box sx={{ flexGrow: { xs: 0, md: 1 } }} />}
                    {/* <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: "1rem" }}>
                        <Link to={"/signin"}><Button sx={{ bgcolor: "#f1b811", color: "white", textTransform: "capitalize" }}>Signin</Button></Link>
                        <Link to={"/signup"}><Button sx={{ bgcolor: "#f1b811", color: "white", textTransform: "capitalize" }}>Signup</Button></Link>
                    </Box> */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: "1rem" }}>
                        {token ? (
                            <Link to={"/dashboard"}>
                                <Button sx={{ bgcolor: "#f1b811", color: "white", textTransform: "capitalize" }}>
                                    Dashboard
                                </Button>
                            </Link>
                        ) : (
                            <>
                                <Link to={"/signin"}>
                                    <Button sx={{ bgcolor: "#f1b811", color: "white", textTransform: "capitalize" }}>
                                        Signin
                                    </Button>
                                </Link>
                                <Link to={"/signup"}>
                                    <Button sx={{ bgcolor: "#f1b811", color: "white", textTransform: "capitalize" }}>
                                        Signup
                                    </Button>
                                </Link>
                            </>
                        )}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;