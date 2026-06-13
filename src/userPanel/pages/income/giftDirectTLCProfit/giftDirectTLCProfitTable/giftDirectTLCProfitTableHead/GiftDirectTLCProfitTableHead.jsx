import { TableRow, TableHead, TableCell } from '@mui/material';
import { giftDirectTLCProfitTableHeadData } from './giftDirectTLCProfitTableHeadData';

function GiftDirectTLCProfitTableHead() {
  return (
    <TableHead>
      <TableRow>
        {
          giftDirectTLCProfitTableHeadData.map((data, i) => (
            <TableCell key={i} sx={{ whiteSpace: "nowrap", color: "primary.main", fontWeight: "bold", fontSize: "1rem" }}>{data}</TableCell>
          ))
        }
      </TableRow>
    </TableHead>
  );
}

export default GiftDirectTLCProfitTableHead;