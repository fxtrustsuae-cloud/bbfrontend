import { Stack, Container, Typography } from '@mui/material';
import StakingIncomeTable from './stakingIncomeTable/StakingIncomeTable';
import StakingIncomeTotal from './stakingIncomeTotal/StakingIncomeTotal';

function StakingIncome() {
  return (
    <Stack  mt={"100px"}>
      <Container><Typography variant="h4" fontWeight="bold" mb={"2rem"}>Staking Income</Typography></Container>
      <StakingIncomeTotal />
      <StakingIncomeTable />
    </Stack>
  )
}

export default StakingIncome;