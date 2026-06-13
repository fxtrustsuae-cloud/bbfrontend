import { TableRow, TableCell } from '@mui/material';
import { TLCTwoPointOICOLevelIncomeTableRowData } from "./TLCTwoPointOICOLevelIncomeTableRowData"

function BBMCoinTransactionsTableRow() {

  return (
    <>
      {
        TLCTwoPointOICOLevelIncomeTableRowData.map((data, i) => (
          <TableRow key={i}>
            <TableCell sx={{ whiteSpace: 'nowrap' }}>{data['S/N']}</TableCell>
            <TableCell sx={{ whiteSpace: 'nowrap' }}>{data['User ID']}</TableCell>
            <TableCell sx={{ whiteSpace: 'nowrap' }}>{data.Name}</TableCell>
            <TableCell sx={{ whiteSpace: 'nowrap' }}>{data.Token}</TableCell>
            <TableCell sx={{ whiteSpace: 'nowrap' }}>{data.Level}</TableCell>
            <TableCell sx={{ whiteSpace: 'nowrap' }}>{data.Date}</TableCell>
          </TableRow>
        ))
      }
    </>
  );

}
export default BBMCoinTransactionsTableRow;