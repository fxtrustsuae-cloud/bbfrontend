import { TableRow, TableCell } from '@mui/material';
import { achievementIncomeTableRowData } from './achievementIncomeTableRowData';

function AchievementIncomeTableRow() {

  return (
    <>
      {
        achievementIncomeTableRowData.map((data, i) => (
          <TableRow>
            <TableCell key={i} sx={{ whiteSpace: 'nowrap' }}>{data['S/N']}</TableCell>
            <TableCell key={i} sx={{ whiteSpace: 'nowrap' }}>{data.Income}</TableCell>
            <TableCell key={i} sx={{ whiteSpace: 'nowrap' }}>{data.Date}</TableCell>
          </TableRow>
        ))
      }
    </>
  );

}
export default AchievementIncomeTableRow;