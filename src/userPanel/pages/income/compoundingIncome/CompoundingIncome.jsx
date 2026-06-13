import { Stack, Container, Typography } from '@mui/material';
import CompoundingIncomeTotal from './compoundingIncomeTotal/CompoundingIncomeTotal';
import CompoundingIncomeTable from './compoundingIncomeTable/CompoundingIncomeTable';

function CompoundingIncome() {
    return (
        <Stack  mt={"100px"}>
            <Container><Typography variant="h4" fontWeight="bold" mb={"2rem"}>Compounding Income</Typography></Container>
            <CompoundingIncomeTotal />
            <CompoundingIncomeTable />
        </Stack>
    )
}

export default CompoundingIncome;