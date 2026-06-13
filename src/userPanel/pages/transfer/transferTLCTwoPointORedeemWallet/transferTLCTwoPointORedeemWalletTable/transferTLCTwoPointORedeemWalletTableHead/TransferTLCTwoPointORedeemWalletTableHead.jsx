import { TableRow, TableHead, TableCell } from '@mui/material';
import { transferTLCTwoPointORedeemWalletTableHeadData } from './transferTLCTwoPointORedeemWalletTableHeadData';

function TransferTLCTwoPointORedeemWalletTableHead() {
  return (
    <TableHead>
      <TableRow>
        {
          transferTLCTwoPointORedeemWalletTableHeadData.map((data, i) => (
            <TableCell key={i} sx={{ whiteSpace: "nowrap", color: "primary.main", fontWeight: "bold", fontSize: "1rem" }}>{data}</TableCell>
          ))
        }
      </TableRow>
    </TableHead>
  );
}

export default TransferTLCTwoPointORedeemWalletTableHead;