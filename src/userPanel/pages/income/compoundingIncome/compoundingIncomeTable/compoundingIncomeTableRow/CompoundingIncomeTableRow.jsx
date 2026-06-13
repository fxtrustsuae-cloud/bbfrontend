import { TableRow, TableCell } from '@mui/material';
import { compoundingIncomeTableRowData } from "./compoundingIncomeTableRowData"

function CompoundingIncomeTableRow() {

  return (
    <>
      {
        compoundingIncomeTableRowData.map((data, i) => (
          <TableRow>
            <TableCell key={i} sx={{ whiteSpace: 'nowrap' }}>{data['S/N']}</TableCell>
            <TableCell key={i} sx={{ whiteSpace: 'nowrap' }}>{data['User ID']}</TableCell>
            <TableCell key={i} sx={{ whiteSpace: 'nowrap' }}>{data.Name}</TableCell>
            <TableCell key={i} sx={{ whiteSpace: 'nowrap' }}>{data.Income}</TableCell>
            <TableCell key={i} sx={{ whiteSpace: 'nowrap' }}>{data.Percentage}</TableCell>
            <TableCell key={i} sx={{ whiteSpace: 'nowrap' }}>{data.Level}</TableCell>
            <TableCell key={i} sx={{ whiteSpace: 'nowrap' }}>{data.Date}</TableCell>
            <TableCell key={i} sx={{ whiteSpace: 'nowrap' }}>{data.Status}</TableCell>
          </TableRow>
        ))
      }
    </>
  );

}
export default CompoundingIncomeTableRow;