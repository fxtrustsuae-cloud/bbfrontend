import { TableRow, TableHead, TableCell } from '@mui/material';
import { matchingIncomeTableHeadData } from './matchingIncomeTableHeadData';

function MatchingIncomeTableHead() {
  return (
    <TableHead>
      <TableRow>
        {
          matchingIncomeTableHeadData.map((data, i) => (
            <TableCell key={i} sx={{ whiteSpace: "nowrap", color: "primary.main", fontWeight: "bold", fontSize: "1rem" }}>{data}</TableCell>
          ))
        }
      </TableRow>
    </TableHead>
  );
}

export default MatchingIncomeTableHead;