import { Stack, Container, Typography } from '@mui/material';
import MatchingIncomeTable from './matchingIncomeTable/MatchingIncomeTable';
import MatchingIncomeTotal from './matchingIncomeTotal/MatchingIncomeTotal';

function MatchingIncome() {
    return (
        <Stack  mt={"100px"}>
            <Container><Typography variant="h4" fontWeight="bold" mb={"2rem"}>Matching Income</Typography></Container>
            <MatchingIncomeTotal />
            <MatchingIncomeTable />
        </Stack>
    )
}

export default MatchingIncome;