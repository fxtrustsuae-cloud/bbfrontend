import { TableRow, TableHead, TableCell } from '@mui/material';
import { stakingInTLCTableHeadData } from './stakingInTLCTableHeadData';

function StakingInTLCTableHead() {
  return (
    <TableHead>
      <TableRow>
        {
          stakingInTLCTableHeadData.map((data, i) => (
            <TableCell key={i} sx={{ whiteSpace: "nowrap", color: "primary.main", fontWeight: "bold", fontSize: "1rem" }}>{data}</TableCell>
          ))
        }
      </TableRow>
    </TableHead>
  );
}

export default StakingInTLCTableHead;