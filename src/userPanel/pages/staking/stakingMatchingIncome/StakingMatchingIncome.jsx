import { Stack, Container, Typography } from '@mui/material';
import StakingMatchingIncomeTable from './StakingMatchingIncomeTable/StakingMatchingIncomeTable';

function StakingMatchingIncome() {
  return (
    <Stack>
      <Typography variant="h4" fontWeight="bold" mb={"2rem"}>Staking Matching Income</Typography>
      <StakingMatchingIncomeTable />
    </Stack>
  )
}

export default StakingMatchingIncome;