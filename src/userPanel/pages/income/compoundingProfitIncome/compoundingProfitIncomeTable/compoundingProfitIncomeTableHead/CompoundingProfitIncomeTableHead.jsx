import { TableRow, TableHead, TableCell } from '@mui/material';
import { compoundingProfitIncomeTableHeadData } from './compoundingProfitIncomeTableHeadData';

function CompoundingProfitIncomeTableHead() {
  return (
    <TableHead>
      <TableRow>
        {
          compoundingProfitIncomeTableHeadData.map((data, i) => (
            <TableCell key={i} sx={{ whiteSpace: "nowrap", color: "primary.main", fontWeight: "bold", fontSize: "1rem" }}>{data}</TableCell>
          ))
        }
      </TableRow>
    </TableHead>
  );
}

export default CompoundingProfitIncomeTableHead;