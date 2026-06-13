import { Stack, Container, Typography } from '@mui/material';
import ReceiveReportTable from "./receiveReportTable/ReceiveReportTable"
import ReceiveReportTotal from "./receiveReportTotal/ReceiveReportTotal"


function ReceiveReport() {

  return (
    <Stack  mt={"100px"}>
      <Container><Typography variant="h4" fontWeight="bold" mb={"2rem"}>Receive Report</Typography></Container>
      <ReceiveReportTotal />
      <ReceiveReportTable />
    </Stack>
  )
}

export default ReceiveReport;