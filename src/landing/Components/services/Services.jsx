// import { Typography, Stack, Container, Box } from "@mui/material";
// import Grid from "@mui/material/Grid2"
// import { servicesData } from "./servicesData"
// import { Fade } from "react-awesome-reveal";
// import { Icon } from '@iconify/react';


// function Services() {
//     return (
//         <Stack my={"5rem"}>
//             <Container>
//                 <Stack sx={{ gap: "2rem" }}>
//                     <Stack sx={{ alignItems: "center", gap: "1rem" }}>
//                         <Typography fontSize={"2rem"} fontWeight={"700"}>What We Offer</Typography>
//                         <Typography fontSize={"1.2rem"} width={{ xs: "100%", sm: "35rem" }} textAlign={"center"}>At Boost Bullion, we pride ourselves on our wide array of services, which include:</Typography>
//                     </Stack>
//                     <Grid container spacing={10}>
//                         {
//                             servicesData.map((data, i) => (
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

// export default Services;



















import { Typography, Stack, Container, Box, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid2"
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { servicesData } from "./servicesData";

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

const Services = ({ data = servicesData }) => {
    const theme = useTheme();

    return (
        <Stack my={{ xs: 6, md: 10 }} component="section">
            <Container maxWidth="lg">
                <Stack sx={{ gap: 3 }}>
                    <Stack sx={{ alignItems: "center", gap: 1, mb: 2 }}>
                        <Typography fontSize={{ xs: "1.9rem", md: "2.4rem" }} fontWeight={700} textAlign="center">
                            What We Offer
                        </Typography>
                        <Typography
                            fontSize={"1.2rem"}
                            sx={{ maxWidth: { xs: "100%", sm: "35rem" }, textAlign: "center", color: "#707070" }}
                        >
                            At Boost Bullion, we pride ourselves on our wide array of services, which include:
                        </Typography>
                    </Stack>

                    <Box component={motion.div} variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                        <Grid container spacing={{ xs: 6, md: 8 }}>
                            {data.map((service, i) => (
                                <Grid
                                    size={{
                                        xs: 12,
                                        sm: 6
                                    }}
                                    key={i}
                                >
                                    <Box
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
                                            px: 3,
                                            py: 4,
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
                                        aria-label={service.heading}
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
                                            <Icon icon={service.icon} width={48} height={48} style={{ color: "#f1b811" }} aria-label={service.heading} />
                                        </Box>

                                        <Box>
                                            <Typography fontSize={"1.15rem"} fontWeight={700} sx={{ mb: 0.5 }}>
                                                {service.heading}
                                            </Typography>
                                            <Typography fontSize={"0.95rem"} sx={{ color: "#c0c0c0", lineHeight: 1.4 }}>
                                                {service.contant}
                                            </Typography>
                                        </Box>
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

export default Services;