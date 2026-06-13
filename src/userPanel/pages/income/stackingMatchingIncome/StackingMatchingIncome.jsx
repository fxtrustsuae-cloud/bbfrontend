import { Stack, Container, Typography } from '@mui/material';
import StackingMatchingIncomeTable from './stackingMatchingIncomeTable/StackingMatchingIncomeTable';

function StackingMatchingIncome() {
    return (
        <Stack  mt={"100px"}>
            <Typography variant="h4" fontWeight="bold" mb={"2rem"}>Staking Matching Income</Typography>
            <StackingMatchingIncomeTable />
        </Stack>
    )
}

export default StackingMatchingIncome;