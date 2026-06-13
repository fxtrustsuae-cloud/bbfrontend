import { Box, Card, Stack, Typography } from '@mui/material';
import { Divider } from '@mui/material';
import { dashboardBusinessHistoryData } from './dashboardBusinessHistoryData';
import { useSelector } from 'react-redux';

function DashboardBusinessHistory() {

    const { activeTheme } = useSelector((state) => state.themeMode);

    return (
        <Stack>
            <Card
                sx={{
                    p: { xs: "1rem", sm: "2rem" },
                    borderRadius: "2rem",
                    bgcolor: activeTheme === "dark" ? "" : "#ebe8e8"
                }}
            >
                <Typography fontSize={"20px"} fontWeight={"500"} mb={"2rem"} color='primary.main'>Top 10 transactions history</Typography>
                {
                    Object.entries(dashboardBusinessHistoryData).map(([keys, values]) => (
                        <Stack gap={"1rem"} key={keys}>
                            <Box
                                size={6}
                                display={"flex"}
                                justifyContent={"space-between"}
                                flexDirection={{ xs: "column", sm: "row" }}
                            >
                                <Typography fontWeight={"bold"}>{keys}:</Typography>
                                <Typography color="textSecondary">{values}</Typography>
                            </Box>
                            <Divider sx={{ mb: "1rem" }} />
                        </Stack>
                    ))
                }
            </Card>
        </Stack>
    )
}

export default DashboardBusinessHistory;