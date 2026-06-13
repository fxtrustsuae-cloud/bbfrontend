import { TableRow, TableHead, TableCell } from '@mui/material';
import { receiveReportTableHeadData } from './receiveReportTableHeadData';

function ReceiveReportTableHead() {
  return (
    <TableHead>
      <TableRow>
        {
          receiveReportTableHeadData.map((data, i) => (
            <TableCell key={i} sx={{ whiteSpace: "nowrap", color: "primary.main", fontWeight: "bold", fontSize: "1rem" }}>{data}</TableCell>
          ))
        }
      </TableRow>
    </TableHead>
  );
}

export default ReceiveReportTableHead;