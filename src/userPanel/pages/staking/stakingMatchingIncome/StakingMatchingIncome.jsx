import { Stack, Container, Typography } from '@mui/material';
import StakingMatchingIncomeTable from './StakingMatchingIncomeTable/StakingMatchingIncomeTable';

function StakingMatchingIncome() {
  return (
    <Stack  mt={"100px"}>
      <Container><Typography variant="h4" fontWeight="bold" mb={"2rem"}>Staking Matching Income</Typography></Container>
      <StakingMatchingIncomeTable />
    </Stack>
  )
}

export default StakingMatchingIncome;