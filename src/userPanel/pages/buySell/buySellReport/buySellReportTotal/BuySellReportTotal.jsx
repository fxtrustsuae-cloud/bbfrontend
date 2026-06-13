import { Card, Container, Stack } from "@mui/material"

function BuySellReportTotal() {
    return (
        <Stack mt={"2rem"}>
            <Container>
                <Card sx={{ p: "2rem", py: "1rem", borderRadius: "2rem", bgcolor: "primary.main" }}>Total Buy: $ | Total Sell: $</Card>
            </Container>
        </Stack>
    )
}

export default BuySellReportTotal;