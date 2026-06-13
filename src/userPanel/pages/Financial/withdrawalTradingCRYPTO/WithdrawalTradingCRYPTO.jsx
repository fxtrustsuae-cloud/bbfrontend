import { Stack, Container, Typography } from '@mui/material';
import WithdrawalTradingCRYPTONotice from './withdrawalTradingCRYPTONotice/WithdrawalTradingCRYPTONotice';
import WithdrawalTradingCRYPTOForm from "./withdrawalTradingCRYPTOForm/WithdrawalTradingCRYPTOForm"
import WithdrawalTradingCRYPTOTable from './withdrawalTradingCRYPTOTable/WithdrawalTradingCRYPTOTable'
function WithdrawalTradingCRYPTO() {
  return (
    <Stack  mt={"100px"}>
      <Container><Typography variant="h4" fontWeight="bold" mb={"2rem"}>withdrawal-trading-(CRYPTO)</Typography></Container>
      <WithdrawalTradingCRYPTONotice />
      <WithdrawalTradingCRYPTOForm />
      <WithdrawalTradingCRYPTOTable />
    </Stack>
  )
}

export default WithdrawalTradingCRYPTO;