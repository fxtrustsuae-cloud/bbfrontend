import { Stack, Container, Typography } from '@mui/material';
import CompoundingProfitIncomeTable from './compoundingProfitIncomeTable/CompoundingProfitIncomeTable';
import CompoundingProfitIncomeTotal from './compoundingProfitIncomeTotal/CompoundingProfitIncomeTotal';

function CompoundingProfitIncome() {
    return (
        <Stack  mt={"100px"}>
            <Container><Typography variant="h4" fontWeight="bold" mb={"2rem"}>Compounding Profit Income</Typography></Container>
            <CompoundingProfitIncomeTotal />
            <CompoundingProfitIncomeTable />
        </Stack>
    )
}

export default CompoundingProfitIncome;