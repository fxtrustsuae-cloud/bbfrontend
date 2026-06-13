import { TableRow, TableCell } from '@mui/material';
import { transferReportTableRowData } from './transferReportTableRowData';

function TransferReportTableRow() {

  return (
    <>
      {
        transferReportTableRowData.map((data, i) => (
          <TableRow key={i}>
            {/* <TableCell sx={{ whiteSpace: 'nowrap' }}>{data['S/N']}</TableCell>
            <TableCell sx={{ whiteSpace: 'nowrap' }}>{data['User ID']}</TableCell>
            <TableCell sx={{ whiteSpace: 'nowrap' }}>{data.Name}</TableCell>
            <TableCell sx={{ whiteSpace: 'nowrap' }}>{data.Subscription}</TableCell>
            <TableCell sx={{ whiteSpace: 'nowrap' }}>{data.Trading}</TableCell>
            <TableCell sx={{ whiteSpace: 'nowrap' }}>{data.Compounding}</TableCell>
            <TableCell sx={{ whiteSpace: 'nowrap' }}>{data.Rank}</TableCell>
            <TableCell sx={{ whiteSpace: 'nowrap' }}>{data['Joining Date']}</TableCell>
            <TableCell sx={{ whiteSpace: 'nowrap' }}>{data['Top up Date']}</TableCell> */}
          </TableRow>
        ))
      }
    </>
  );

}
export default TransferReportTableRow;