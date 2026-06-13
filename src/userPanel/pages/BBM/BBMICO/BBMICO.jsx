import { Stack, Typography } from '@mui/material';
import BBMICOTable from './BBMICOTable/BBMICOTable.jsx';
import BBMICOTotal from './BBMICOTotal/BBMICOTotal.jsx';
import BBMICOForm from './BBMICOForm/BBMICOForm.jsx';
import BBMICOWallet from './BBMICOWallet/BBMICOWallet.jsx';

function BBMICO() {
  return (
    <Stack>
      <Typography variant="h4" fontWeight="bold">BBM ICO</Typography>
      <BBMICOWallet />
      <BBMICOForm />
      <BBMICOTotal />
      <BBMICOTable />
    </Stack>
  )
}

export default BBMICO;