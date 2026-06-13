import { Stack, Container, Typography } from '@mui/material';
import StakingIncomeTable from './stakingIncomeTable/StakingIncomeTable';
import StakingIncomeTotal from './stakingIncomeTotal/StakingIncomeTotal';

function StakingIncome() {
  return (
    <Stack>
      <Typography variant="h4" fontWeight="bold" mb={"2rem"}>Staking Income</Typography>
      <StakingIncomeTotal />
      <StakingIncomeTable />
    </Stack>
  )
}

export default StakingIncome;