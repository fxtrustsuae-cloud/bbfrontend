import { TableRow, TableHead, TableCell } from '@mui/material';
import { stakingIncomeTableHeadData } from './stakingIncomeTableHeadData';

function StakingIncomeTableHead() {
  return (
    <TableHead>
      <TableRow>
        {
          stakingIncomeTableHeadData.map((data, i) => (
            <TableCell key={i} sx={{ whiteSpace: "nowrap", color: "primary.main", fontWeight: "bold", fontSize: "1rem" }}>{data}</TableCell>
          ))
        }
      </TableRow>
    </TableHead>
  );
}

export default StakingIncomeTableHead;