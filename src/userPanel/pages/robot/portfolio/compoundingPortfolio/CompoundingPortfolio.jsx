import { Card, Container, Stack, Typography, Divider } from "@mui/material";

function CompoundingPortfolio() {
  return (
    <Stack mt={"2rem"}>
      <Container>
        <Card
          sx={{
            boxShadow: "0 0px 0px 0 rgba(0, 0, 0, 0.19), 0 0px 8px 0 rgba(0, 0, 0, 0.19)",
            p: '2rem',
            borderRadius: '2rem'
          }}
        >
          <Typography fontSize={"1.2rem"}>Compounding Portfolio</Typography>
          <Divider sx={{ my: "1.2rem" }} />
        </Card>
      </Container>
    </Stack>
  )
}

export default CompoundingPortfolio;