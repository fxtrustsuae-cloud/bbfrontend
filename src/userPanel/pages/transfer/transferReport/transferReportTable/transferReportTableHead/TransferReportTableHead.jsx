import { TableRow, TableHead, TableCell } from '@mui/material';
import { transferReportTableHeadData } from './transferReportTableHeadData';

function TransferReportTableHead() {
  return (
    <TableHead>
      <TableRow>
        {
          transferReportTableHeadData.map((data, i) => (
            <TableCell key={i} sx={{ whiteSpace: "nowrap", color: "primary.main", fontWeight: "bold", fontSize: "1rem" }}>{data}</TableCell>
          ))
        }
      </TableRow>
    </TableHead>
  );
}

export default TransferReportTableHead;