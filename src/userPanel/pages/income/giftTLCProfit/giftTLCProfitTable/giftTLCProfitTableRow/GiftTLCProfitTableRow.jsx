import { TableRow } from '@mui/material';
import { giftTLCProfitTableRowData } from './giftTLCProfitTableRowData';

function GiftTLCProfitTableRow() {

    return (
        <>
            {
                giftTLCProfitTableRowData.map((data, i) => (
                    <TableRow>
                        {/* <TableCell key={i} sx={{ whiteSpace: 'nowrap' }}>{data['S/N']}</TableCell>
                        <TableCell key={i} sx={{ whiteSpace: 'nowrap' }}>{data.Income}</TableCell>
                        <TableCell key={i} sx={{ whiteSpace: 'nowrap' }}>{data.Date}</TableCell> */}
                    </TableRow>
                ))
            }
        </>
    );

}
export default GiftTLCProfitTableRow;