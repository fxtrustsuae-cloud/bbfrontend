import { TableRow, TableHead, TableCell } from '@mui/material';
import { accountStatementTableHeadData } from './accountStatementTableHeadData';

function AccountStatementTableHead() {
  return (
    <TableHead>
      <TableRow>
        {
          accountStatementTableHeadData.map((data, i) => (
            <TableCell key={i} sx={{ whiteSpace: "nowrap", color: "primary.main", fontWeight: "bold", fontSize: "1rem" }}>{data}</TableCell>
          ))
        }
      </TableRow>
    </TableHead>
  );
}

export default AccountStatementTableHead;