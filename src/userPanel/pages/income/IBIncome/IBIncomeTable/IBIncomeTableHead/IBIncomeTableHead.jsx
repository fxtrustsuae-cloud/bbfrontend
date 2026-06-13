import { TableRow, TableHead, TableCell } from '@mui/material';
import { IBIncomeTableHeadData } from './IBIncomeTableHeadData';

function IBIncomeTableHead() {
    return (
        <TableHead>
            <TableRow>
                {
                    IBIncomeTableHeadData.map((data, i) => (
                        <TableCell key={i} sx={{ whiteSpace: "nowrap", color: "primary.main", fontWeight: "bold", fontSize: "1rem" }}>{data}</TableCell>
                    ))
                }
            </TableRow>
        </TableHead>
    );
}

export default IBIncomeTableHead;