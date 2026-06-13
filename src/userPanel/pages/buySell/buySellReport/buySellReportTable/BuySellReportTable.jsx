import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import Container from '@mui/material/Container';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import BuySellReportTableRow from "./buySellReportTableRow/BuySellReportTableRow"
import BuySellReportTableHead from "./buySellReportTableHead/BuySellReportTableHead"
import BuySellReportTableToolbar from "./buySellReportTableToolbar/BuySellReportTableToolbar"
import TablePaginationComponent from '../../../../userPanelComponent/TablePaginationComponent';


function BuySellReportTable() {

    return (
        <Stack mt={"2rem"}>
            <Container>
                <Card
                    sx={{
                        boxShadow: "0 0px 0px 0 rgba(0, 0, 0, 0.19), 0 0px 8px 0 rgba(0, 0, 0, 0.19)",
                        borderRadius: "2rem",
                        padding: { xs: "1rem", md: "2rem" }
                    }}
                >
                    <BuySellReportTableToolbar />
                    <TableContainer sx={{ overflow: 'auto' }}>
                        <Table sx={{ minWidth: 800 }}>
                            <BuySellReportTableHead />
                            <TableBody>
                                <BuySellReportTableRow />
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePaginationComponent />
                </Card>
            </Container>
        </Stack>
    );
}

export default BuySellReportTable;