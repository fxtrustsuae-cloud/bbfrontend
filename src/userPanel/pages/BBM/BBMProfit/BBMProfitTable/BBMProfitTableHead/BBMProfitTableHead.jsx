import { TableRow, TableHead, TableCell } from '@mui/material';
import { TLCTwoPointOProfitTableHeadData } from './TLCTwoPointOProfitTableHeadData';

function BBMProfitTableHead() {
  return (
    <TableHead>
      <TableRow>
        {
          TLCTwoPointOProfitTableHeadData.map((data, i) => (
            <TableCell key={i} sx={{ whiteSpace: "nowrap", color: "primary.main", fontWeight: "bold", fontSize: "1rem" }}>{data}</TableCell>
          ))
        }
      </TableRow>
    </TableHead>
  );
}

export default BBMProfitTableHead;