import { TableRow, TableCell } from '@mui/material';
import { walletHistoryTableRowData } from './walletHistoryTableRowData';

function WalletHistoryTableRow() {

  return (
    <>
      {
        walletHistoryTableRowData.map((data, i) => (
          <TableRow key={i}>
            <TableCell sx={{ whiteSpace: 'nowrap' }}>{data['S/N']}</TableCell>
            <TableCell sx={{ whiteSpace: 'nowrap' }}>{data.Wallet}</TableCell>
            <TableCell sx={{ whiteSpace: 'nowrap' }}>{data.Amount}</TableCell>
            <TableCell sx={{ whiteSpace: 'nowrap', color: 'green' }}>{data.Mode}</TableCell>
            <TableCell sx={{ whiteSpace: 'nowrap' }}>{data.Date}</TableCell>
            <TableCell sx={{ whiteSpace: 'nowrap' }}>{data.Remarks}</TableCell>
          </TableRow>
        ))
      }
    </>
  );

}
export default WalletHistoryTableRow;