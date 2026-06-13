import { TableRow, TableHead, TableCell } from '@mui/material';
import { rewardIncomeTableHeadData } from './rewardIncomeTableHeadData';

function RewardIncomeTableHead() {
  return (
    <TableHead>
      <TableRow>
        {
          rewardIncomeTableHeadData.map((data, i) => (
            <TableCell key={i} sx={{ whiteSpace: "nowrap", color: "primary.main", fontWeight: "bold", fontSize: "1rem" }}>{data}</TableCell>
          ))
        }
      </TableRow>
    </TableHead>
  );
}

export default RewardIncomeTableHead;