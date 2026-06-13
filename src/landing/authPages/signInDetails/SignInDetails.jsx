import {
    Box,
    Button,
    Typography,
    Card,
    CardContent,
    Stack,
    AppBar,
    Toolbar,
    Tooltip,
    IconButton
} from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';

function SignInDetails() {

    const { userData } = useSelector(state => state.auth)

    const [copied, setCopied] = useState(false);

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 1500);
    };

    return (
        <Box
            sx={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundImage: "url('/authPagesBgImage.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                position: "relative",
            }}
        >
            <AppBar
                position="fixed"
                sx={{
                    bgcolor: "transparent",
                    boxShadow: "none",
                    pt: "1.2rem"
                }}
            >
                <Toolbar sx={{ justifyContent: "space-between" }}>
                    <Stack sx={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
                        <Link to={"/"}>
                            <Stack>
                                <img src="/logo512.png" alt="My Logo" style={{ width: "4rem" }} />
                            </Stack>
                        </Link>
                    </Stack>
                </Toolbar>
            </AppBar>
            <Stack
                sx={{
                    position: "absolute",
                    inset: 0,
                    height: "100%",
                    background: "linear-gradient(to top right, rgba(0, 0, 0, 0.76), rgba(0, 0, 0, 0.76))",
                    opacity: 0.7,
                }}
            >
            </Stack>
            <Card
                sx={{
                    width: { xs: 300, sm: 450 },
                    p: { xs: .5, sm: 2 },
                    borderRadius: 2,
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(80px)",
                    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                }}
            >
                <CardContent sx={{ display: "flex", flexDirection: "column", gap: "1.2rem", color: "white" }}>
                    <Typography fontSize={"2rem"} fontWeight="bold" align="center" color="white">Welcome to the Boost bullion Family! 🌸</Typography>

                    <Typography> We’re excited to have you on board!</Typography>

                    <Stack sx={{ flexDirection: "row", alignItems: "center", gap: "5px" }}>
                        <Typography>{`Your Login ID: [${userData?.loginId}]`}</Typography>
                        <Tooltip title={copied ? "Copied!" : "Copy"}>
                            <IconButton onClick={() => handleCopy(userData?.loginId)}>
                                <ContentCopyOutlinedIcon sx={{ color: "white", fontSize: "18px" }} />
                            </IconButton>
                        </Tooltip>
                    </Stack>
                    <Typography>{`Your Password: [Sent to your email]`}</Typography>

                    <Typography>🔐 Important: Please keep your Login ID and Password confidential. Do not share your credentials with anyone to ensure the safety of your account.</Typography>

                    <Typography>Let the blooming begin – happy bartering! 🌿</Typography>

                    <Typography>— The Boost Bullion Team</Typography>
                    <Button
                        type='submit'
                        variant='contained'
                        size="small"
                        component={Link}
                        to={"/signin"}
                        sx={{
                            textTransform: "capitalize",
                            boxShadow: "none",
                            bgcolor: "#f1b811",
                            fontSize: "1.1rem",
                            color: "white",
                            "&:hover": {
                                boxShadow: "none"
                            }
                        }}
                    >Sign in</Button>
                </CardContent>
            </Card>
        </Box>
    );
};

export default SignInDetails;