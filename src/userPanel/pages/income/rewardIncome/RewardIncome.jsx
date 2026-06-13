import { Stack, Container, Typography } from '@mui/material';
import RewardIncomeTable from './rewardIncomeTable/RewardIncomeTable';

function RewardIncome() {
    return (
        <Stack  mt={"100px"}>
            <Container><Typography variant="h4" fontWeight="bold" mb={"2rem"}>Reward Income</Typography></Container>
            <RewardIncomeTable />
        </Stack>
    )
}

export default RewardIncome;