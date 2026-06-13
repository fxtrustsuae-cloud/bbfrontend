import {
    MaterialReactTable,
    useMaterialReactTable
} from 'material-react-table';
import { Box, Button, Container, Typography, Stack } from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import * as XLSX from 'xlsx';
import { useSelector } from 'react-redux';
import { documentListHeaderColumn } from './documentListHeaderColumn';
import { useState } from 'react';
import { useDocumentListQuery } from '../../../../globalState/admin/adminStateApis';

import Selector from '../../../userPanelComponent/Selector';

const handleExportToExcel = (rows) => {
    const rowData = rows.map((row) => row.original);
    const worksheet = XLSX.utils.json_to_sheet(rowData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    XLSX.writeFile(workbook, 'documentList.xlsx');
};

function DocumentList({ userData }) {

    const userId = userData?._id

    const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 10 });
    const [globalFilter, setGlobalFilter] = useState("");
    const [status, setStatus] = useState(null)

    const { data: listData, isLoading, isError, error } = useDocumentListQuery({
        page: pagination.pageIndex + 1,
        sizePerPage: pagination.pageSize,
        search: globalFilter,
        status,
        userId
    });

    const showError = error?.data?.message

    const list = listData?.data?.documentsList || [];

    const table = useMaterialReactTable({
        columns: documentListHeaderColumn,
        data: list,
        enableColumnFilters: false,
        enableSorting: false,
        enableColumnActions: false,
        manualPagination: true,
        manualFiltering: true,
        rowCount: listData?.data?.totalRecords || 0,
        state: {
            pagination,
            globalFilter,
            isLoading,
            showAlertBanner: isError,
        },
        initialState: {
            showGlobalFilter: true,
        },
        onPaginationChange: setPagination,
        onGlobalFilterChange: setGlobalFilter,
        columnFilterDisplayMode: "popover",
        paginationDisplayMode: 'pages',
        positionToolbarAlertBanner: 'bottom',
        muiToolbarAlertBannerProps: isError
            ? {
                color: 'error',
                children: showError || 'Error loading Documents List.',
            }
            : undefined,
        renderTopToolbarCustomActions: () => (
            <Box
                sx={{
                    display: 'flex',
                    gap: '16px',
                    padding: '8px',
                    flexWrap: 'wrap',
                }}
            >
                <Button
                    variant="contained"
                    onClick={() => handleExportToExcel(list)}
                    startIcon={<FileDownloadIcon sx={{ color: "white" }} />}
                    sx={{
                        textTransform: 'none',
                        color: "white",
                        boxShadow: "none",
                        "&:hover": { boxShadow: "none" }
                    }}
                >
                    Excel
                </Button>
            </Box>
        ),
    });

    return (
        <Stack sx={{ mt: userId && "30px" }}>
            <Typography variant='h5' fontWeight={"700"} fontSize={"1.8rem"} mb={"2rem"} mt={userId ? "0px" : "100px"}>Documents List</Typography>
            {!userId && <Stack>
                <Typography sx={{ mb: "5px", fontSize: "12px" }}>Status</Typography>
                <Selector
                    value={status}
                    items={["PENDING", "APPROVED", "REJECTED"]}
                    onChange={(e) => setStatus(e.target.value)}
                    width={{ xs: '100%', sm: 200 }}
                />
            </Stack>}
            <Stack sx={{ marginTop: userId ? 2 : '2rem', borderRadius: '1.2rem', overflow: 'hidden' }}>
                <MaterialReactTable table={table} />
            </Stack>
        </Stack>
    );
};

export default DocumentList;