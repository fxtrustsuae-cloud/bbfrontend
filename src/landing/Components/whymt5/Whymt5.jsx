import { Container, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { whymt5Data } from "./whymt5";
import { Fade } from "react-awesome-reveal";
import { verticalMove } from "../customStyle";

function Whymt5() {
    return (
        <Stack sx={{ my: "5rem" }}>
            <Container>
                <Stack>
                    {whymt5Data.map((data, i) => (
                        <Grid container key={i} spacing={{ xs: 5, md: 8, lg: 20 }}
                            sx={{
                                display: "flex",
                                flexDirection: { xs: "column-reverse", md: "row" }
                            }}
                        >
                            <Grid
                                item
                                size={{
                                    xs: 12,
                                    md: 6
                                }}
                                display="flex"
                                flexDirection="column"
                                gap={".8rem"}
                                justifyContent="center"
                                py="2rem"
                            >
                                <Fade triggerOnce>
                                    <Typography
                                        fontWeight="700"
                                        fontSize="1.2rem"
                                        color="#f1b811"
                                    >
                                        {data.kind}
                                    </Typography>
                                    <Typography
                                        variant="h1"
                                        fontWeight="700"
                                        fontSize="1.8rem"
                                    >
                                        {data.heading}
                                    </Typography>
                                    <Typography fontSize="1.1rem" color="#707070">
                                        {data.contant}
                                    </Typography>
                                </Fade>
                            </Grid>
                            <Grid
                                size={{ xs: 12, md: 6 }}
                                height={{ xs: "20rem", md: "auto" }}
                                sx={{
                                    borderRadius: { md: "1rem 5rem 1rem 5rem" },
                                    overflow: "hidden",
                                    animation: `${verticalMove} 1s infinite alternate`,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}
                            >
                                <img
                                    src={data.img}
                                    alt="error"
                                    style={{
                                        width: "80%",
                                        height: "100%",
                                    }}
                                />
                            </Grid>
                        </Grid>
                    ))}
                </Stack>
            </Container>
        </Stack>
    );
}

export default Whymt5;