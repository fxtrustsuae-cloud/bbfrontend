import { Stack, Container, Typography } from '@mui/material';
import IBIncomeTable from './IBIncomeTable/IBIncomeTable';
import IBIncomeTotal from './IBIncomeTotal/IBIncomeTotal';

function IBIncome() {
    return (
        <Stack  mt={"100px"}>
            <Container><Typography variant="h4" fontWeight="bold" mb={"2rem"}>IB Income</Typography></Container>
            <IBIncomeTotal />
            <IBIncomeTable />
        </Stack>
    )
}

export default IBIncome;