import { Card, Container, Stack } from "@mui/material"

function StakingIncomeTotal() {
    return (
        <Stack>
            <Container>
                <Card sx={{ p: "2rem", py: "1rem", borderRadius: "2rem", bgcolor: "primary.main" }}>Total Income: 660</Card>
            </Container>
        </Stack>
    )
}

export default StakingIncomeTotal;