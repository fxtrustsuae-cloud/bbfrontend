import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import Container from '@mui/material/Container';
import TableBody from '@mui/material/TableBody';
import { TableRow, TableCell, CircularProgress, Typography } from '@mui/material';
import TableContainer from '@mui/material/TableContainer';
import TablePaginationComponent from '../../../../userPanelComponent/TablePaginationComponent';
import TradingRobotTableHead from './tradingRobotTableHead/TradingRobotTableHead';
import TradingRobotTableRow from './tradingRobotTableRow/TradingRobotTableRow';
import { useRobotListQuery } from '../../../../../globalState/robot/robotApi';
import { useState } from 'react';


function TradingRobotTable() {

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const { data, isLoading, isError, error } = useRobotListQuery({ page: page + 1, sizePerPage: rowsPerPage });

    const robotsTableRowData = data?.data?.loginHistory || [];

    const hasData = Array.isArray(robotsTableRowData) && robotsTableRowData.length > 0;

    const paginationdata = data?.data;
    const { totalRecords = 0 } = paginationdata || {};


    const handlePageChange = (event, newPage) => {
        setPage(newPage);
    };

    const handleRowsPerPageChange = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

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
                    <TableContainer>
                        <Table sx={{ minWidth: 800 }}>
                            <TradingRobotTableHead />
                            <TableBody>
                                {
                                    isLoading ? (
                                        <TableRow>
                                            <TableCell colSpan={12} align="center">
                                                <CircularProgress />
                                                <Typography mt={1}>Loading...</Typography>
                                            </TableCell>
                                        </TableRow>
                                    )
                                        :
                                        isError ? (
                                            <TableRow>
                                                <TableCell colSpan={12} align="center">
                                                    <Typography color="error">
                                                        Error: {error?.data?.message || "Failed to fetch data"}
                                                    </Typography>
                                                </TableCell>
                                            </TableRow>
                                        ) : hasData ? (
                                            <TradingRobotTableRow
                                                data={robotsTableRowData}
                                                page={page}
                                                rowsPerPage={rowsPerPage}
                                            />
                                        ) : (
                                            <TableRow>
                                                <TableCell colSpan={12} align="center">
                                                    <Typography>No Robot details found</Typography>
                                                </TableCell>
                                            </TableRow>
                                        )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    {(totalRecords > 0)
                        &&
                        <TablePaginationComponent
                            count={totalRecords}
                            page={page}
                            rowsPerPage={rowsPerPage}
                            onPageChange={handlePageChange}
                            onRowsPerPageChange={handleRowsPerPageChange}
                        />}
                </Card>
            </Container>
        </Stack>
    );
}

export default TradingRobotTable;