import { TableRow, TableCell } from '@mui/material';
import { incomeSummaryTableRowData } from './incomeSummaryTableRowData';

function IncomeSummaryTableRow() {

  return (
    <>
      {
        incomeSummaryTableRowData.map((data, i) => (
          <TableRow key={i}>
            {/* <TableCell sx={{ whiteSpace: 'nowrap' }}>{data['S/N']}</TableCell>
            <TableCell sx={{ whiteSpace: 'nowrap' }}>{data.Amount}</TableCell>
            <TableCell sx={{ whiteSpace: 'nowrap' }}>{data['Fee(-)']}</TableCell>
            <TableCell sx={{ whiteSpace: 'nowrap' }}>{data['Gross(+)']}</TableCell>
            <TableCell sx={{ whiteSpace: 'nowrap' }}>{data['Address/Bank']}</TableCell>
            <TableCell sx={{ whiteSpace: 'nowrap' }}>{data.Date}</TableCell>
            <TableCell sx={{ whiteSpace: 'nowrap' }}>{data.Status}</TableCell>
            <TableCell sx={{ whiteSpace: 'nowrap' }}>{data['Transaction Hash']}</TableCell>
            <TableCell sx={{ whiteSpace: 'nowrap' }}>{data.Remarks}</TableCell> */}
          </TableRow>
        ))
      }
    </>
  );

}
export default IncomeSummaryTableRow;