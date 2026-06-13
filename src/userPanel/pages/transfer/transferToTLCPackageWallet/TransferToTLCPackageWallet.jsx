import { Stack, Container, Typography } from '@mui/material';
import TransferToTLCPackageWalletForm from "./transferToTLCPackageWalletForm/TransferToTLCPackageWalletForm"
import TransferToTLCPackageWalletBalance from "./transferToTLCPackageWalletBalance/TransferToTLCPackageWalletBalance"

function TransferToTLCPackageWallet() {
  return (
    <Stack  mt={"100px"}>
      <Container><Typography variant="h4" fontWeight="bold" mb={"2rem"}>Transfer to TLC Package Wallet</Typography></Container>
      <TransferToTLCPackageWalletBalance />
      <TransferToTLCPackageWalletForm />
    </Stack>
  )
}

export default TransferToTLCPackageWallet;