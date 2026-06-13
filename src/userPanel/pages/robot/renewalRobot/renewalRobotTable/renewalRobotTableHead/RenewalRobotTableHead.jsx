import { TableRow, TableHead, TableCell } from '@mui/material';
import { renewalRobotTableHeadData } from './renewalRobotTableHeadData';

function RenewalRobotTableHead() {
  return (
    <TableHead>
      <TableRow>
        {
          renewalRobotTableHeadData.map((data, i) => (
            <TableCell key={i} sx={{ whiteSpace: "nowrap", color: "primary.main", fontWeight: "bold", fontSize: "1rem" }}>{data}</TableCell>
          ))
        }
      </TableRow>
    </TableHead>
  );
}

export default RenewalRobotTableHead;