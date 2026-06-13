import { TableRow, TableHead, TableCell } from '@mui/material';
import { topTenTransactionHistoryTableHeadData } from './topTenTransactionHistoryTableHeadData';

function TopTenTransactionHistoryTableHead() {
  return (
    <TableHead>
      <TableRow>
        {
          topTenTransactionHistoryTableHeadData.map((data, i) => (
            <TableCell key={i} sx={{ whiteSpace: "nowrap", color: "primary.main", fontWeight: "bold", fontSize: "1rem" }}>{data}</TableCell>
          ))
        }
      </TableRow>
    </TableHead>
  );
}

export default TopTenTransactionHistoryTableHead;