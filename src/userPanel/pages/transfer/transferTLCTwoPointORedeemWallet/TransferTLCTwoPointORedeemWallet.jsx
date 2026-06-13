import { Stack, Container, Typography } from '@mui/material';
import TransferTLCTwoPointORedeemWalletNotice from "./transferTLCTwoPointORedeemWalletNotice/TransferTLCTwoPointORedeemWalletNotice"
import TransferTLCTwoPointORedeemWalletBalance from "./transferTLCTwoPointORedeemWalletBalance/TransferTLCTwoPointORedeemWalletBalance"
import TransferTLCTwoPointORedeemWalletForm from "./transferTLCTwoPointORedeemWalletForm/TransferTLCTwoPointORedeemWalletForm"
import TransferTLCTwoPointORedeemWalletTotal from "./transferTLCTwoPointORedeemWalletTotal/TransferTLCTwoPointORedeemWalletTotal"
import TransferTLCTwoPointORedeemWalletTable from "./transferTLCTwoPointORedeemWalletTable/TransferTLCTwoPointORedeemWalletTable"


function TransferTLCTwoPointORedeemWallet() {
  return (
    <Stack  mt={"100px"}>
      <Container><Typography variant="h4" fontWeight="bold" mb={"2rem"}>Transfer TLC 2.0 Redeem Wallet</Typography></Container>
      <TransferTLCTwoPointORedeemWalletNotice />
      <TransferTLCTwoPointORedeemWalletBalance />
      <TransferTLCTwoPointORedeemWalletForm />
      <TransferTLCTwoPointORedeemWalletTotal />
      <TransferTLCTwoPointORedeemWalletTable />
    </Stack>
  )
}

export default TransferTLCTwoPointORedeemWallet;