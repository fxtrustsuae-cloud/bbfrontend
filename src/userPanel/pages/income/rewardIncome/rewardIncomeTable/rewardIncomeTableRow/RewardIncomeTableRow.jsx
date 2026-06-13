import { TableRow, TableCell } from '@mui/material';
import { rewardIncomeTableRowData } from './rewardIncomeTableRowData';

function RewardIncomeTableRow() {

  return (
    <>
      {
        rewardIncomeTableRowData.map((data, i) => (
          <TableRow>
            <TableCell key={i} sx={{ whiteSpace: 'nowrap' }}>{data['S/L']}</TableCell>
            <TableCell key={i} sx={{ whiteSpace: 'nowrap' }}>{data.Rank}</TableCell>
            <TableCell key={i} sx={{ whiteSpace: 'nowrap' }}>{data.Reward}</TableCell>
            <TableCell key={i} sx={{ whiteSpace: 'nowrap' }}>{data.Date}</TableCell>
            <TableCell key={i} sx={{ whiteSpace: 'nowrap' }}>{data.Status}</TableCell>
          </TableRow>
        ))
      }
    </>
  );

}
export default RewardIncomeTableRow;