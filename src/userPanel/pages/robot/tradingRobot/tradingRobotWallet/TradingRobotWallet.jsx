import { Card, CardContent, Stack, Typography, Container } from '@mui/material';
import EqualizerIcon from '@mui/icons-material/Equalizer';


const data = { walletHeading: "Wallet Balance", walletBalance: "$0.71", icon: <EqualizerIcon sx={{ fontSize: "5rem", color: "primary.main" }} /> }

function TradingRobotWallet() {
  return (
    <Stack mt={"2rem"}>
      <Container>
        <Card
          sx={{
            boxShadow: "0 0px 0px 0 rgba(0, 0, 0, 0.19), 0 0px 8px 0 rgba(0, 0, 0, 0.19)",
            borderRadius: "2rem",
            padding: "1.2rem"
          }}
        >
          <CardContent sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Stack sx={{ flexDirection: "column", gap: ".5rem" }}>
              <Typography fontSize={"1.2rem"}>{data.walletHeading}</Typography>
              <Typography variant='h4' sx={{ fontWeight: "bold" }}>{data.walletBalance}</Typography>
            </Stack>
            <Typography>{data.icon}</Typography>
          </CardContent>
        </Card>
      </Container>
    </Stack>
  )
}

export default TradingRobotWallet;