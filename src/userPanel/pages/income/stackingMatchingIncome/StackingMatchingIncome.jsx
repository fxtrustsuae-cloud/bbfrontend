import { Stack, Container, Typography } from '@mui/material';
import StackingMatchingIncomeTable from './stackingMatchingIncomeTable/StackingMatchingIncomeTable';

function StackingMatchingIncome() {
    return (
        <Stack  mt={"100px"}>
            <Container><Typography variant="h4" fontWeight="bold" mb={"2rem"}>Staking Matching Income</Typography></Container>
            <StackingMatchingIncomeTable />
        </Stack>
    )
}

export default StackingMatchingIncome;