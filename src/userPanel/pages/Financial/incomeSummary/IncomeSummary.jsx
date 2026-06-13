import { Stack, Container, Typography } from '@mui/material';
import IncomeSummaryTable from "./incomeSummaryTable/IncomeSummaryTable"
import IncomeSummaryTotal from './incomeSummaryTotal/IncomeSummaryTotal';

function IncomeSummary() {
  return (
    <Stack  mt={"100px"}>
      <Container><Typography variant="h4" fontWeight="bold" mb={"2rem"}>Income Summary</Typography></Container>
      <IncomeSummaryTotal />
      <IncomeSummaryTable />
    </Stack>
  )
}

export default IncomeSummary;