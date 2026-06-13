import { Card, CardContent, Skeleton, Stack, Typography } from '@mui/material';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import Grid from "@mui/material/Grid2"
import { useGetUserProfileQuery } from "../../../../../globalState/settings/profileSettingApi"


function BBMSellIncomeWallet() {

  const { data, isLoading } = useGetUserProfileQuery()

  const TLCTwoPointOICOWalletdata = [
    {
      walletHeading: "Coin Balance",
      walletBalance: !isLoading && data?.data?.COINBalance,
      icon: EqualizerIcon
    },
    {
      walletHeading: "Total sell token",
      walletBalance: !isLoading && data?.data?.totalSoldToken,
      icon: EqualizerIcon
    }
  ]

  return (
    <Stack mt={"2rem"}>
      <Grid container size={12} spacing={4}>
        {
          TLCTwoPointOICOWalletdata.map((data, i) => (
            <Grid item size={{ xs: 12, sm: 6 }}>
              <Card
                sx={{
                  boxShadow: "0 0px 0px 0 rgba(0, 0, 0, 0.19), 0 0px 8px 0 rgba(0, 0, 0, 0.19)",
                  borderRadius: "1rem"
                }}
              >
                <CardContent key={i} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <Stack sx={{ flexDirection: "column", gap: ".5rem" }}>
                    <Typography sx={{ fontSize: "1.2rem" }}>{isLoading ? <Skeleton /> : data.walletHeading}</Typography>
                    <Typography sx={{ fontSize: "1.5rem" }}>{isLoading ? <Skeleton /> : `$ ${data.walletBalance}`}</Typography>
                  </Stack>
                  <Typography><data.icon sx={{ fontSize: "5rem", color: "primary.main" }} /></Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        }
      </Grid>
    </Stack>
  )
}

export default BBMSellIncomeWallet;