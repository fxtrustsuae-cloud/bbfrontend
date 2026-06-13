import { Container, Stack, Typography, useMediaQuery } from "@mui/material"
import { heroBannerData } from "./heroBannerData";

function HeroBanner() {

    const matches = useMediaQuery('(min-width:600px)');

    return (
        <Stack sx={{ position: "relative" }}>
            <Stack
                sx={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top right, rgba(0, 0, 0, 0.76), rgba(0, 0, 0, 0.76))",
                    opacity: 0.7,
                }}
            ></Stack>
            <img
                src="/boostbullion.jpg"
                alt="error"
                style={{
                    height: "636px",
                    objectFit: "cover",
                    objectPosition: matches && "right"
                }}
            />

            <Container sx={{ position: "absolute", inset: 0, display: "flex", alignItems: "center" }}>
                <Stack>
                    {
                        heroBannerData.map((ele, i) => (
                            <Stack key={i} color="white" width={{ sm: "80%", md: "50%" }}>
                                <Typography variant="h4" fontSize={"3.5rem"} fontWeight={"700"} color="#fce196">{ele.heading}</Typography>
                                <Typography fontSize={"1.2rem"}>{ele.contant}</Typography>
                            </Stack>
                        ))
                    }
                </Stack>
            </Container>
        </Stack>
    )
}

export default HeroBanner;