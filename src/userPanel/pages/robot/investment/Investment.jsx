import { Stack, Container, Typography } from '@mui/material';
import InvestmentSubscription from './investmentSubscription/InvestmentSubscription';
import InvestmentTable from './investmentTable/InvestmentTable';
import InvestmentWallet from './investmentWallet/InvestmentWallet';
import InvestmentForm from './investmentForm/InvestmentForm';

function Investment() {
  return (
    <Stack  mt={"100px"}>
      <Container><Typography variant="h4" fontWeight="bold" mb={"2rem"}>Investment</Typography></Container>
      <InvestmentSubscription />
      <InvestmentWallet />
      <InvestmentForm />
      <InvestmentTable />
    </Stack>
  )
}

export default Investment;