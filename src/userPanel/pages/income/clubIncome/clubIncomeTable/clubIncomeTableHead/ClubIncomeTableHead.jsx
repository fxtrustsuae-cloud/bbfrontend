import { TableRow, TableHead, TableCell } from '@mui/material';
import { clubIncomeTableHeadData } from './clubIncomeTableHeadData';

function ClubIncomeTableHead() {
  return (
    <TableHead>
      <TableRow>
        {
          clubIncomeTableHeadData.map((data, i) => (
            <TableCell key={i} sx={{ whiteSpace: "nowrap", color: "primary.main", fontWeight: "bold", fontSize: "1rem" }}>{data}</TableCell>
          ))
        }
      </TableRow>
    </TableHead>
  );
}

export default ClubIncomeTableHead;