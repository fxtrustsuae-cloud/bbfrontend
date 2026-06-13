import { Button, Card, Container, Divider, Stack, Typography, Checkbox, TextField, InputLabel } from '@mui/material'
import Grid from "@mui/material/Grid2"
import Selector from "../../../../userPanelComponent/Selector"

function DepositViaGatewayForm() {

  return (
    <Stack mt={"2rem"}>
      <Container>
        <Card
          sx={{
            padding: { xs: "1rem", sm: "2rem" },
            borderRadius: "2rem",
            boxShadow: "0 0px 0px 0 rgba(0, 0, 0, 0.19), 0 0px 8px 0 rgba(0, 0, 0, 0.19)",
          }}
        >
          <Typography variant='h6' m={{ xs: "1rem", sm: "0" }}>Deposit</Typography>
          <Divider sx={{ my: "1.2rem" }} />
          <Stack gap={"2rem"}>
            <Grid container size={12} spacing={3}>
              <Grid item size={{ xs: 12, sm: 6 }}>
                <InputLabel sx={{ mb: ".5rem" }}>Deposit Request For</InputLabel>
                <Selector items={["Robo Fund", "Staking Fund"]} shouldBeFullWidth={true} />
              </Grid>
              <Grid item size={{ xs: 12, sm: 6 }}>
                <InputLabel sx={{ mb: ".5rem" }}>Select Currency</InputLabel>
                <Selector items={["Tether USD (BSC Chain)"]} value={"Tether USD (BSC Chain)"} shouldBeFullWidth={true} />
              </Grid>
              <Grid item size={{ xs: 12, sm: 6 }}>
                <InputLabel sx={{ mb: ".5rem" }}>Amount (USD)</InputLabel>
                <TextField fullWidth placeholder="Enter amount" variant="outlined" />
              </Grid>
              <Grid item sx={{ display: "flex", alignItems: "center" }} size={12}>
                <Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 28 }, margin: "0" }} />
                <Typography>Check me out</Typography>
              </Grid>
            </Grid>
            <Button
              variant='contained'
              sx={{
                textTransform: "capitalize",
                width: "5rem",
                boxShadow: "none",
                bgcolor: "primary.main",
                fontSize: "1rem",
                color: "white",
                "&:hover": {
                  boxShadow: "none"
                }
              }}
            >Deposit</Button>
          </Stack>
        </Card>
      </Container>
    </Stack>
  )
}

export default DepositViaGatewayForm;