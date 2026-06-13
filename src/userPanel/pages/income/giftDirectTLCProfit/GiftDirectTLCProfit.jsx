import { Stack, Container, Typography } from '@mui/material';
import GiftDirectTLCProfitTotal from './giftDirectTLCProfitTotal/GiftDirectTLCProfitTotal';
import GiftDirectTLCProfitTable from './giftDirectTLCProfitTable/GiftDirectTLCProfitTable';

function GiftDirectTLCProfit() {
    return (
        <Stack  mt={"100px"}>
            <Container><Typography variant="h4" fontWeight="bold" mb={"2rem"}>Direct TLC Profit</Typography></Container>
            <GiftDirectTLCProfitTotal />
            <GiftDirectTLCProfitTable />
        </Stack>
    )
}

export default GiftDirectTLCProfit;