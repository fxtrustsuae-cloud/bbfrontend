import { Stack, Container, Typography } from '@mui/material';
import TradingLevelIncomeTable from './tradingLevelIncomeTable/TradingLevelIncomeTable';
import TradingLevelIncomeTotal from './tradingLevelIncomeTotal/TradingLevelIncomeTotal';

function TradingLevelIncome() {
    return (
        <Stack  mt={"100px"}>
            <Container><Typography variant="h4" fontWeight="bold" mb={"2rem"}>Trading Level Income</Typography></Container>
            <TradingLevelIncomeTotal />
            <TradingLevelIncomeTable />
        </Stack>
    )
}

export default TradingLevelIncome;