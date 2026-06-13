import React from "react";
import { Card, CardContent, Typography, Box, Container, Stack } from "@mui/material";
import Grid from "@mui/material/Grid2"
import { bestMT5Data } from "./bestMT5Data";
import { Bounce } from "react-awesome-reveal";
import { Icon } from '@iconify/react';


function BestMT5() {
    return (
        <Stack my={"8rem"}>
            <Container>
                <Stack>
                    <Typography align="center" mb={".5rem"}>Innovative Trading Platform</Typography>
                    <Typography
                        variant="h4"
                        align="center"
                        fontSize={"1.8rem"}
                        gutterBottom
                        sx={{ fontWeight: "700", color: "#333" }}
                    >
                        How MT5 is the best?
                    </Typography>
                    <Grid container spacing={3} sx={{ marginTop: "1rem" }}>
                        {bestMT5Data.map((item, index) => (
                            <Grid item size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                                <Bounce triggerOnce>
                                    <Card
                                        sx={{
                                            borderRadius: "12px",
                                            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                                            textAlign: "center",
                                            padding: "1rem",
                                            backgroundColor: "#fff",
                                            cursor: 'pointer',
                                            transition: 'all 0.3s ease-in-out',
                                            '&:hover': {
                                                backgroundColor: '#f1b811',
                                                '& .icon, & .content': {
                                                    color: 'white',
                                                },
                                                '& .heading': {
                                                    color: 'black',
                                                }
                                            },
                                        }}
                                    >
                                        <CardContent>
                                            <Box className="icon" sx={{ color: "#f1b811", marginBottom: "1rem", fontSize: "3rem" }}>  <Icon icon={item.icon} /></Box>
                                            <Typography
                                                className="heading"
                                                variant="h6"
                                                sx={{ fontWeight: "bold", color: "#333", marginBottom: "0.5rem" }}
                                            >
                                                {item.heading}
                                            </Typography>
                                            <Typography className="content" variant="body2" color="#707070" fontSize={"1.1rem"}>
                                                {item.contant}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Bounce>
                            </Grid>
                        ))}
                    </Grid>
                </Stack>
            </Container>
        </Stack>
    );
};

export default BestMT5;