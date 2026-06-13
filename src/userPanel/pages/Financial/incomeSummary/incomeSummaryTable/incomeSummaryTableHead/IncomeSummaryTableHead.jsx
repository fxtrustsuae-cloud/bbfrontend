import { TableRow, TableHead, TableCell } from '@mui/material';
import { incomeSummaryTableHeadData } from './incomeSummaryTableHeadData';

function IncomeSummaryTableHead() {
  return (
    <TableHead>
      <TableRow>
        {
          incomeSummaryTableHeadData.map((data, i) => (
            <TableCell key={i} sx={{ whiteSpace: "nowrap", color: "primary.main", fontWeight: "bold", fontSize: "1rem" }}>{data}</TableCell>
          ))
        }
      </TableRow>
    </TableHead>
  );
}

export default IncomeSummaryTableHead;