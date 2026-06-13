// import { Box, Typography, Card, CardContent, Button, Stack, Container } from "@mui/material";
// import { pricingData } from "./pricingData";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

// const responsive = {
//     superLargeDesktop: { breakpoint: { max: 4000, min: 1200 }, items: 3 },
//     desktop: { breakpoint: { max: 1200, min: 992 }, items: 3 },
//     tablet: { breakpoint: { max: 992, min: 768 }, items: 2 },
//     mobile: { breakpoint: { max: 700, min: 0 }, items: 1 }
// };

// function Pricing() {
//     return (
//         <Stack my={"8rem"}>
//             <Container>
//                 <Stack
//                     sx={{
//                         "& .react-multi-carousel-dot button": {
//                             backgroundColor: "#bbb !important",
//                             border: "none",
//                             width: "12px",
//                             height: "12px",
//                             opacity: 0.5,
//                             transition: "opacity 0.3s ease-in-out",
//                         },
//                         "& .react-multi-carousel-dot--active button": {
//                             backgroundColor: "#f1b811 !important",
//                             opacity: 1,
//                         },
//                     }}
//                 >
//                     <Typography
//                         variant="h5"
//                         align="center"
//                         sx={{
//                             fontWeight: "bold",
//                             color: "#f1b811",
//                             textTransform: "uppercase",
//                             mb: 4,
//                         }}
//                     >
//                         Pricing Plans
//                     </Typography>
//                     <Typography
//                         variant="h4"
//                         align="center"
//                         sx={{ fontWeight: "bold", color: "white", mb: 6 }}
//                     >
//                         The Best Solutions for Our Clients
//                     </Typography>
//                     <Carousel
//                         responsive={responsive}
//                         infinite={true}
//                         autoPlay={true}
//                         autoPlaySpeed={3000}
//                         showDots={true}
//                         arrows={true}
//                     >
//                         {pricingData.map((plan) => (
//                             <Box key={plan.id} py={3} px={2}>
//                                 <Card
//                                     sx={{
//                                         py: "4rem",
//                                         px: "2rem",
//                                         boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
//                                         overflow: "hidden",
//                                         bgcolor: "#fcf3db"
//                                     }}
//                                 >
//                                     <CardContent sx={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
//                                         <Typography
//                                             variant="h6"
//                                             sx={{
//                                                 fontWeight: "bold",
//                                                 color: plan.color,
//                                                 mb: 2,
//                                                 textTransform: "capitalize"
//                                             }}
//                                         >
//                                             {plan.title}
//                                         </Typography>
//                                         <Typography
//                                             variant="h4"
//                                             sx={{ fontWeight: "bold", color: "#333", fontSize: "1.5rem", mb: 1 }}
//                                         >
//                                             {plan.investment}
//                                         </Typography>
//                                         <Typography
//                                             variant="body1"
//                                             sx={{ fontWeight: "bold", color: "#555", mb: 3 }}
//                                         >
//                                             Profit: {plan.profit}
//                                         </Typography>
//                                         <Stack spacing={1}>
//                                             {Object.entries(plan.features).map(([key, value]) => (
//                                                 <Stack key={key}>
//                                                     <Stack sx={{ gap: "1rem", flexDirection: "row", alignItems: "center" }}>
//                                                         <Typography color="#f1b811">✓ </Typography>
//                                                         <Typography
//                                                             variant="body2"
//                                                             sx={{ fontSize: "1rem", fontWeight: "700", wordBreak: "keep-all" }}
//                                                         >
//                                                             {key}:
//                                                         </Typography>
//                                                     </Stack>
//                                                     <Typography
//                                                         variant="body2"
//                                                         sx={{ fontSize: "1rem", ml: "2rem", color: "#f1b811" }}
//                                                     >
//                                                         {value}
//                                                     </Typography>
//                                                 </Stack>
//                                             ))}
//                                         </Stack>
//                                         <Button
//                                             variant="contained"
//                                             sx={{
//                                                 textTransform: "capitalize",
//                                                 boxShadow: "none",
//                                                 backgroundColor: plan.color,
//                                                 color: "#fff",
//                                                 fontWeight: "bold",
//                                                 mt: "1.5rem",
//                                                 "&:hover": {
//                                                     backgroundColor: plan.color,
//                                                     opacity: 0.9,
//                                                 },
//                                             }}
//                                         >
//                                             Choose Plan
//                                         </Button>
//                                     </CardContent>
//                                 </Card>
//                             </Box>
//                         ))}
//                     </Carousel>
//                 </Stack>
//             </Container>
//         </Stack>
//     );
// }

// export default Pricing;



































// Pricing.jsx
import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  Card,
  CardContent,
  useTheme,
} from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { motion } from "framer-motion";
import { pricingData } from "./pricingData";

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1200 }, items: 3 },
  desktop: { breakpoint: { max: 1200, min: 992 }, items: 3 },
  tablet: { breakpoint: { max: 992, min: 768 }, items: 2 },
  mobile: { breakpoint: { max: 700, min: 0 }, items: 1 },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, ease: "easeOut", duration: 0.55 },
  }),
};

function Pricing() {
  const theme = useTheme();

  return (
    <Stack my={"8rem"}>
      <Container>
        <Stack
          sx={{
            "& .react-multi-carousel-dot button": {
              backgroundColor: "#bbb !important",
              border: "none",
              width: "12px",
              height: "12px",
              opacity: 0.5,
              transition: "opacity 0.3s ease-in-out",
            },
            "& .react-multi-carousel-dot--active button": {
              backgroundColor: "#f1b811 !important",
              opacity: 1,
            },
          }}
        >
          <Typography
            variant="h5"
            align="center"
            sx={{
              fontWeight: "bold",
              color: "#f1b811",
              textTransform: "uppercase",
              mb: 4,
            }}
          >
            Pricing Plans
          </Typography>
          <Typography
            variant="h4"
            align="center"
            sx={{ fontWeight: "bold", color: "white", mb: 6 }}
          >
            The Best Solutions for Our Clients
          </Typography>
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            showDots={true}
            arrows={true}
          >
            {pricingData.map((plan, idx) => (
              <Box key={plan.id} py={3} px={2}>
                <Box
                  component={motion.div}
                  custom={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={cardVariants}
                >
                  <Card
                    sx={{
                      position: "relative",
                      py: "2.5rem",
                      px: "1.5rem",
                      boxShadow: "0 25px 80px -10px rgba(241,184,17,0.3)",
                      overflow: "hidden",
                      bgcolor: "rgba(255,255,255,0.02)",
                      borderRadius: 3,
                      minHeight: 420,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      transition: "transform .25s ease, box-shadow .25s ease",
                      "&:hover": {
                        transform: "scale(1.03)",
                        boxShadow: "0 35px 100px -5px rgba(241,184,17,0.5)",
                      },
                      "&:before": {
                        content: '""',
                        position: "absolute",
                        inset: 0,
                        background:
                          "radial-gradient(circle at 30% 25%, rgba(241,184,17,0.04), transparent 60%), radial-gradient(circle at 80% 15%, rgba(241,184,17,0.02), transparent 70%)",
                        pointerEvents: "none",
                      },
                    }}
                  >
                    <CardContent sx={{ display: "flex", flexDirection: "column", gap: 1.5, p: 0 }}>
                      <Box>
                        <Typography
                          variant="subtitle1"
                          sx={{
                            fontWeight: "700",
                            color: plan.color,
                            textTransform: "capitalize",
                            mb: 1,
                            letterSpacing: 0.5,
                          }}
                        >
                          {plan.title}
                        </Typography>
                        <Box
                          sx={{
                            width: 60,
                            height: 4,
                            bgcolor: "#f1b811",
                            borderRadius: 2,
                            mb: 1,
                          }}
                        />
                      </Box>

                      <Typography
                        variant="h4"
                        sx={{
                          fontWeight: "700",
                          color: "white",
                          fontSize: "1.8rem",
                          mb: 1,
                        }}
                      >
                        {plan.investment}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          fontWeight: "600",
                          color: "#c0c0c0",
                          mb: 2,
                        }}
                      >
                        Profit: {plan.profit}
                      </Typography>

                      <Stack spacing={1} sx={{ flexGrow: 1 }}>
                        {Object.entries(plan.features).map(([key, value]) => (
                          <Stack key={key} spacing={0.5}>
                            <Stack
                              direction="row"
                              alignItems="center"
                              spacing={1}
                              sx={{ mb: 0.5 }}
                            >
                              <Typography sx={{ color: "#f1b811", fontWeight: 700 }}>
                                ✓
                              </Typography>
                              <Typography
                                variant="body2"
                                sx={{
                                  fontSize: "1rem",
                                  fontWeight: 700,
                                  color: "white",
                                }}
                              >
                                {key}:
                              </Typography>
                            </Stack>
                            <Typography
                              variant="body2"
                              sx={{
                                fontSize: "0.95rem",
                                ml: 4,
                                color: "#f1b811",
                              }}
                            >
                              {value}
                            </Typography>
                          </Stack>
                        ))}
                      </Stack>
                    </CardContent>

                    <Box sx={{ mt: 2 }}>
                      <Button
                        variant="contained"
                        fullWidth
                        sx={{
                          textTransform: "capitalize",
                          boxShadow: "none",
                          backgroundColor: plan.color || "#f1b811",
                          color: "#000",
                          fontWeight: "700",
                          py: 1.5,
                          borderRadius: 2,
                          "&:hover": {
                            opacity: 0.95,
                            backgroundColor: plan.color || "#dab215",
                            transform: "scale(1.02)",
                          },
                          transition: "all .2s ease",
                        }}
                      >
                        Choose Plan
                      </Button>
                    </Box>
                  </Card>
                </Box>
              </Box>
            ))}
          </Carousel>
        </Stack>
      </Container>
    </Stack>
  );
}

export default Pricing;