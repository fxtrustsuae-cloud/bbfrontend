import { Card, Container, Stack } from "@mui/material"

function TransferReportTotal() {
    return (
        <Stack mt={"2rem"}>
            <Container>
                <Card sx={{ p: "2rem", py: "1rem", borderRadius: "2rem", bgcolor: "primary.main" }}>Total Income!</Card>
            </Container>
        </Stack>
    )
}

export default TransferReportTotal;