import { Card, Container, Stack } from "@mui/material"

function TradingLevelIncomeTotal() {
    return (
        <Stack>
            <Container>
                <Card sx={{ p: "2rem", py: "1rem", borderRadius: "2rem", bgcolor: "primary.main" }}>Total Income:</Card>
            </Container>
        </Stack>
    )
}

export default TradingLevelIncomeTotal;