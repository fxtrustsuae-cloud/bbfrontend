import { Box, Button, Card, Container, Divider, Stack, Typography } from '@mui/material';
import { tradingPortfolioData } from './tradingPortfolioData';
import { Link } from 'react-router-dom';


function TradingPortfolio() {
    return (
        <Stack>
            <Container>
                <Card
                    sx={{
                        boxShadow: "0 0px 0px 0 rgba(0, 0, 0, 0.19), 0 0px 8px 0 rgba(0, 0, 0, 0.19)",
                        borderRadius: "2rem",
                        padding: { xs: "1rem", md: "2rem" },
                        display: "flex",
                        flexDirection: "column",
                        gap: "1.2rem"
                    }}
                >
                    <Typography fontSize={"1.2rem"} mx={{ xs: "1rem", md: "0" }}>Trading Portfolio</Typography>
                    <Divider sx={{ my: ".3rem" }} />
                    {tradingPortfolioData.map((data, i) => (
                        <>
                            <Stack
                                key={i}
                                sx={{
                                    px: "1rem",
                                    borderRadius: "1rem",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    gap: { xs: "2rem", lg: "0" },
                                    alignItems: "center",
                                    flexWrap: "wrap"
                                }}
                            >
                                {Object.entries(data).map(([key, value], subIndex) => (
                                    <Box key={subIndex}>
                                        {key === "icon" ? (
                                            <Card sx={{ p: ".8rem", lineHeight: "0", borderRadius: "15px", boxShadow: "none", bgcolor: "#bae6ba" }}>
                                                <value.type sx={{ fontSize: '2.5rem', color: "green" }} />
                                            </Card>
                                        ) : (
                                            <Stack>
                                                {
                                                    key !== "buttonName" ?
                                                        <Typography fontSize={"1rem"} sx={{ wordBreak: "break-word" }}>{value}</Typography>
                                                        :
                                                        <Link to={"/dashboard/robot/portfolio/trading-to-compounding"}>
                                                            <Button
                                                                variant='contained'
                                                                sx={{
                                                                    boxShadow: "none",
                                                                    textTransform: 'capitalize',
                                                                    color: '#f72b50',
                                                                    bgcolor: "#fee6ea",
                                                                    borderRadius: '5rem',
                                                                    py: '.7rem',
                                                                    "&:hover": {
                                                                        boxShadow: "none"
                                                                    }
                                                                }}
                                                            >{value}</Button>
                                                        </Link>
                                                }
                                                <Typography fontWeight="bold" color='#969ba0' fontSize={".9rem"}>
                                                    {key !== "buttonName" && key}
                                                </Typography>
                                            </Stack>
                                        )}
                                    </Box>
                                ))}
                            </Stack>
                            <Divider />
                        </>
                    ))}
                </Card>
            </Container>
        </Stack>
    )
}

export default TradingPortfolio;