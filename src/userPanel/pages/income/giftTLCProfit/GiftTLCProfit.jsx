import { Stack, Container, Typography } from '@mui/material';
import GiftTLCProfitTotal from './giftTLCProfitTotal/GiftTLCProfitTotal';
import GiftTLCProfitTable from './giftTLCProfitTable/GiftTLCProfitTable';

function GiftTLCProfit() {
    return (
        <Stack  mt={"100px"}>
            <Container><Typography variant="h4" fontWeight="bold" mb={"2rem"}>TLC Profit</Typography></Container>
            <GiftTLCProfitTotal />
            <GiftTLCProfitTable />
        </Stack>
    )
}

export default GiftTLCProfit;