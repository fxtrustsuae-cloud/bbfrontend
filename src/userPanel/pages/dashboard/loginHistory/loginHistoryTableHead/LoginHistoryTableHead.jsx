import { TableRow, TableHead, TableCell } from '@mui/material';
import { allLoginHistoryTableHeadData } from './allLoginHistoryTableHeadData';

function LoginHistoryTableHead() {
  return (
    <TableHead>
      <TableRow>
        {
          allLoginHistoryTableHeadData.map((data, i) => (
            <TableCell key={i} sx={{ whiteSpace: "nowrap", color: "primary.main", fontWeight: "bold", fontSize: "1rem" }}>{data}</TableCell>
          ))
        }
      </TableRow>
    </TableHead>
  );
}

export default LoginHistoryTableHead;