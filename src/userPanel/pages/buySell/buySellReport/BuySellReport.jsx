import { Stack, Container, Typography } from '@mui/material';
import BuySellReportTotal from "./buySellReportTotal/BuySellReportTotal"
import BuySellReportTable from "./buySellReportTable/BuySellReportTable"


function BuySellReport() {
  return (
    <Stack mt={"100px"}>
      <Container><Typography variant="h4" fontWeight="bold" mb={"2rem"}>Buy/Sell Report</Typography></Container>
      <BuySellReportTotal />
      <BuySellReportTable />
    </Stack>
  )
}

export default BuySellReport;