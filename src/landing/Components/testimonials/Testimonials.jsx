// import { Box, Typography, Stack, Avatar, Container } from "@mui/material";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import { leftAvatars, rightAvatars, testimonialsData } from "./testimonialsData";
// import { testimonials } from "../customStyle";


// function getRandomPosition(range) {
//   return Math.random() * range;
// }

// function Testimonials() {
//   return (
//     <Box
//       sx={{
//         backgroundColor: "#f9f9f9",
//         py: 8,
//         position: "relative",
//         overflow: "hidden",
//       }}
//     >
//       <Container>
//         <Typography
//           variant="h5"
//           align="center"
//           sx={{
//             fontWeight: "bold",
//             color: "#333",
//             textTransform: "uppercase",
//             mb: 4
//           }}
//         >
//           What Our Client’s Say
//         </Typography>
//         <Box
//           sx={{
//             position: "relative",
//             backgroundColor: "rgba(255, 255, 255, 0.6)",
//             backdropFilter: "blur(10px)",
//             boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
//             borderRadius: 4,
//             p: 4,
//             textAlign: "center",
//             maxWidth: 600,
//             mx: "auto",
//             zIndex: 5,
//             "& .react-multi-carousel-dot button": {
//               backgroundColor: "#bbb !important",
//               border: "none",
//               width: "12px",
//               height: "12px",
//               opacity: 0.5,
//               transition: "opacity 0.3s ease-in-out",
//             },
//             "& .react-multi-carousel-dot--active button": {
//               backgroundColor: "#f1b811 !important",
//               opacity: 1,
//             },
//           }}
//         >
//           <Carousel
//             responsive={{
//               desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
//               tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
//               mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
//             }}
//             infinite
//             showDots
//             arrows={false}
//             containerClass="carousel-container"
//             renderDotsOutside={true}
//             autoPlay={true}
//           >
//             {testimonialsData.map((testimonial) => (
//               <Stack key={testimonial.id} spacing={2}>
//                 <Typography
//                   variant="h3"
//                   sx={{ color: "#f1b811", fontWeight: "bold" }}
//                 >
//                   “
//                 </Typography>
//                 <Typography variant="body1" sx={{ color: "#555" }}>
//                   {testimonial.feedback}
//                 </Typography>
//                 <Typography
//                   variant="h6"
//                   sx={{ fontWeight: "bold", color: "#333" }}
//                 >
//                   {testimonial.name}
//                 </Typography>
//                 <Typography variant="body2" sx={{ color: "#777" }}>
//                   {testimonial.role}
//                 </Typography>
//               </Stack>
//             ))}
//           </Carousel>
//         </Box>
//       </Container>
//       {leftAvatars.map((src, index) => (
//         <Avatar
//           key={index}
//           src={src}
//           sx={{
//             position: "absolute",
//             width: 60,
//             height: 60,
//             top: `${getRandomPosition(80)}%`,
//             left: `${5 + getRandomPosition(5)}%`,
//             transform: "translate(-50%, -50%)",
//             border: "2px solid #fff",
//             boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
//             animation: `${testimonials} ${3 + index * 0.5}s ease-in-out infinite`,
//           }}
//         />
//       ))}
//       {rightAvatars.map((src, index) => (
//         <Avatar
//           key={index}
//           src={src}
//           sx={{
//             position: "absolute",
//             width: 60,
//             height: 60,
//             top: `${getRandomPosition(80)}%`,
//             right: `${5 + getRandomPosition(5)}%`,
//             transform: "translate(50%, -50%)",
//             border: "2px solid #fff",
//             boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
//             animation: `${testimonials} ${3 + index * 0.5}s ease-in-out infinite`,
//           }}
//         />
//       ))}
//     </Box>
//   );
// }

// export default Testimonials;












// Testimonials.jsx
import React from "react";
import {
  Box,
  Typography,
  Stack,
  Avatar,
  Container,
  useTheme,
} from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { motion } from "framer-motion";
import { leftAvatars, rightAvatars, testimonialsData } from "./testimonialsData";

// Simple fade-in variant for slides
const slideVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function getRandomPosition(range) {
  return Math.random() * range;
}

function Testimonials() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        py: { xs: 8, md: 12 },
        color: "white",
      }}
    >
      {/* subtle radial glows behind */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          "&:before": {
            content: '""',
            position: "absolute",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "rgba(241,184,17,0.08)",
            top: "10%",
            left: "15%",
            filter: "blur(120px)",
          },
          "&:after": {
            content: '""',
            position: "absolute",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "rgba(241,184,17,0.04)",
            bottom: "5%",
            right: "10%",
            filter: "blur(160px)",
          },
        }}
      />
      <Container sx={{ position: "relative", zIndex: 2, maxWidth: "lg" }}>
        <Typography
          variant="h5"
          align="center"
          sx={{
            fontWeight: "700",
            textTransform: "uppercase",
            mb: 2,
            color: "#f1b811",
            letterSpacing: 1,
          }}
        >
          What Our Clients Say
        </Typography>
        <Typography
          variant="h4"
          align="center"
          sx={{ fontWeight: 700, mb: 4, color: "white" }}
        >
          Testimonials
        </Typography>

        <Box
          sx={{
            position: "relative",
            mx: "auto",
            maxWidth: 700,
            px: { xs: 2, md: 0 },
            "& .react-multi-carousel-dot button": {
              backgroundColor: "#bbb !important",
              border: "none",
              width: 12,
              height: 12,
              opacity: 0.5,
              transition: "opacity 0.3s ease-in-out",
            },
            "& .react-multi-carousel-dot--active button": {
              backgroundColor: "#f1b811 !important",
              opacity: 1,
            },
          }}
        >
          <Carousel
            responsive={{
              desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
              tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
              mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
            }}
            infinite
            showDots
            arrows={false}
            renderDotsOutside
            autoPlay
            autoPlaySpeed={5000}
            containerClass="carousel-container"
          >
            {testimonialsData.map((testimonial) => (
              <Box key={testimonial.id} px={2}>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={slideVariants}
                >
                  <Stack
                    spacing={2}
                    sx={{
                      position: "relative",
                      background: "rgba(0,0,0,0.55)",
                      borderRadius: 3,
                      p: { xs: 4, md: 6 },
                      textAlign: "center",
                      color: "white",
                      boxShadow: "0 40px 100px -20px rgba(241,184,17,0.3)",
                      backdropFilter: "saturate(180%) blur(8px)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <Typography
                      variant="h2"
                      sx={{
                        fontSize: { xs: "2.5rem", md: "3rem" },
                        lineHeight: 1,
                        color: "#f1b811",
                        fontWeight: 700,
                      }}
                    >
                      “
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: "1rem",
                        lineHeight: 1.6,
                        color: "rgba(255,255,255,0.9)",
                      }}
                    >
                      {testimonial.feedback}
                    </Typography>
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: 700, mt: 1, color: "#ffffff" }}
                      >
                        {testimonial.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "rgba(255,255,255,0.7)" }}
                      >
                        {testimonial.role}
                      </Typography>
                    </Box>
                  </Stack>
                </motion.div>
              </Box>
            ))}
          </Carousel>
        </Box>
      </Container>

      {/* Floating avatars */}
      {leftAvatars.map((src, index) => (
        <Avatar
          key={`left-${index}`}
          src={src}
          sx={{
            position: "absolute",
            width: 60,
            height: 60,
            top: `${getRandomPosition(80)}%`,
            left: `${5 + getRandomPosition(5)}%`,
            transform: "translate(-50%, -50%)",
            border: "2px solid rgba(241,184,17,0.8)",
            boxShadow: "0 10px 30px rgba(241,184,17,0.3)",
            animation: `float ${4 + index * 0.5}s ease-in-out infinite`,
            backgroundColor: "#111",
            zIndex: 1,
          }}
        />
      ))}
      {rightAvatars.map((src, index) => (
        <Avatar
          key={`right-${index}`}
          src={src}
          sx={{
            position: "absolute",
            width: 60,
            height: 60,
            top: `${getRandomPosition(80)}%`,
            right: `${5 + getRandomPosition(5)}%`,
            transform: "translate(50%, -50%)",
            border: "2px solid rgba(241,184,17,0.8)",
            boxShadow: "0 10px 30px rgba(241,184,17,0.3)",
            animation: `float ${4 + index * 0.5}s ease-in-out infinite`,
            backgroundColor: "#111",
            zIndex: 1,
          }}
        />
      ))}

      {/* keyframes for float if not globally defined */}
      <Box
        component="style"
        children={`
          @keyframes float {
            0% { transform: translateY(0) scale(1); }
            50% { transform: translateY(-8px) scale(1.02); }
            100% { transform: translateY(0) scale(1); }
          }
        `}
      />
    </Box>
  );
}

export default Testimonials;