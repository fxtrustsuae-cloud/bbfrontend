import { Stack, Typography, Box, Divider } from '@mui/material';
import Loading from '../../../../userPanelComponent/Loading';
import CloseIcon from '@mui/icons-material/Close';

function ReferralInfo({ data, loading, onClose }) {

  const dataInfo = {
    "Name": data?.name || "N/A",
    "Referral code": data?.referralCode || "N/A",
    Email: data?.email || "N/A",
    Sponser: data?.sponser || "N/A",
    "Total team turnover balance": data?.totalTeamTurnoverBalance || "N/A",
    "Total team": data?.totalTeam || "N/A",
    "Total reward balance": data?.totalRewardBalance || "N/A",
    "Total staked balance": data?.totalStakedBalance || "N/A",
    "Login id": data?.loginId || "N/A",
    "Direct referral team": data?.directReferralTeam || "N/A"
  }

  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: ".5rem",
        borderRadius: "2rem"
      }}
    >
      <Stack sx={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <Typography variant="h5" fontWeight="bold">Referral User data</Typography>
        <CloseIcon sx={{ cursor: "pointer" }} onClick={onClose} />
      </Stack>
      <Divider sx={{ my: "5px" }} />
      {
        loading
          ?
          <Loading />
          :
          Object.entries(dataInfo)?.map(([keys, values], i) => (
            <Box
              key={i}
              sx={{
                display: "flex",
                gap: "1rem",
                justifyContent: "space-between"
              }}
            >
              <Typography>{keys} :</Typography>
              <Typography>{values}</Typography>
            </Box>
          ))
      }
    </Stack>
  )

}

export default ReferralInfo;