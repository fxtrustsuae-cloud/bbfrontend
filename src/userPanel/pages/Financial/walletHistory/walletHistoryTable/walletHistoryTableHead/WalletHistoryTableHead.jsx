import { TableRow, TableHead, TableCell } from '@mui/material';
import { walletHistoryTableHeadData } from './walletHistoryTableHeadData';

function WalletHistoryTableHead() {
  return (
    <TableHead>
      <TableRow>
        {
          walletHistoryTableHeadData.map((data, i) => (
            <TableCell key={i} sx={{ whiteSpace: "nowrap", color: "primary.main", fontWeight: "bold", fontSize: "1rem" }}>{data}</TableCell>
          ))
        }
      </TableRow>
    </TableHead>
  );
}

export default WalletHistoryTableHead;