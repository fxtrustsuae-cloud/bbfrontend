import { TableRow, TableCell } from '@mui/material';
import { TLCTwoPointOICOTableRowData } from './TLCTwoPointOICOTableRowData';

function BBMSellIncomeTableRow() {

  return (
    <>
      {
        TLCTwoPointOICOTableRowData.map((data, i) => (
          <TableRow key={i}>
            {/* <TableCell key={i} sx={{ whiteSpace: 'nowrap' }}>{data['S/N']}</TableCell>
            <TableCell key={i} sx={{ whiteSpace: 'nowrap' }}>{data['User ID']}</TableCell>
            <TableCell key={i} sx={{ whiteSpace: 'nowrap' }}>{data.Name}</TableCell>
            <TableCell key={i} sx={{ whiteSpace: 'nowrap' }}>{data.Amount}</TableCell>
            <TableCell key={i} sx={{ whiteSpace: 'nowrap' }}>{data.Date}</TableCell>
            <TableCell key={i} sx={{ whiteSpace: 'nowrap' }}>{data.Remarks}</TableCell> */}
          </TableRow>
        ))
      }
    </>
  );

}
export default BBMSellIncomeTableRow;