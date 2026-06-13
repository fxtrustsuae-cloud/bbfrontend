import { TableRow, TableHead, TableCell } from '@mui/material';
import { investmentTableHeadData } from './investmentTableHeadData';

function InvestmentTableHead() {
  return (
    <TableHead>
      <TableRow>
        {
          investmentTableHeadData.map((data, i) => (
            <TableCell key={i} sx={{ whiteSpace: "nowrap", color: "primary.main", fontWeight: "bold", fontSize: "1rem" }}>{data}</TableCell>
          ))
        }
      </TableRow>
    </TableHead>
  );
}

export default InvestmentTableHead;