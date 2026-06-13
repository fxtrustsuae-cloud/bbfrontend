import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import Container from '@mui/material/Container';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import { TableCell, TableRow, CircularProgress } from '@mui/material';
import TablePaginationComponent from '../../../userPanelComponent/TablePaginationComponent';
import LoginHistoryTableRow from './loginHistoryTableRow/LoginHistoryTableRow';
import LoginHistoryTableHead from './loginHistoryTableHead/LoginHistoryTableHead';
import { Typography } from '@mui/material';
import { useSignInHistoryQuery } from '../../../../globalState/auth/authApis';
import { useState } from 'react';


function LoginHistoryTable() {

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const { data, isLoading, isError, error } = useSignInHistoryQuery({ page: page + 1, sizePerPage: rowsPerPage });

    const tableRowData = data?.data?.loginHistory || []

    const hasData = Array.isArray(tableRowData) && tableRowData.length > 0;

    const paginationdata = data?.data
    const { totalRecords = 0 } = paginationdata || {};

    const handlePageChange = (event, newPage) => {
        setPage(newPage);
    };

    const handleRowsPerPageChange = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <Container sx={{ mt: "2.5rem" }}>
            <Typography fontSize={"1.5rem"} mb={"1.5rem"} fontWeight="bold" gutterBottom>
                Login history
            </Typography>
            <Card
                sx={{
                    boxShadow: "0 0px 0px 0 rgba(0, 0, 0, 0.19), 0 0px 8px 0 rgba(0, 0, 0, 0.19)",
                    borderRadius: "1.2rem",
                    padding: { xs: "1rem", md: "2rem" }
                }}
            >
                <TableContainer sx={{ overflow: 'auto' }}>
                    <Table sx={{ minWidth: 800 }}>
                        <LoginHistoryTableHead />
                        <TableBody>
                            {
                                isLoading ? (
                                    <TableRow>
                                        <TableCell colSpan={12} align="center">
                                            <CircularProgress />
                                            <Typography mt={1}>Loading...</Typography>
                                        </TableCell>
                                    </TableRow>
                                ) :
                                    isError ? (
                                        <TableRow>
                                            <TableCell colSpan={12} align="center">
                                                <Typography color="error">
                                                    Error: {error?.data?.message || "Failed to fetch data"}
                                                </Typography>
                                            </TableCell>
                                        </TableRow>
                                    ) : hasData ? (
                                        <LoginHistoryTableRow
                                            data={tableRowData}
                                            rowsPerPage={rowsPerPage}
                                            page={page}
                                        />
                                    ) : (
                                        <TableRow>
                                            <TableCell colSpan={12} align="center">
                                                <Typography>No Login details found</Typography>
                                            </TableCell>
                                        </TableRow>
                                    )
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
                {
                    (totalRecords > 0)
                    &&
                    <TablePaginationComponent
                        count={totalRecords}
                        page={page}
                        rowsPerPage={rowsPerPage}
                        onPageChange={handlePageChange}
                        onRowsPerPageChange={handleRowsPerPageChange}
                    />
                }
            </Card>
        </Container>
    );
}

export default LoginHistoryTable;