import { Container, Stack, Typography, Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { whyChooseUsData } from './whyChooseUsData';
import { Card, CardContent } from '@mui/material';
import { Bounce, Fade } from 'react-awesome-reveal';
import { Icon } from '@iconify/react';


function WhyChooseUs() {
    return (
        <Stack my={"5rem"} mt={"8rem"}>
            <Container>
                <Grid container spacing={{ xs: 5, md: 8, lg: 20 }}>
                    <Grid
                        item
                        size={{ xs: 12, md: 6 }}
                        display="flex"
                        flexDirection="column"
                        justifyContent={"center"}
                        gap={2}
                    >
                        <Fade triggerOnce>
                            <Typography variant="subtitle1" color="#f1b811" fontSize={"1.2rem"} fontWeight={700}>
                                {whyChooseUsData[0].kind}
                            </Typography>
                            <Typography variant="h1" fontWeight={"700"} fontSize={"1.5rem"}>
                                {whyChooseUsData[0].heading}
                            </Typography>
                            <Typography fontSize="1.1rem" color="#707070">
                                {whyChooseUsData[0].contant}
                            </Typography>
                        </Fade>
                    </Grid>
                    <Grid item size={{ xs: 12, md: 6 }}>
                        <Grid container spacing={3}>
                            {whyChooseUsData[1].map((data, i) => (
                                <Grid item size={{ xs: 12, md: 6 }} key={i}>
                                    <Bounce triggerOnce>
                                        <Card
                                            sx={{
                                                boxShadow: { xs: "none", md: 3 },
                                                borderRadius: 2,
                                                height: '100%',
                                                cursor: 'pointer',
                                                transition: 'all 0.3s ease-in-out',
                                                '&:hover': {
                                                    backgroundColor: '#f1b811',
                                                    '& .icon, & .heading, & .content': {
                                                        color: 'white',
                                                    },
                                                },
                                            }}
                                        >
                                            <CardContent
                                                sx={{
                                                    textAlign: 'center'
                                                }}
                                            >
                                                <Box
                                                    className="icon"
                                                    fontSize="5rem"
                                                    color="#f1b811"
                                                >
                                                    <Icon icon={data.icon} />
                                                </Box>
                                                <Typography
                                                    className="heading"
                                                    variant="h6"
                                                    fontWeight={700}
                                                    mb={".3rem"}
                                                    fontSize={"1rem"}
                                                >
                                                    {data.heading}
                                                </Typography>
                                                <Typography
                                                    className="content"
                                                    fontSize="0.7rem"
                                                    fontWeight={"700"}
                                                    color="#707070"
                                                >
                                                    {data.contant}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Bounce>
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