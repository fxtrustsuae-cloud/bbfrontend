import { Card, Container, Stack } from "@mui/material"

function CompoundingIncomeTotal() {
    return (
        <Stack>
            <Container>
                <Card sx={{ p: "2rem", py: "1rem", borderRadius: "2rem", bgcolor: "primary.main" }}>Total Income: 15</Card>
            </Container>
        </Stack>
    )
}

export default CompoundingIncomeTotal;