import {
    Box,
    Button,
    Typography,
    Card,
    CardContent,
    Stack,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


function SignInDetails() {

    const { userData } = useSelector(state => state.auth)

    return (
        <Box
            sx={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundImage: "url('/authPagesBgImage.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                position: "relative",
            }}
        >
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
                    <Typography fontSize={"2rem"} fontWeight="bold" align="center" color="white">Welcome to the Barter Bloom Family! 🌸</Typography>

                    <Typography> We’re excited to have you on board!</Typography>

                    <Typography>{`Your Login ID: [${userData?.loginId}]`}</Typography>
                    <Typography>{`Your Password: [Sent to your email]`}</Typography>

                    <Typography>🔐 Important: Please keep your Login ID and Password confidential. Do not share your credentials with anyone to ensure the safety of your account.</Typography>

                    <Typography>Let the blooming begin – happy bartering! 🌿</Typography>

                    <Typography>— The Barter Bloom Team</Typography>
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