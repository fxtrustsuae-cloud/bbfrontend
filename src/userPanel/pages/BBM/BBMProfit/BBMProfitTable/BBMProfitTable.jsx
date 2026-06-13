import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TablePaginationComponent from '../../../../userPanelComponent/TablePaginationComponent';
import BBMProfitTableToolbar from './BBMProfitTableToolbar/BBMProfitTableToolbar';
import BBMProfitTableHead from './BBMProfitTableHead/BBMProfitTableHead';
import BBMProfitTableRow from './BBMProfitTableRow/BBMProfitTableRow';


function BBMProfitTable() {

    return (
        <Stack mt={"2rem"}>
            <Card
                sx={{
                    boxShadow: "0 0px 0px 0 rgba(0, 0, 0, 0.19), 0 0px 8px 0 rgba(0, 0, 0, 0.19)",
                    borderRadius: "2rem",
                    padding: { xs: "1rem", md: "2rem" }
                }}
            >
                <BBMProfitTableToolbar />
                <TableContainer>
                    <Table sx={{ minWidth: 800 }}>
                        <BBMProfitTableHead />
                        <TableBody>
                            <BBMProfitTableRow />
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePaginationComponent />
            </Card>
        </Stack>
    );
}

export default BBMProfitTable;