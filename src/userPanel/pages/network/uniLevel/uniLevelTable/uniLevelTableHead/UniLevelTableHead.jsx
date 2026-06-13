import { TableRow, TableHead, TableCell } from '@mui/material';
import { uniLevelTableHeadData } from './uniLevelTableHeadData';

function UniLevelTableHead() {
  return (
    <TableHead>
      <TableRow>
        {
          uniLevelTableHeadData.map((data, i) => (
            <TableCell key={i} sx={{ whiteSpace: "nowrap", color: "primary.main", fontWeight: "bold", fontSize: "1rem" }}>{data}</TableCell>
          ))
        }
      </TableRow>
    </TableHead>
  );
}

export default UniLevelTableHead;