import { TableRow, TableHead, TableCell } from '@mui/material';
import { buySellReportTableHeadData } from './buySellReportTableHeadData';

function BuySellReportTableHead() {
  return (
    <TableHead>
      <TableRow>
        {
          buySellReportTableHeadData.map((data, i) => (
            <TableCell key={i} sx={{ whiteSpace: "nowrap", color: "primary.main", fontWeight: "bold", fontSize: "1rem" }}>{data}</TableCell>
          ))
        }
      </TableRow>
    </TableHead>
  );
}

export default BuySellReportTableHead;