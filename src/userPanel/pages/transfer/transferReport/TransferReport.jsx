import { Stack, Container, Typography } from '@mui/material';
import TransferReportTable from "./transferReportTable/TransferReportTable"
import TransferReportTotal from "./transferReportTotal/TransferReportTotal"


function TransferReport() {

  return (
    <Stack  mt={"100px"}>
      <Container><Typography variant="h4" fontWeight="bold" mb={"2rem"}>Transfer Report</Typography></Container>
      <TransferReportTotal />
      <TransferReportTable />
    </Stack>
  )
}

export default TransferReport;