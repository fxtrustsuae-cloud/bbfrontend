import { TableRow, TableHead, TableCell } from '@mui/material';
import { walletAddressTableHeadData } from './walletAddressTableHeadData';

function WalletAddressTableHead() {
  return (
    <TableHead>
      <TableRow>
        {
          walletAddressTableHeadData.map((data, i) => (
            <TableCell key={i} sx={{ whiteSpace: "nowrap", color: "primary.main", fontWeight: "bold", fontSize: "1rem" }}>{data}</TableCell>
          ))
        }
      </TableRow>
    </TableHead>
  );
}

export default WalletAddressTableHead;