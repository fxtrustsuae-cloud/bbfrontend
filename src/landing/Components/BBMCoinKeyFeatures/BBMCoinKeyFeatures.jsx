// import { Typography, Stack, Container, Box } from "@mui/material";
// import Grid from "@mui/material/Grid2"
// import { BBMCoinKeyFeaturesData } from "./BBMCoinKeyFeaturesData"
// import { Fade } from "react-awesome-reveal";
// import { Icon } from '@iconify/react';


// function BBMCoinKeyFeatures() {
//     return (
//         <Stack my={"5rem"}>
//             <Container>
//                 <Stack sx={{ gap: "2rem" }}>
//                     <Stack sx={{ alignItems: "center", gap: "1rem" }}>
//                         <Typography fontSize={"2rem"} fontWeight={"700"}>Key Features of BBM Coin</Typography>
//                     </Stack>
//                     <Grid container spacing={10}>
//                         {
//                             BBMCoinKeyFeaturesData.map((data, i) => (
//                                 <Grid key={i} item size={{ xs: 12, sm: 6 }} display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"}>
//                                     <Fade direction={i % 2 === 0 ? "left" : "right"} cascade triggerOnce>
//                                         <Box>
//                                             <Typography fontSize={"5rem"} pb={"0"} color="#f1b811"> <Icon icon={data.icon} /></Typography>
//                                         </Box>
//                                         <Box textAlign={"center"}>
//                                             <Typography fontSize={"1.3rem"} fontWeight={"700"}>{data.heading}</Typography>
//                                             <Typography color="#707070">{data.contant}</Typography>
//                                         </Box>
//                                     </Fade>
//                                 </Grid>
//                             ))
//                         }
//                     </Grid>
//                 </Stack>
//             </Container>
//         </Stack>
//     )
// }

// export default BBMCoinKeyFeatures;









import { Typography, Stack, Container, Box, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid2"
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { BBMCoinKeyFeaturesData } from "./BBMCoinKeyFeaturesData";

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.14,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { ease: "easeOut", duration: 0.55 },
    },
};

const BBMCoinKeyFeatures = () => {

    return (
        <Stack my={{ xs: 6, md: 10 }} component="section" sx={{ position: "relative" }}>
            <Container maxWidth="lg">
                <Stack sx={{ gap: 4 }}>
                    <Stack sx={{ alignItems: "center", gap: 1, mb: 2 }}>
                        <Typography
                            fontSize={{ xs: "1.9rem", md: "2.4rem" }}
                            fontWeight={700}
                            textAlign="center"
                        >
                            Key Features of BBM Coin
                        </Typography>
                        <Box
                            sx={{
                                width: 70,
                                height: 4,
                                bgcolor: "#f1b811",
                                borderRadius: 2,
                            }}
                        />
                    </Stack>

                    <Box
                        component={motion.div}
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.25 }}
                    >
                        <Grid container size={12} spacing={4}>
                            {BBMCoinKeyFeaturesData.map((feature, i) => (
                                <Grid
                                    key={i}
                                    size={{
                                        xs: 12,
                                        sm: 6,
                                        md: 4
                                    }}
                                    component={motion.div}
                                    variants={cardVariants}
                                    whileHover={{ scale: 1.035 }}
                                    transition={{ type: "spring", stiffness: 280, damping: 22 }}
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        textAlign: "center",
                                        gap: 1.5,
                                        px: 2,
                                        py: 3,
                                        position: "relative",
                                        borderRadius: 3,
                                        cursor: "default",
                                        background: "rgba(255,255,255,0.015)",
                                        overflow: "hidden",
                                        minHeight: 260,
                                        "&:focus-visible": {
                                            outline: "2px solid #f1b811",
                                            outlineOffset: 2,
                                        },
                                        "&:before": {
                                            content: '""',
                                            position: "absolute",
                                            inset: 0,
                                            background:
                                                "radial-gradient(circle at 50% 35%, rgba(241,184,17,0.04), transparent 60%)",
                                            pointerEvents: "none",
                                        },
                                    }}
                                    tabIndex={0}
                                    aria-label={feature.heading}
                                >
                                    <Box
                                        aria-hidden="true"
                                        sx={{
                                            width: 96,
                                            height: 96,
                                            borderRadius: "50%",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            mb: 1,
                                            position: "relative",
                                            "&:before": {
                                                content: '""',
                                                position: "absolute",
                                                width: 120,
                                                height: 120,
                                                borderRadius: "50%",
                                                background: "rgba(241,184,17,0.1)",
                                                top: "50%",
                                                left: "50%",
                                                transform: "translate(-50%, -50%)",
                                                filter: "blur(25px)",
                                                zIndex: -1,
                                            },
                                        }}
                                    >
                                        <Icon
                                            icon={feature.icon || "mdi:help-circle-outline"}
                                            width={48}
                                            height={48}
                                            style={{ color: "#f1b811" }}
                                            aria-label={feature.heading}
                                        />
                                    </Box>

                                    <Box>
                                        <Typography
                                            fontSize={"1.15rem"}
                                            fontWeight={700}
                                            sx={{ mb: 0.5 }}
                                        >
                                            {feature.heading}
                                        </Typography>
                                        <Typography
                                            fontSize={"0.95rem"}
                                            sx={{ color: "#c0c0c0", lineHeight: 1.4 }}
                                        >
                                            {feature.contant}
                                        </Typography>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Stack>
            </Container>
        </Stack>
    );
};

export default BBMCoinKeyFeatures;