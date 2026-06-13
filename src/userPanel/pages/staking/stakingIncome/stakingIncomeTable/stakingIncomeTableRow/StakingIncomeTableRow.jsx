import { TableRow, TableCell } from '@mui/material';
import { stakingIncomeTableRowData } from './stakingIncomeTableRowData';

function StakingIncomeTableRow() {

  return (
    <>
      {
        stakingIncomeTableRowData.map((data, i) => (
          <TableRow>
            <TableCell key={i} sx={{ whiteSpace: 'nowrap' }}>{data['S/N']}</TableCell>
            <TableCell key={i} sx={{ whiteSpace: 'nowrap' }}>{data.TLC}</TableCell>
            <TableCell key={i} sx={{ whiteSpace: 'nowrap' }}>{data.Price}</TableCell>
            <TableCell key={i} sx={{ whiteSpace: 'nowrap' }}>{data.Income}</TableCell>
            <TableCell key={i} sx={{ whiteSpace: 'nowrap' }}>{data.Date}</TableCell>
          </TableRow>
        ))
      }
    </>
  );

}
export default StakingIncomeTableRow;