import { TableRow, TableCell } from '@mui/material';
import { TLCTwoPointOProfitTableRowData } from "./TLCTwoPointOProfitTableRowData"


function BBMProfitTableRow() {

  return (
    <>
      {
        TLCTwoPointOProfitTableRowData.map((data, i) => (
          <TableRow key={i}>
            <TableCell sx={{ whiteSpace: 'nowrap' }}>{data['S/N']}</TableCell>
            <TableCell sx={{ whiteSpace: 'nowrap' }}>{data.Profit}</TableCell>
            <TableCell sx={{ whiteSpace: 'nowrap' }}>{data.Date}</TableCell>
          </TableRow>
        ))
      }
    </>
  );

}
export default BBMProfitTableRow;