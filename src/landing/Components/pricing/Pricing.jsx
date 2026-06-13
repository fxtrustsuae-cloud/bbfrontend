import { Box, Typography, Card, CardContent, Button, Stack, Container } from "@mui/material";
import { pricingData } from "./pricingData";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1200 }, items: 3 },
    desktop: { breakpoint: { max: 1200, min: 992 }, items: 3 },
    tablet: { breakpoint: { max: 992, min: 768 }, items: 2 },
    mobile: { breakpoint: { max: 700, min: 0 }, items: 1 }
};

function Pricing() {
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
                            color: "#333",
                            textTransform: "uppercase",
                            mb: 4,
                        }}
                    >
                        Pricing Plans
                    </Typography>
                    <Typography
                        variant="h4"
                        align="center"
                        sx={{ fontWeight: "bold", color: "#555", mb: 6 }}
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
                        {pricingData.map((plan) => (
                            <Box key={plan.id} py={3} px={2}>
                                <Card
                                    sx={{
                                        py: "4rem",
                                        px: "2rem",
                                        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                                        overflow: "hidden",
                                        bgcolor: "#fcf3db"
                                    }}
                                >
                                    <CardContent sx={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                fontWeight: "bold",
                                                color: plan.color,
                                                mb: 2,
                                                textTransform: "capitalize"
                                            }}
                                        >
                                            {plan.title}
                                        </Typography>
                                        <Typography
                                            variant="h4"
                                            sx={{ fontWeight: "bold", color: "#333", fontSize: "1.5rem", mb: 1 }}
                                        >
                                            {plan.investment}
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            sx={{ fontWeight: "bold", color: "#555", mb: 3 }}
                                        >
                                            Profit: {plan.profit}
                                        </Typography>
                                        <Stack spacing={1}>
                                            {Object.entries(plan.features).map(([key, value]) => (
                                                <Stack key={key}>
                                                    <Stack sx={{ gap: "1rem", flexDirection: "row", alignItems: "center" }}>
                                                        <Typography color="#f1b811">✓ </Typography>
                                                        <Typography
                                                            variant="body2"
                                                            sx={{ fontSize: "1rem", fontWeight: "700", wordBreak: "keep-all" }}
                                                        >
                                                            {key}:
                                                        </Typography>
                                                    </Stack>
                                                    <Typography
                                                        variant="body2"
                                                        sx={{ fontSize: "1rem", ml: "2rem", color: "#f1b811" }}
                                                    >
                                                        {value}
                                                    </Typography>
                                                </Stack>
                                            ))}
                                        </Stack>
                                        <Button
                                            variant="contained"
                                            sx={{
                                                textTransform: "capitalize",
                                                boxShadow: "none",
                                                backgroundColor: plan.color,
                                                color: "#fff",
                                                fontWeight: "bold",
                                                mt: "1.5rem",
                                                "&:hover": {
                                                    backgroundColor: plan.color,
                                                    opacity: 0.9,
                                                },
                                            }}
                                        >
                                            Choose Plan
                                        </Button>
                                    </CardContent>
                                </Card>
                            </Box>
                        ))}
                    </Carousel>
                </Stack>
            </Container>
        </Stack>
    );
}

export default Pricing;