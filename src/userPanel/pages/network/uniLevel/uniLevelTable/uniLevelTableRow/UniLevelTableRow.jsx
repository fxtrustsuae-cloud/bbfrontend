import { TableRow, TableCell } from '@mui/material';
import { uniLevelTableRowData } from './uniLevelTableRowData';


function UniLevelTableRow() {

    return (
        <>
            {
                uniLevelTableRowData.map((data, i) => (
                    <TableRow>
                        <TableCell key={i} sx={{ whiteSpace: 'nowrap' }}>{data['S/N']}</TableCell>
                        <TableCell key={i} sx={{ whiteSpace: 'nowrap' }}>{data['User ID']}</TableCell>
                        <TableCell key={i} sx={{ whiteSpace: 'nowrap' }}>{data['User Name']}</TableCell>
                        <TableCell key={i} sx={{ whiteSpace: 'nowrap' }}>{data.Amount}</TableCell>
                        <TableCell key={i} sx={{ whiteSpace: 'nowrap' }}>{data.Status}</TableCell>
                        <TableCell key={i} sx={{ whiteSpace: 'nowrap' }}>{data['Direct Team']}</TableCell>
                        <TableCell key={i} sx={{ whiteSpace: 'nowrap' }}>{data['Direct Business']}</TableCell>
                        <TableCell key={i} sx={{ whiteSpace: 'nowrap' }}>{data['Team Business']}</TableCell>
                        <TableCell key={i} sx={{ whiteSpace: 'nowrap' }}>{data.Rank}</TableCell>
                        <TableCell key={i} sx={{ whiteSpace: 'nowrap' }}>{data['Joined on']}</TableCell>
                        <TableCell key={i} sx={{ whiteSpace: 'nowrap' }}>{data['Top uped on']}</TableCell>
                    </TableRow>
                ))
            }
        </>
    );

}
export default UniLevelTableRow;