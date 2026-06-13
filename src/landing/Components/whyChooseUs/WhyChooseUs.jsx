// import { Container, Stack, Typography, Box } from '@mui/material';
// import Grid from '@mui/material/Grid2';
// import { whyChooseUsData } from './whyChooseUsData';
// import { Card, CardContent } from '@mui/material';
// import { Bounce, Fade } from 'react-awesome-reveal';
// import { Icon } from '@iconify/react'; 

// function WhyChooseUs() {
//     return (
//         <Stack my={"5rem"} mt={"8rem"}>
//             <Container>
//                 <Grid container spacing={{ xs: 5, md: 8, lg: 20 }}>
//                     <Grid
//                         item
//                         size={{ xs: 12, md: 6 }}
//                         display="flex"
//                         flexDirection="column"
//                         justifyContent={"center"}
//                         gap={2}
//                     >
//                         <Fade triggerOnce>
//                             <Typography variant="subtitle1" color="#f1b811" fontSize={"1.2rem"} fontWeight={700}>
//                                 {whyChooseUsData[0].kind}
//                             </Typography>
//                             <Typography variant="h1" fontWeight={"700"} fontSize={"1.5rem"}>
//                                 {whyChooseUsData[0].heading}
//                             </Typography>
//                             <Typography fontSize="1.1rem" color="#707070">
//                                 {whyChooseUsData[0].contant}
//                             </Typography>
//                         </Fade>
//                     </Grid>
//                     <Grid item size={{ xs: 12, md: 6 }}>
//                         <Grid container spacing={3}>
//                             {whyChooseUsData[1].map((data, i) => (
//                                 <Grid item size={{ xs: 12, md: 6 }} key={i}>
//                                     <Bounce triggerOnce>
//                                         <Card
//                                             sx={{
//                                                 boxShadow: { xs: "none", md: 3 },
//                                                 borderRadius: 2,
//                                                 height: '100%',
//                                                 cursor: 'pointer',
//                                                 transition: 'all 0.3s ease-in-out',
//                                                 '&:hover': {
//                                                     backgroundColor: '#f1b811',
//                                                     '& .icon, & .heading, & .content': {
//                                                         color: 'white',
//                                                     },
//                                                 },
//                                             }}
//                                         >
//                                             <CardContent
//                                                 sx={{
//                                                     textAlign: 'center'
//                                                 }}
//                                             >
//                                                 <Box
//                                                     className="icon"
//                                                     fontSize="5rem"
//                                                     color="#f1b811"
//                                                 >
//                                                     <Icon icon={data.icon} />
//                                                 </Box>
//                                                 <Typography
//                                                     className="heading"
//                                                     variant="h6"
//                                                     fontWeight={700}
//                                                     mb={".3rem"}
//                                                     fontSize={"1rem"}
//                                                 >
//                                                     {data.heading}
//                                                 </Typography>
//                                                 <Typography
//                                                     className="content"
//                                                     fontSize="0.7rem"
//                                                     fontWeight={"700"}
//                                                     color="#707070"
//                                                 >
//                                                     {data.contant}
//                                                 </Typography>
//                                             </CardContent>
//                                         </Card>
//                                     </Bounce>
//                                 </Grid>
//                             ))}
//                         </Grid>
//                     </Grid>
//                 </Grid>
//             </Container>
//         </Stack>
//     );
// }

// export default WhyChooseUs;
























import { Container, Stack, Typography, Box, Card } from "@mui/material";
import Grid from "@mui/material/Grid2"
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { whyChooseUsData } from "./whyChooseUsData";

const cardVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.55 } },
};

function WhyChooseUs() {
    return (
        <Stack my={"5rem"} mt={"8rem"}>
            <Container>
                <Grid container spacing={{ xs: 5, md: 8, lg: 20 }}>
                    <Grid
                        size={{
                            xs: 12,
                            md: 6
                        }}
                        display="flex"
                        flexDirection="column"
                        justifyContent={"center"}
                        gap={2}
                    >
                        <Typography variant="subtitle1" color="#f1b811" fontSize={"1.2rem"} fontWeight={700}>
                            {whyChooseUsData[0].kind}
                        </Typography>
                        <Typography variant="h1" fontWeight={"700"} fontSize={"1.5rem"}>
                            {whyChooseUsData[0].heading}
                        </Typography>
                        <Typography fontSize="1.1rem" color="#707070">
                            {whyChooseUsData[0].contant}
                        </Typography>
                    </Grid>

                    <Grid
                        size={{
                            xs: 12,
                            md: 6
                        }}>
                        <Grid container spacing={3}>
                            {whyChooseUsData[1].map((data, i) => (
                                <Grid
                                    size={{
                                        xs: 12,
                                        md: 6
                                    }}
                                    key={i}
                                >
                                    <motion.div
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.3 }}
                                        variants={cardVariants}
                                    >
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
                                                background: "rgba(255,255,255,0.015)",
                                                overflow: "hidden",
                                                minHeight: 220,
                                                transition: "transform .25s ease, box-shadow .25s ease, background .25s ease",
                                                "&:hover": {
                                                    transform: "scale(1.025)",
                                                    boxShadow: "0 25px 60px -10px rgba(241,184,17,0.5)",
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
                                                    icon={data.icon}
                                                    width={36}
                                                    height={36}
                                                    sx={{ color: "#f1b811" }}
                                                    aria-label={data.heading}
                                                />
                                            </Box>

                                            <Typography
                                                variant="h6"
                                                fontWeight={700}
                                                mb={0.5}
                                                sx={{ color: "white" }}
                                            >
                                                {data.heading}
                                            </Typography>
                                            <Typography fontSize="0.85rem" fontWeight={500} sx={{ color: "#c0c0c0" }}>
                                                {data.contant}
                                            </Typography>
                                        </Card>
                                    </motion.div>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Stack>
    );
}

export default WhyChooseUs;