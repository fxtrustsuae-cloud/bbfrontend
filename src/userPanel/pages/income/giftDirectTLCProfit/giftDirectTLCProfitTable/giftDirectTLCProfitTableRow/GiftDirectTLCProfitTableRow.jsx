import { TableRow, TableCell } from '@mui/material';
import { giftDirectTLCProfitTableRowData } from './giftDirectTLCProfitTableRowData';

function GiftDirectTLCProfitTableRow() {

  return (
    <>
      {
        giftDirectTLCProfitTableRowData.map((data, i) => (
          <TableRow>
            <TableCell key={i} sx={{ whiteSpace: 'nowrap' }}>{data['S/N']}</TableCell>
            <TableCell key={i} sx={{ whiteSpace: 'nowrap' }}>{data['User ID']}</TableCell>
            <TableCell key={i} sx={{ whiteSpace: 'nowrap' }}>{data.Name}</TableCell>
            <TableCell key={i} sx={{ whiteSpace: 'nowrap' }}>{data['TLC Token']}</TableCell>
            <TableCell key={i} sx={{ whiteSpace: 'nowrap' }}>{data.Date}</TableCell>
          </TableRow>
        ))
      }
    </>
  );

}
export default GiftDirectTLCProfitTableRow;