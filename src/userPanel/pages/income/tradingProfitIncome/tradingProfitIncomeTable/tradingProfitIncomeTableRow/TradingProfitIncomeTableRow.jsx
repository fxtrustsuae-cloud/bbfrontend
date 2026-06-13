import { TableRow, TableCell } from '@mui/material';
import { tradingProfitIncomeTableRowData } from './tradingProfitIncomeTableRowData';

function TradingProfitIncomeTableRow() {

  return (
    <>
      {
        tradingProfitIncomeTableRowData.map((data, i) => (
          <TableRow>
            <TableCell key={i} sx={{ whiteSpace: 'nowrap' }}>{data['S/N']}</TableCell>
            <TableCell key={i} sx={{ whiteSpace: 'nowrap' }}>{data.Profit}</TableCell>
            <TableCell key={i} sx={{ whiteSpace: 'nowrap' }}>{data.Income}</TableCell>
            <TableCell key={i} sx={{ whiteSpace: 'nowrap' }}>{data.Date}</TableCell>
          </TableRow>
        ))
      }
    </>
  );

}
export default TradingProfitIncomeTableRow;