import { TableRow, TableHead, TableCell } from '@mui/material';
import { transferTLCGiftNewTableHeadData } from './transferTLCGiftNewTableHeadData';

function TransferTLCGiftNewTableHead() {
  return (
    <TableHead>
      <TableRow>
        {
          transferTLCGiftNewTableHeadData.map((data, i) => (
            <TableCell key={i} sx={{ whiteSpace: "nowrap", color: "primary.main", fontWeight: "bold", fontSize: "1rem" }}>{data}</TableCell>
          ))
        }
      </TableRow>
    </TableHead>
  );
}

export default TransferTLCGiftNewTableHead;