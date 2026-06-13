import {
    Box,
    Container,
    Typography,
    Button,
    Stack,
    useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { verticalMove } from "../customStyle";

export const BBMHeroData = {
    heading: "Our Future With Gold Investments",
    description:
        "Secure your future with gold investments highlights the essential role of gold in protecting wealth. With Boost Bullion, clients gain access to ethical gold trading, ensuring a stable foundation for their financial future through trusted investment strategies.",
};

const fadeIn = {
    hidden: { opacity: 0, y: 16 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: { ease: "easeOut", duration: 0.6, delay },
    }),
};

const Hero = ({ data = BBMHeroData, backgroundImage }) => {
    const theme = useTheme();

    return (
        <Box
            component="section"
            sx={{
                position: "relative",
                pt: { xs: 10, md: 16 },
                // pb: { xs: 10, md: 14 },
                color: "white",
                overflow: "hidden",
                background: backgroundImage
                    ? `url(${backgroundImage}) center/cover no-repeat`
                    : "linear-gradient(135deg, #000000 0%, #1f063d 85%)",
                "&:before": {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    background:
                        "radial-gradient(circle at 30% 40%, rgba(241,184,17,0.08), transparent 60%), radial-gradient(circle at 80% 20%, rgba(241,184,17,0.04), transparent 70%)",
                    pointerEvents: "none",
                },
            }}
        >
            <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1, display: "flex", flexDirection: { xs: "column", md: "row" }, gap: "2rem" }}>
                <Stack spacing={{ xs: 3, md: 5 }} alignItems="flex-start" width={{ xs: "100%", md: "50%" }}>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={0}
                        variants={fadeIn}
                    >
                        <Typography
                            variant="h3"
                            sx={{
                                fontWeight: 500,
                                lineHeight: 1.1,
                                fontSize: { xs: "2rem", md: "2.8rem" },
                                mb: 1,
                            }}
                        >
                            {data.heading}
                        </Typography>
                        <Box
                            sx={{
                                width: 80,
                                height: 4,
                                bgcolor: "#f1b811",
                                borderRadius: 2,
                                mb: 2,
                            }}
                        />
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={0.15}
                        variants={fadeIn}
                    >
                        {/* <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 500,
                                fontSize: { xs: "1rem", md: "1.25rem" },
                                opacity: 0.9,
                                mb: 1,
                            }}
                        >
                            {data.kind}
                        </Typography> */}
                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: { xs: "0.95rem", md: "1.1rem" },
                                lineHeight: 1.6,
                                mb: { xs: 3, md: 4 },
                                color: "rgba(255,255,255,0.9)",
                            }}
                        >
                            {data.description}
                        </Typography>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={0.3}
                        variants={fadeIn}
                    >
                        <Stack
                            direction={{ xs: "column", sm: "row" }}
                            spacing={2}
                            alignItems="center"
                        >
                            <Button
                                variant="contained"
                                size="large"
                                endIcon={<ArrowForwardIcon />}
                                sx={{
                                    textTransform: "capitalize",
                                    fontWeight: 600,
                                    bgcolor: "#f1b811",
                                    color: "black",
                                    px: 4,
                                    py: 1.5,
                                    borderRadius: 2,
                                    boxShadow: "0 20px 60px -10px rgba(241,184,17,0.6)",
                                    "&:hover": {
                                        bgcolor: "#e0aa0f",
                                        transform: "scale(1.02)",
                                        boxShadow: "0 25px 70px -5px rgba(241,184,17,0.7)",
                                    },
                                    transition: "all .2s ease",
                                }}
                            >
                                Get Started
                            </Button>

                            <Button
                                variant="outlined"
                                size="large"
                                startIcon={<InfoOutlinedIcon />}
                                sx={{
                                    textTransform: "capitalize",
                                    fontWeight: 600,
                                    borderColor: "#f1b811",
                                    color: "#f1b811",
                                    px: 4,
                                    py: 1.5,
                                    borderRadius: 2,
                                    "&:hover": {
                                        bgcolor: "rgba(241,184,17,0.08)",
                                        borderColor: "#f1b811",
                                        transform: "scale(1.02)",
                                    },
                                    transition: "all .2s ease",
                                }}
                            >
                                Learn More
                            </Button>
                        </Stack>
                    </motion.div>
                </Stack>
                <Stack
                    width={{ xs: "100%", md: "50%" }}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        animation: `${verticalMove} 1s infinite alternate`
                    }}
                >
                    <Box
                        component={"img"}
                        src="/Bull.png"
                        width={{ xs: "70%", md: "100%" }}
                    />
                </Stack>
            </Container>
        </Box>
    );
};

export default Hero;