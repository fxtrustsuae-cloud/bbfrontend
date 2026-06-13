import { Box, Typography, Stack, Avatar, Container } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { leftAvatars, rightAvatars, testimonialsData } from "./testimonialsData";
import { testimonials } from "../customStyle";


function getRandomPosition(range) {
  return Math.random() * range;
}

function Testimonials() {
  return (
    <Box
      sx={{
        backgroundColor: "#f9f9f9",
        py: 8,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container>
        <Typography
          variant="h5"
          align="center"
          sx={{
            fontWeight: "bold",
            color: "#333",
            textTransform: "uppercase",
            mb: 4
          }}
        >
          What Our Client’s Say
        </Typography>
        <Box
          sx={{
            position: "relative",
            backgroundColor: "rgba(255, 255, 255, 0.6)",
            backdropFilter: "blur(10px)",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
            borderRadius: 4,
            p: 4,
            textAlign: "center",
            maxWidth: 600,
            mx: "auto",
            zIndex: 5,
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
          <Carousel
            responsive={{
              desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
              tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
              mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
            }}
            infinite
            showDots
            arrows={false}
            containerClass="carousel-container"
            renderDotsOutside={true}
            autoPlay={true}
          >
            {testimonialsData.map((testimonial) => (
              <Stack key={testimonial.id} spacing={2}>
                <Typography
                  variant="h3"
                  sx={{ color: "#f1b811", fontWeight: "bold" }}
                >
                  “
                </Typography>
                <Typography variant="body1" sx={{ color: "#555" }}>
                  {testimonial.feedback}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "#333" }}
                >
                  {testimonial.name}
                </Typography>
                <Typography variant="body2" sx={{ color: "#777" }}>
                  {testimonial.role}
                </Typography>
              </Stack>
            ))}
          </Carousel>
        </Box>
      </Container>
      {leftAvatars.map((src, index) => (
        <Avatar
          key={index}
          src={src}
          sx={{
            position: "absolute",
            width: 60,
            height: 60,
            top: `${getRandomPosition(80)}%`,
            left: `${5 + getRandomPosition(5)}%`,
            transform: "translate(-50%, -50%)",
            border: "2px solid #fff",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
            animation: `${testimonials} ${3 + index * 0.5}s ease-in-out infinite`,
          }}
        />
      ))}
      {rightAvatars.map((src, index) => (
        <Avatar
          key={index}
          src={src}
          sx={{
            position: "absolute",
            width: 60,
            height: 60,
            top: `${getRandomPosition(80)}%`,
            right: `${5 + getRandomPosition(5)}%`,
            transform: "translate(50%, -50%)",
            border: "2px solid #fff",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
            animation: `${testimonials} ${3 + index * 0.5}s ease-in-out infinite`,
          }}
        />
      ))}
    </Box>
  );
}

export default Testimonials;