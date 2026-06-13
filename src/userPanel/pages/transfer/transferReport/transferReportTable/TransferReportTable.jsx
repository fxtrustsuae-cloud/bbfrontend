import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import Container from '@mui/material/Container';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TransferReportTableRow from "./transferReportTableRow/TransferReportTableRow"
import TransferReportTableHead from "./transferReportTableHead/TransferReportTableHead"
import TransferReportTableToolbar from "./transferReportTableToolbar/TransferReportTableToolbar"
import TablePaginationComponent from '../../../../userPanelComponent/TablePaginationComponent';


function TransferReportTable() {

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
                    <TransferReportTableToolbar />
                    <TableContainer sx={{ overflow: 'auto' }}>
                        <Table sx={{ minWidth: 800 }}>
                            <TransferReportTableHead />
                            <TableBody>
                                <TransferReportTableRow />
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePaginationComponent />
                </Card>
            </Container>
        </Stack>
    );
}

export default TransferReportTable;