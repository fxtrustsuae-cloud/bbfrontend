import { TableRow, TableHead, TableCell } from '@mui/material';
import { tradingProfitIncomeTableHeadData } from './tradingProfitIncomeTableHeadData';

function TradingProfitIncomeTableHead() {
  return (
    <TableHead>
      <TableRow>
        {
          tradingProfitIncomeTableHeadData.map((data, i) => (
            <TableCell key={i} sx={{ whiteSpace: "nowrap", color: "primary.main", fontWeight: "bold", fontSize: "1rem" }}>{data}</TableCell>
          ))
        }
      </TableRow>
    </TableHead>
  );
}

export default TradingProfitIncomeTableHead;