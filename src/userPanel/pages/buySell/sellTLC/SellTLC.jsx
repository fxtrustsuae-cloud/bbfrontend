import { Stack, Container, Typography } from '@mui/material';
import SellTLCNotice from "./sellTLCNotice/SellTLCNotice"
import SellTLCWallet from "./sellTLCWallet/SellTLCWallet.jsx"
import SellTLCForm from "./sellTLCForm/SellTLCForm"


function SellTLC() {
  return (
    <Stack  mt={"100px"}>
      <Container><Typography variant="h4" fontWeight="bold" mb={"2rem"}>Sell TLC</Typography></Container>
      <SellTLCNotice />
      <SellTLCWallet />
      <SellTLCForm />
    </Stack>
  )
}

export default SellTLC;