import { Stack, Container, Typography } from '@mui/material';
import TradingProfitIncomeTable from './tradingProfitIncomeTable/TradingProfitIncomeTable';
import TradingProfitIncomeTotal from './tradingProfitIncomeTotal/TradingProfitIncomeTotal';

function TradingProfitIncome() {
    return (
        <Stack  mt={"100px"}>
            <Container><Typography variant="h4" fontWeight="bold" mb={"2rem"}>Trading Profit Income</Typography></Container>
            <TradingProfitIncomeTotal />
            <TradingProfitIncomeTable />
        </Stack>
    )
}

export default TradingProfitIncome;