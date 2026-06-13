import { Stack, Container, Typography } from '@mui/material';
import RewardNotice from "./rewardNotice/RewardNotice"
import RewardTable from "./rewardTable/RewardTable"

function Reward() {
  return (
    <Stack  mt={"100px"}>
      <Container><Typography variant="h4" fontWeight="bold" mb={"2rem"}>Reward</Typography></Container>
      <RewardNotice />
      <RewardTable />
    </Stack>
  )
}

export default Reward;