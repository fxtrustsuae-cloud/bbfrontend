import { TableRow, TableCell } from '@mui/material';
import { compoundingProfitIncomeTableRowData } from './compoundingProfitIncomeTableRowData';

function CompoundingProfitIncomeTableRow() {

  return (
    <>
      {
        compoundingProfitIncomeTableRowData.map((data, i) => (
          <TableRow>
            <TableCell key={i} sx={{ whiteSpace: 'nowrap' }}>{data['S/N']}</TableCell>
            <TableCell key={i} sx={{ whiteSpace: 'nowrap' }}>{data.Profit}</TableCell>
            <TableCell key={i} sx={{ whiteSpace: 'nowrap' }}>{data.Income}</TableCell>
            <TableCell key={i} sx={{ whiteSpace: 'nowrap' }}>{data.Date}</TableCell>
          </TableRow>
        ))
      }
    </>
  );

}
export default CompoundingProfitIncomeTableRow;