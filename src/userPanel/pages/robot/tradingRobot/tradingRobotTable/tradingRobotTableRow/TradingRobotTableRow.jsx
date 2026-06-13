import { TableRow, TableCell, Typography, Stack } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function TradingRobotTableRow({ data, page, rowsPerPage }) {

  return (
    <>
      {
        data.map((item, i) => (
          <TableRow>
            <TableCell key={i} sx={{ whiteSpace: 'nowrap' }}>{page * rowsPerPage + (i + 1)}</TableCell>
            <TableCell key={i} sx={{ whiteSpace: 'nowrap' }}>{item.id}</TableCell>
            <TableCell key={i} sx={{ whiteSpace: 'nowrap' }}>{item.userId}</TableCell>
            <TableCell key={i} sx={{ whiteSpace: 'nowrap' }}>{item.userName}</TableCell>
            <TableCell key={i} sx={{ whiteSpace: 'nowrap' }}>{item.amount}</TableCell>
            <TableCell key={i} sx={{ whiteSpace: 'nowrap' }}>{item.name}</TableCell>
            <TableCell key={i} sx={{ whiteSpace: 'nowrap' }}>{item.remark}</TableCell>
            <TableCell key={i} sx={{ whiteSpace: 'nowrap' }}>{new Date(item.createdAt).toLocaleString()}</TableCell>
            <TableCell align="left" sx={{ whiteSpace: "nowrap" }}>
              <Stack
                sx={{
                  flexDirection: "row",
                  alignItems: 'center',
                  gap: '3px'
                }}
              >
                <FiberManualRecordIcon sx={{ fontSize: '1.2rem', color: item.isDeleted === false ? 'green' : 'red' }} />
                <Typography>{item.isDeleted === false ? "Active" : "Inactive"}</Typography>
              </Stack>
            </TableCell>
          </TableRow>
        ))
      }
    </>
  );

}
export default TradingRobotTableRow;