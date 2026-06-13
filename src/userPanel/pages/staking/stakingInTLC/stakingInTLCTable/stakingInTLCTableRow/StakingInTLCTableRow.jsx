import { TableRow } from '@mui/material';
import { stakingInTLCTableRowData } from './stakingInTLCTableRowData';

function StakingInTLCTableRow() {

  return (
    <>
      {
        stakingInTLCTableRowData.map((data, i) => (
          <TableRow>
            {/* <TableCell key={i} sx={{ whiteSpace: 'nowrap' }}>{data['S/N']}</TableCell>
            <TableCell key={i} sx={{ whiteSpace: 'nowrap' }}>{data['User ID']}</TableCell>
            <TableCell key={i} sx={{ whiteSpace: 'nowrap' }}>{data.Name}</TableCell>
            <TableCell key={i} sx={{ whiteSpace: 'nowrap' }}>{data.Amount}</TableCell>
            <TableCell key={i} sx={{ whiteSpace: 'nowrap' }}>{data.Date}</TableCell>
            <TableCell key={i} sx={{ whiteSpace: 'nowrap' }}>{data.Remarks}</TableCell> */}
          </TableRow>
        ))
      }
    </>
  );

}
export default StakingInTLCTableRow;