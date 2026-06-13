import { TableRow, TableHead, TableCell } from '@mui/material';
import { rewardTableHeadData } from './rewardTableHeadData';

function RewardTableHead() {
  return (
    <TableHead>
      <TableRow>
        {
          rewardTableHeadData.map((data, i) => (
            <TableCell key={i} sx={{ whiteSpace: "nowrap", color: "primary.main", fontWeight: "bold", fontSize: "1rem" }}>{data}</TableCell>
          ))
        }
      </TableRow>
    </TableHead>
  );
}

export default RewardTableHead;