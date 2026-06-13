import { Stack, Container, Typography } from '@mui/material';
import TransferToPackageWalletForm from './transferToPackageWalletForm/TransferToPackageWalletForm';
import TransferToPackageWalletBalance from './transferToPackageWalletBalance/TransferToPackageWalletBalance.jsx';

function TransferToPackageWallet() {
  return (
    <Stack  mt={"100px"}>
      <Container><Typography variant="h4" fontWeight="bold" mb={"2rem"}>Transfer To Package Wallet</Typography></Container>
      <TransferToPackageWalletBalance />
      <TransferToPackageWalletForm />
    </Stack>
  )
}

export default TransferToPackageWallet;