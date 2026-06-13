import { TableRow, TableHead, TableCell } from '@mui/material';
import { withdrawalReportTableHeadData } from './withdrawalReportTableHeadData';

function WithdrawalReportTableHead() {
  return (
    <TableHead>
      <TableRow>
        {
          withdrawalReportTableHeadData.map((data, i) => (
            <TableCell key={i} sx={{ whiteSpace: "nowrap", color: "primary.main", fontWeight: "bold", fontSize: "1rem" }}>{data}</TableCell>
          ))
        }
      </TableRow>
    </TableHead>
  );
}

export default WithdrawalReportTableHead;