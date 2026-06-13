import { Stack, Container, Typography } from '@mui/material';
import BBMSellIncomeWallet from './BBMSellIncomeWallet/BBMSellIncomeWallet.jsx';
import BBMSellIncomeForm from './BBMSellIncomeForm/BBMSellIncomeForm.jsx';
import BBMSellIncomeTotal from './BBMSellIncomeTotal/BBMSellIncomeTotal.jsx';
import BBMSellIncomeTable from './BBMSellIncomeTable/BBMSellIncomeTable.jsx';

function BBMSellIncome() {
  return (
    <Stack>
      <Typography variant="h4" fontWeight="bold">BBM sell token</Typography>
      <BBMSellIncomeWallet />
      <BBMSellIncomeForm />
      {/* <BBMSellIncomeTotal /> */}
      {/* <BBMSellIncomeTable /> */}
    </Stack>
  )
}

export default BBMSellIncome;