import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TablePaginationComponent from '../../../../userPanelComponent/TablePaginationComponent';
import BBMSellIncomeTableToolbar from './BBMSellIncomeTableToolbar/BBMSellIncomeTableToolbar';
import BBMSellIncomeTableHead from './BBMSellIncomeTableHead/BBMSellIncomeTableHead';
import BBMSellIncomeTableRow from './BBMSellIncomeTableRow/BBMSellIncomeTableRow';


function BBMSellIncomeTable() {

    return (
        <Stack mt={"2rem"}>
            <Card
                sx={{
                    boxShadow: "0 0px 0px 0 rgba(0, 0, 0, 0.19), 0 0px 8px 0 rgba(0, 0, 0, 0.19)",
                    borderRadius: "2rem",
                    padding: { xs: "1rem", md: "2rem" }
                }}
            >
                <BBMSellIncomeTableToolbar />
                <TableContainer>
                    <Table sx={{ minWidth: 800 }}>
                        <BBMSellIncomeTableHead />
                        <TableBody>
                            <BBMSellIncomeTableRow />
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePaginationComponent />
            </Card>
        </Stack>
    );
}

export default BBMSellIncomeTable;