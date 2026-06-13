import { Stack, Container, Typography } from '@mui/material';
import StakingInTLCSubscription from './stakingInTLCSubscription/StakingInTLCSubscription';
import StakingInTLCForm from './stakingInTLCForm/StakingInTLCForm';
import StakingInTLCWallet from './stakingInTLCWallet/StakingInTLCWallet';
import StakingInTLCTable from './stakingInTLCTable/StakingInTLCTable';

function StakingInTLC() {
  return (
    <Stack  mt={"100px"}>
      <Container><Typography variant="h4" fontWeight="bold" mb={"2rem"}>Staking in TLC</Typography></Container>
      <StakingInTLCSubscription />
      <StakingInTLCWallet />
      <StakingInTLCForm />
      <StakingInTLCTable />
    </Stack>
  )
}

export default StakingInTLC;