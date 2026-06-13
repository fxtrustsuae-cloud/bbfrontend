import { Stack, Container, Typography } from '@mui/material';
import TransferTLCGiftNewNotice from "./transferTLCGiftNewNotice/TransferTLCGiftNewNotice.jsx"
import TransferTLCGiftNewWallet from "./transferTLCGiftNewWallet/TransferTLCGiftNewWallet"
import TransferTLCGiftNewForm from "./transferTLCGiftNewForm/TransferTLCGiftNewForm"
import TransferTLCGiftNewTotal from "./transferTLCGiftNewTotal/TransferTLCGiftNewTotal"
import TransferTLCGiftNewTable from "./transferTLCGiftNewTable/TransferTLCGiftNewTable"


function TransferTLCGiftNew() {
  return (
    <Stack  mt={"100px"}>
      <Container><Typography variant="h4" fontWeight="bold" mb={"2rem"}>Transfer TLC Gift New</Typography></Container>
      <TransferTLCGiftNewNotice />
      <TransferTLCGiftNewWallet />
      <TransferTLCGiftNewForm />
      <TransferTLCGiftNewTotal />
      <TransferTLCGiftNewTable />
    </Stack>
  )
}

export default TransferTLCGiftNew;