import { Stack, Typography } from '@mui/material';
import BBMCoinTransactionsTable from './BBMCoinTransactionsTable/BBMCoinTransactionsTable';

function BBMCoinTransactions() {
  return (
    <Stack>
      <Typography variant="h4" fontWeight="bold">BBM coin transactions</Typography>
      <BBMCoinTransactionsTable/>
    </Stack>
  )
}

export default BBMCoinTransactions;