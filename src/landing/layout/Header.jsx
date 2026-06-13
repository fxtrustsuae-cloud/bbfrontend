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
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header({ aboutRef, servicesRef, contactRef }) {

    const [anchorElNav, setAnchorElNav] = useState(null);
    const [isBgcolor, setisBgcolor] = useState(false);


    const { token } = useSelector(state => state.auth)

    const pages = [
        { name: 'Services', ref: 'servicesRef' },
        { name: 'About Us', ref: 'aboutRef' },
        { name: 'Contact Us', ref: 'contactRef' }
    ];

    const mobilePages = [
        { name: 'Services', ref: 'servicesRef' },
        { name: 'About Us', ref: 'aboutRef' },
        { name: 'Contact Us', ref: 'contactRef' },
        token
            ? { link: "/dashboard", name: 'Dashboard', ref: null }
            : { link: "/signin", name: 'Sign in', ref: null },
        !token && { link: "/signup", name: 'Sign up', ref: null }
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

    return (
        <AppBar position="fixed" sx={{ bgcolor: isBgcolor ? "white" : "transparent", boxShadow: isBgcolor ? "auto" : "none" }}>
            <Container>
                <Toolbar disableGutters>
                    <Box
                        sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: "center", alignItems: "center" }}
                    >
                        <img src='/logo512.png' alt='error' style={{ width: "5rem" }} />
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
                            {mobilePages.map((page) => (
                                page.ref ? (
                                    <MenuItem
                                        key={page.name}
                                        onClick={() => handleScrollToSection(page.ref === 'aboutRef' ? aboutRef : page.ref === 'servicesRef' ? servicesRef : contactRef)}
                                    >
                                        <Typography sx={{ textAlign: 'center', textTransform: "capitalize", color: "black" }}>
                                            {page.name}
                                        </Typography>
                                    </MenuItem>
                                ) : (
                                    <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                                        <Link to={page.link} style={{ textDecoration: "none", color: "black" }}>
                                            <Typography sx={{ textAlign: 'center', textTransform: "capitalize" }}>
                                                {page.name}
                                            </Typography>
                                        </Link>
                                    </MenuItem>
                                )
                            ))}
                        </Menu>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: "center", alignItems: "center" }}>
                        <img src='/logo512.png' alt='error' style={{ width: "5rem" }} />
                    </Box>
                    <Stack
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', md: 'flex', flexDirection: "row", gap: "2rem", justifyContent: "center", alignItems: "center" }
                        }}
                    >
                        {pages.map((page) => (
                            <Typography
                                key={page.name}
                                onClick={() => handleScrollToSection(page.ref === 'aboutRef' ? aboutRef : page.ref === 'servicesRef' ? servicesRef : contactRef)}
                                sx={{
                                    my: 2,
                                    fontSize: "1.1rem",
                                    color: isBgcolor ? 'black' : 'white',
                                    display: 'block',
                                    textTransform: "capitalize",
                                    cursor: "pointer"
                                }}
                            >
                                {page.name}
                            </Typography>
                        ))}
                    </Stack>
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