import { Stack, Container, Typography } from '@mui/material';
import WithdrawalReportTable from "./withdrawalReportTable/WithdrawalReportTable"


function WithdrawalReport() {
  return (
    <Stack  mt={"100px"}>
      <Container><Typography variant="h4" fontWeight="bold" mb={"2rem"}>Withdrawal Report</Typography></Container>
      <WithdrawalReportTable />
    </Stack>
  )
}

export default WithdrawalReport;