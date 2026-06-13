import { TableRow, TableHead, TableCell } from '@mui/material';
import { compoundingIncomeTableHeadData } from './compoundingIncomeTableHeadData';

function CompoundingIncomeTableHead() {
    return (
        <TableHead>
            <TableRow>
                {
                    compoundingIncomeTableHeadData.map((data, i) => (
                        <TableCell key={i} sx={{ whiteSpace: "nowrap", color: "primary.main", fontWeight: "bold", fontSize: "1rem" }}>{data}</TableCell>
                    ))
                }
            </TableRow>
        </TableHead>
    );
}

export default CompoundingIncomeTableHead;