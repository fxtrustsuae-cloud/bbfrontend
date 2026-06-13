import { Card, Container, Stack } from "@mui/material"

function IncomeSummaryTotal() {
    return (
        <Stack>
            <Container>
                <Card sx={{ p: "2rem", py: "1rem", borderRadius: "2rem", bgcolor: "primary.main" }}>Total Bonus!</Card>
            </Container>
        </Stack>
    )
}

export default IncomeSummaryTotal;