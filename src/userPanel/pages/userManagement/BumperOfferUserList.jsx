import {
    MaterialReactTable,
    useMaterialReactTable,
} from 'material-react-table';
import {
    Box,
    Button,
    Typography,
    Stack
} from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import * as XLSX from 'xlsx';
import { useState, useMemo } from 'react';
import { useGetBumperOfferUserListQuery } from '../../../globalState/admin/adminStateApis';
import { BumperOfferUserColumnHeader } from './BumperOfferUserColumnHeader';

const handleExportToExcel = (rows) => {
    const worksheet = XLSX.utils.json_to_sheet(rows);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    XLSX.writeFile(workbook, 'userListData.xlsx');
};

function BumperOfferUserList() {

    const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 10 });
    const [search, setSearch] = useState("");

    const { data: listData, isLoading, isError, error } = useGetBumperOfferUserListQuery({
        page: pagination.pageIndex + 1,
        sizePerPage: pagination.pageSize,
        search
    });

    const showError = error?.data?.message

    const bumperOfferUserListData = listData?.data?.docs || [];

    const columns = useMemo(() => BumperOfferUserColumnHeader, []);
    const data = useMemo(() => bumperOfferUserListData, [bumperOfferUserListData]);

    const table = useMaterialReactTable({
        columns,
        data,
        enableColumnFilters: false,
        enableSorting: false,
        enableColumnActions: false,
        manualPagination: true,
        manualFiltering: true,
        rowCount: listData?.data?.totalDocs || 0,
        state: {
            pagination,
            isLoading,
            showAlertBanner: isError,
            search
        },
        initialState: {
            showGlobalFilter: true,
        },
        onPaginationChange: setPagination,
        onGlobalFilterChange: setSearch,
        columnFilterDisplayMode: "popover",
        paginationDisplayMode: 'pages',
        positionToolbarAlertBanner: 'bottom',
        muiToolbarAlertBannerProps: isError
            ? {
                color: 'error',
                children: showError || 'Error loading transactions.',
            }
            : undefined,
        renderTopToolbarCustomActions: () => (
            <Box
                sx={{
                    display: 'flex',
                    gap: 2,
                    padding: 1,
                    flexWrap: 'wrap',
                }}
            >
                <Button
                    variant="contained"
                    onClick={() => handleExportToExcel(userListData)}
                    startIcon={<FileDownloadIcon sx={{ color: "white" }} />}
                    sx={{
                        textTransform: 'none',
                        color: 'white',
                        boxShadow: 'none',
                        bgcolor: "primary.main",
                        '&:hover': { boxShadow: 'none' },
                    }}
                >
                    Excel
                </Button>
            </Box>
        ),
    });

    return (
        <Stack sx={{ mt: "100px" }}>
            <Typography variant='h5' fontWeight={700} fontSize="1.8rem" mb={4}>
                Bumper offer User list
            </Typography>

            <Stack sx={{ borderRadius: 2, overflow: 'hidden' }}>
                <MaterialReactTable table={table} />
            </Stack>
        </Stack>
    );
};

export default BumperOfferUserList;