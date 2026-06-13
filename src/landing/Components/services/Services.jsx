import { Typography, Stack, Container, Box } from "@mui/material";
import Grid from "@mui/material/Grid2"
import { servicesData } from "./servicesData"
import { Fade } from "react-awesome-reveal";
import { Icon } from '@iconify/react';


function Services() {
    return (
        <Stack my={"5rem"}>
            <Container>
                <Stack sx={{ gap: "2rem" }}>
                    <Stack sx={{ alignItems: "center", gap: "1rem" }}>
                        <Typography fontSize={"2rem"} fontWeight={"700"}>What We Offer</Typography>
                        <Typography fontSize={"1.2rem"} width={{ xs: "100%", sm: "35rem" }} textAlign={"center"}>At Boost Bullion, we pride ourselves on our wide array of services, which include:</Typography>
                    </Stack>
                    <Grid container spacing={10}>
                        {
                            servicesData.map((data, i) => (
                                <Grid key={i} item size={{ xs: 12, sm: 6 }} display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"}>
                                    <Fade direction={i % 2 === 0 ? "left" : "right"} cascade triggerOnce>
                                        <Box>
                                            <Typography fontSize={"5rem"} pb={"0"} color="#f1b811"> <Icon icon={data.icon} /></Typography>
                                        </Box>
                                        <Box textAlign={"center"}>
                                            <Typography fontSize={"1.3rem"} fontWeight={"700"}>{data.heading}</Typography>
                                            <Typography color="#707070">{data.contant}</Typography>
                                        </Box>
                                    </Fade>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Stack>
            </Container>
        </Stack>
    )
}

export default Services;