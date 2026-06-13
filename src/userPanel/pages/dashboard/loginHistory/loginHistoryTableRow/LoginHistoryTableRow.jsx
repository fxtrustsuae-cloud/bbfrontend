import { TableRow, TableCell } from '@mui/material';

function LoginHistoryTableRow({ rowsPerPage, data, page }) {

  return (
    <>
      {
        Array.isArray(data) && data.map((item, i) => (
          <TableRow key={i}>
            <TableCell sx={{ whiteSpace: 'nowrap' }}>{page * rowsPerPage + (i + 1)}</TableCell>
            <TableCell sx={{ whiteSpace: 'nowrap' }}>{item.userId}</TableCell>
            <TableCell sx={{ whiteSpace: 'nowrap' }}>{item.ipAddress}</TableCell>
            <TableCell>{item.device}</TableCell>
            <TableCell sx={{ whiteSpace: 'nowrap' }}>{new Date(item.timestamp).toLocaleString()}</TableCell>
          </TableRow>
        ))
      }
    </>
  );

}
export default LoginHistoryTableRow;