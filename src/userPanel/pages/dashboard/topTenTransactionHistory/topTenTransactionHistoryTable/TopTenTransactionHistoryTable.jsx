import {
    Card,
    Table,
    Container,
    TableBody,
    TableContainer,
    TableCell,
    TableRow,
    CircularProgress,
    Typography
} from '@mui/material';
// import { useGetTransactionDataQuery } from '../../../../globalState/settings/profileSettingApi';
import TablePaginationComponent from '../../../../userPanelComponent/TablePaginationComponent';
import { useState } from 'react';
import TopTenTransactionHistoryTableRow from './topTenTransactionHistoryTableRow/TopTenTransactionHistoryTableRow';
import TopTenTransactionHistoryTableToolbar from './topTenTransactionHistoryTableToolbar/TopTenTransactionHistoryTableToolbar';
import TopTenTransactionHistoryTableHead from './topTenTransactionHistoryTableHead/TopTenTransactionHistoryTableHead';


function TopTenTransactionHistoryTable() {

    const [status, setStatus] = useState('');
    const [type, setType] = useState('');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    // const { data, isLoading, isError } = useGetTransactionDataQuery({
    //     page: page + 1,
    //     sizePerPage: rowsPerPage,
    //     status,
    //     transactionType: type
    // });

    // const tableRowData = data?.data?.transactionList || [];
    // const hasData = Array.isArray(tableRowData) && tableRowData.length > 0;

    // const paginationdata = data?.data
    // const { totalRecords = 0 } = paginationdata || {};

    const handlePageChange = (event, newPage) => {
        setPage(newPage);
    };

    const handleRowsPerPageChange = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <Container sx={{ mt: '1rem' }}>
            <Card
                sx={{
                    boxShadow: '0 0px 0px 0 rgba(0, 0, 0, 0.19), 0 0px 8px 0 rgba(0, 0, 0, 0.19)',
                    borderRadius: '1.2rem',
                    padding: { xs: '1rem', md: '2rem' }
                }}
            >
                <TopTenTransactionHistoryTableToolbar
                    setStatus={setStatus}
                    statusValue={status}
                    setType={setType}
                    typeValue={type}
                />
                <TableContainer sx={{ overflow: 'auto' }}>
                    <Table sx={{ minWidth: 800 }}>
                        <TopTenTransactionHistoryTableHead />
                        <TableBody>
                            {/* {isLoading ? (
                                <TableRow>
                                    <TableCell colSpan={12} align="center">
                                        <CircularProgress />
                                        <Typography mt={1}>Loading...</Typography>
                                    </TableCell>
                                </TableRow>
                            ) */}
                            {/* : hasData ? 
                                ( */}
                            <TopTenTransactionHistoryTableRow
                                // data={tableRowData} 
                                page={page} rowsPerPage={rowsPerPage} />
                            {/* ) : ( */}
                            <TableRow>
                                <TableCell colSpan={12} align="center">
                                    <Typography>No transactions found</Typography>
                                </TableCell>
                            </TableRow>
                            {/* )} */}
                        </TableBody>
                    </Table>
                </TableContainer>
                {/* {totalRecords > 0 && ( */}
                    <TablePaginationComponent
                    // count={totalRecords}
                    // page={page}
                    // rowsPerPage={rowsPerPage}
                    // onPageChange={handlePageChange}
                    // onRowsPerPageChange={handleRowsPerPageChange}
                    />
                {/* )} */}
            </Card>
        </Container>
    );
}

export default TopTenTransactionHistoryTable;  