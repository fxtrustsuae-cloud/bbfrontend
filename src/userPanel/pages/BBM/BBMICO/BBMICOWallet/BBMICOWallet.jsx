import { Card, CardContent, Stack, Typography, Skeleton } from '@mui/material';
import Grid from "@mui/material/Grid2"
import { useGetUserProfileQuery } from '../../../../../globalState/settings/profileSettingApi';
import EqualizerIcon from '@mui/icons-material/Equalizer';

function BBMICOWallet() {

  const { data, isLoading } = useGetUserProfileQuery()

  const BBMOICOWalletdata = [
    {
      walletHeading: "Coin Balance",
      walletBalance: !isLoading && data?.data?.COINBalance,
      icon: EqualizerIcon
    },
    {
      walletHeading: "Total team turnover",
      walletBalance: !isLoading && data?.data?.totalBurnTokenTurnover,
      icon: EqualizerIcon
    },
    {
      walletHeading: "This month turnover",
      walletBalance: !isLoading && data?.data?.newBurnTokenTurnover,
      icon: EqualizerIcon
    },
    {
      walletHeading: "Total burned token",
      walletBalance: !isLoading && data?.data?.totalBurnedToken,
      icon: EqualizerIcon
    },
    {
      walletHeading: "Burned token reward",
      walletBalance: !isLoading && data?.data?.totalBurnedTokenReward,
      icon: EqualizerIcon
    },
    {
      walletHeading: "Burned token referral",
      walletBalance: !isLoading && data?.data?.totalBurnedReferralToken,
      icon: EqualizerIcon
    },
    {
      walletHeading: "Total burned income $",
      walletBalance: !isLoading && data?.data?.totalBurnedTokenReward$,
      icon: EqualizerIcon
    }
  ]

  return (
    <Stack mt={"2rem"}>
      <Grid container size={12} spacing={4}>
        {
          BBMOICOWalletdata.map((data, i) => (
            <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
              <Card
                sx={{
                  boxShadow: "0 0px 0px 0 rgba(0, 0, 0, 0.19), 0 0px 8px 0 rgba(0, 0, 0, 0.19)"
                }}
              >
                <CardContent key={i} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <Stack sx={{ flexDirection: "column", gap: ".5rem" }}>
                    <Typography>{data.walletHeading}</Typography>
                    <Typography>
                      {isLoading
                        ? <Skeleton />
                        : Number(data.walletBalance || 0).toLocaleString(undefined, {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 4,
                        })}
                    </Typography>
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

export default BBMICOWallet;