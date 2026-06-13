import { TableRow, TableHead, TableCell } from '@mui/material';
import { TLCTwoPointOICOLevelIncomeTableHeadData } from './TLCTwoPointOICOLevelIncomeTableHeadData';

function BBMCoinTransactionsTableHead() {
  return (
    <TableHead>
      <TableRow>
        {
          TLCTwoPointOICOLevelIncomeTableHeadData.map((data, i) => (
            <TableCell key={i} sx={{ whiteSpace: "nowrap", color: "primary.main", fontWeight: "bold", fontSize: "1rem" }}>{data}</TableCell>
          ))
        }
      </TableRow>
    </TableHead>
  );
}

export default BBMCoinTransactionsTableHead;