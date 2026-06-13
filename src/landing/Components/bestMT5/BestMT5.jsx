// import React from "react";
// import { Card, CardContent, Typography, Box, Container, Stack } from "@mui/material";
// import Grid from "@mui/material/Grid2"
// import { bestMT5Data } from "./bestMT5Data";
// import { Bounce } from "react-awesome-reveal";
// import { Icon } from '@iconify/react';


// function BestMT5() {
//     return (
//         <Stack my={"8rem"}>
//             <Container>
//                 <Stack>
//                     <Typography align="center" mb={".5rem"}>Innovative Trading Platform</Typography>
//                     <Typography
//                         variant="h4"
//                         align="center"
//                         fontSize={"1.8rem"}
//                         gutterBottom
//                         sx={{ fontWeight: "700", color: "#333" }}
//                     >
//                         How MT5 is the best?
//                     </Typography>
//                     <Grid container spacing={3} sx={{ marginTop: "1rem" }}>
//                         {bestMT5Data.map((item, index) => (
//                             <Grid item size={{ xs: 12, sm: 6, md: 4 }} key={index}>
//                                 <Bounce triggerOnce>
//                                     <Card
//                                         sx={{
//                                             borderRadius: "12px",
//                                             boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
//                                             textAlign: "center",
//                                             padding: "1rem",
//                                             backgroundColor: "#fff",
//                                             cursor: 'pointer',
//                                             transition: 'all 0.3s ease-in-out',
//                                             '&:hover': {
//                                                 backgroundColor: '#f1b811',
//                                                 '& .icon, & .content': {
//                                                     color: 'white',
//                                                 },
//                                                 '& .heading': {
//                                                     color: 'black',
//                                                 }
//                                             },
//                                         }}
//                                     >
//                                         <CardContent>
//                                             <Box className="icon" sx={{ color: "#f1b811", marginBottom: "1rem", fontSize: "3rem" }}>  <Icon icon={item.icon} /></Box>
//                                             <Typography
//                                                 className="heading"
//                                                 variant="h6"
//                                                 sx={{ fontWeight: "bold", color: "#333", marginBottom: "0.5rem" }}
//                                             >
//                                                 {item.heading}
//                                             </Typography>
//                                             <Typography className="content" variant="body2" color="#707070" fontSize={"1.1rem"}>
//                                                 {item.contant}
//                                             </Typography>
//                                         </CardContent>
//                                     </Card>
//                                 </Bounce>
//                             </Grid>
//                         ))}
//                     </Grid>
//                 </Stack>
//             </Container>
//         </Stack>
//     );
// };

// export default BestMT5;







import {
    Card,
    Typography,
    Box,
    Container,
    Stack,
    useTheme,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { bestMT5Data } from "./bestMT5Data";

const cardVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.55 } },
};

function BestMT5() {

    return (
        <Stack my={"8rem"}>
            <Container>
                <Stack>
                    <Typography align="center" mb={0.5} sx={{ fontWeight: 500, color: "#888" }}>
                        Innovative Trading Platform
                    </Typography>
                    <Typography
                        variant="h4"
                        align="center"
                        fontSize={"1.8rem"}
                        gutterBottom
                        sx={{ fontWeight: 700, color: "white" }}
                    >
                        How MT5 is the best?
                    </Typography>

                    <Grid container spacing={4} sx={{ marginTop: "1rem" }}>
                        {bestMT5Data.map((item, index) => (
                            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                                <Box component={motion.div} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={cardVariants}>
                                    <Card
                                        sx={{
                                            position: "relative",
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            textAlign: "center",
                                            gap: 1.5,
                                            px: 2.5,
                                            py: 3,
                                            borderRadius: 3,
                                            cursor: "pointer",
                                            background: "rgba(255,255,255,0.02)",
                                            overflow: "hidden",
                                            minHeight: 260,
                                            transition: "transform .25s ease, box-shadow .25s ease, background .25s ease",
                                            "&:hover": {
                                                transform: "scale(1.03)",
                                                boxShadow: "0 30px 80px -10px rgba(241,184,17,0.5)",
                                                background: "rgba(241,184,17,0.08)",
                                            },
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
                                        elevation={0}
                                    >
                                        <Box
                                            aria-hidden="true"
                                            sx={{
                                                width: 80,
                                                height: 80,
                                                borderRadius: "50%",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                mb: 1,
                                                position: "relative",
                                                "&:before": {
                                                    content: '""',
                                                    position: "absolute",
                                                    width: 100,
                                                    height: 100,
                                                    borderRadius: "50%",
                                                    background: "rgba(241,184,17,0.1)",
                                                    top: "50%",
                                                    left: "50%",
                                                    transform: "translate(-50%, -50%)",
                                                    filter: "blur(20px)",
                                                    zIndex: -1,
                                                },
                                            }}
                                        >
                                            <Box
                                                component={Icon}
                                                icon={item.icon}
                                                width={40}
                                                height={40}
                                                sx={{ color: "#f1b811" }}
                                                aria-label={item.heading}
                                            />
                                        </Box>

                                        <Typography
                                            variant="h6"
                                            fontWeight={700}
                                            mb={0.5}
                                            sx={{ color: "white" }}
                                            className="heading"
                                        >
                                            {item.heading}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            fontSize={"1.1rem"}
                                            sx={{ color: "#666", lineHeight: 1.4 }}
                                            className="content"
                                        >
                                            {item.contant}
                                        </Typography>
                                    </Card>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Stack>
            </Container>
        </Stack>
    );
}

export default BestMT5;