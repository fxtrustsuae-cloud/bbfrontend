import { TableRow, TableHead, TableCell } from '@mui/material';
import { withdrawalTradingCRYPTOTableHeadData } from './withdrawalTradingCRYPTOTableHeadData';

function WithdrawalTradingCRYPTOTableHead() {
  return (
    <TableHead>
      <TableRow>
        {
          withdrawalTradingCRYPTOTableHeadData.map((data, i) => (
            <TableCell key={i} sx={{ whiteSpace: "nowrap", color: "primary.main", fontWeight: "bold", fontSize: "1rem" }}>{data}</TableCell>
          ))
        }
      </TableRow>
    </TableHead>
  );
}

export default WithdrawalTradingCRYPTOTableHead;