import { TableRow, TableCell, Typography } from '@mui/material';
import { rewardTableRowData } from './rewardTableRowData';

function RewardTableRow() {

  return (
    <>
      {
        rewardTableRowData.map((data, i) => (
          <TableRow key={i}>
            <TableCell sx={{ whiteSpace: 'nowrap' }}>{data['S/N']}</TableCell>
            <TableCell sx={{ whiteSpace: 'nowrap' }}>{data.Rank}</TableCell>
            <TableCell sx={{ whiteSpace: 'nowrap' }}>{data['Bot Matching']}</TableCell>
            <TableCell sx={{ whiteSpace: 'nowrap' }}>{data.Reward}</TableCell>
            <TableCell sx={{ whiteSpace: 'nowrap', color: "white" }}>
              <Typography sx={{ bgcolor: data.Status === "Not-Achieve" ? "red" : "green", display: "inline", px: "1rem", py: ".5rem", borderRadius: "5rem", fontSize: ".8rem" }}>{data.Status}</Typography>
            </TableCell>
          </TableRow>
        ))
      }
    </>
  );

}
export default RewardTableRow;