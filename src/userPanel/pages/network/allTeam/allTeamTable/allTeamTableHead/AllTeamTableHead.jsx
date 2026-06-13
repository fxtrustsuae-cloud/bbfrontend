import { TableRow, TableHead, TableCell } from '@mui/material';
import { allTeamTableHeadData } from './allTeamTableHeadData';

function AllTeamTableHead() {
  return (
    <TableHead>
      <TableRow>
        {
          allTeamTableHeadData.map((data, i) => (
            <TableCell key={i} sx={{ whiteSpace: "nowrap", color: "primary.main", fontWeight: "bold", fontSize: "1rem" }}>{data}</TableCell>
          ))
        }
      </TableRow>
    </TableHead>
  );
}

export default AllTeamTableHead;