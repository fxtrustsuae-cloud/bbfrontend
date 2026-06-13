import { Stack, Container, Typography } from '@mui/material';
import WalletHistoryTable from "./walletHistoryTable/WalletHistoryTable"

function WalletHistory() {
  return (
    <Stack  mt={"100px"}>
      <Container><Typography variant="h4" fontWeight="bold" mb={"2rem"}>Wallet History</Typography></Container>
      <WalletHistoryTable />
    </Stack>
  )
}

export default WalletHistory;