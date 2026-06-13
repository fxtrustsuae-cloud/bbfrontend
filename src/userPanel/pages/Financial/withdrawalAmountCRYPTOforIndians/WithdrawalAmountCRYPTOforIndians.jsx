import { Stack, Container, Typography } from '@mui/material';
import WithdrawalAmountCRYPTOforIndiansNotice from './withdrawalAmountCRYPTOforIndiansNotice/WithdrawalAmountCRYPTOforIndiansNotice';
import WithdrawalAmountCRYPTOforIndiansForm from "./withdrawalAmountCRYPTOforIndiansForm/WithdrawalAmountCRYPTOforIndiansForm"
import WithdrawalAmountCRYPTOforIndiansTable from './withdrawalAmountCRYPTOforIndiansTable/WithdrawalAmountCRYPTOforIndiansTable';

function WithdrawalAmountCRYPTOforIndians() {
  return (
    <Stack>
      <Container><Typography variant="h4" fontWeight="bold" mb={"2rem"}>Withdrawal Amount (CRYPTO) for Indians</Typography></Container>
      <WithdrawalAmountCRYPTOforIndiansNotice />
      <WithdrawalAmountCRYPTOforIndiansForm />
      <WithdrawalAmountCRYPTOforIndiansTable />
    </Stack>
  )
}

export default WithdrawalAmountCRYPTOforIndians;