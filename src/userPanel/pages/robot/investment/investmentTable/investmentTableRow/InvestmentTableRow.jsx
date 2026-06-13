import { TableRow, TableCell } from '@mui/material';
import { investmentTableRowData } from './investmentTableRowData';

function InvestmentTableRow() {

  return (
    <>
      {
        investmentTableRowData.map((data, i) => (
          <TableRow>
            <TableCell key={i} sx={{ whiteSpace: 'nowrap' }}>{data['S/N']}</TableCell>
            <TableCell key={i} sx={{ whiteSpace: 'nowrap' }}>{data['User ID']}</TableCell>
            <TableCell key={i} sx={{ whiteSpace: 'nowrap' }}>{data.Name}</TableCell>
            <TableCell key={i} sx={{ whiteSpace: 'nowrap' }}>{data.Amount}</TableCell>
            <TableCell key={i} sx={{ whiteSpace: 'nowrap' }}>{data['Trading Type']}</TableCell>
            <TableCell key={i} sx={{ whiteSpace: 'nowrap' }}>{data.Period}</TableCell>
            <TableCell key={i} sx={{ whiteSpace: 'nowrap' }}>{data.Date}</TableCell>
            <TableCell key={i} sx={{ whiteSpace: 'nowrap' }}>{data.Remarks}</TableCell>
          </TableRow>
        ))
      }
    </>
  );

}
export default InvestmentTableRow;