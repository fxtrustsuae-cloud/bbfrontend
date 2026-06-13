import { Container, Stack, Typography, Card } from "@mui/material"
import Grid from "@mui/material/Grid2"
import { walletsData } from "./walletsData"
import { useSelector } from "react-redux";

function Wallets() {

    const { activeTheme } = useSelector((state) => state.themeMode);

    return (
        <Stack mt={"2rem"}>
            <Container>
                <Grid container size={12} spacing={4}>
                    {
                        walletsData.map((data, i) => (
                            <Grid item key={i} size={{ xs: 6, sm: 4, md: 3 }}>
                                <Card
                                    sx={{
                                        height: "100%",
                                        p: "1.2rem",
                                        bgcolor: activeTheme === "dark" ? "" : "#ebe8e8"
                                    }}
                                >
                                    <Typography color="primary.main">
                                        <data.icon />
                                    </Typography>
                                    <Typography variant="h6" fontWeight="bold">{data.amount}</Typography>
                                    {data.LTC && <Typography variant="body2" color="textSecondary">{data.LTC}</Typography>}
                                    <Typography variant="body2" color="textSecondary">{data.name}</Typography>
                                </Card>
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
        </Stack>
    )
}

export default Wallets