import { TableRow, TableHead, TableCell } from '@mui/material';
import { achievementIncomeTableHeadData } from './achievementIncomeTableHeadData';

function AchievementIncomeTableHead() {
  return (
    <TableHead>
      <TableRow>
        {
          achievementIncomeTableHeadData.map((data, i) => (
            <TableCell key={i} sx={{ whiteSpace: "nowrap", color: "primary.main", fontWeight: "bold", fontSize: "1rem" }}>{data}</TableCell>
          ))
        }
      </TableRow>
    </TableHead>
  );
}

export default AchievementIncomeTableHead;