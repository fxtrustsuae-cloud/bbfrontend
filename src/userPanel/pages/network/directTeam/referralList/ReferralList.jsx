import {
    MaterialReactTable,
    useMaterialReactTable,
} from 'material-react-table';
import {
    Box,
    Button,
    Container,
    Typography,
    Stack
} from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import * as XLSX from 'xlsx';
import { referralListColumnHeader } from './referralListColumnHeader';
import { useGetReferralListQuery } from '../../../../../globalState/settings/profileSettingApi';
import { useState } from 'react';

const handleExportToExcel = (rows) => {
    const worksheet = XLSX.utils.json_to_sheet(rows);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    XLSX.writeFile(workbook, 'transactionList.xlsx');
};

function ReferralList() {

    const { data: listData, isLoading, isError } = useGetReferralListQuery();

    const referralListData = listData?.data || [];

    const table = useMaterialReactTable({
        columns: referralListColumnHeader,
        data: referralListData,
        enableColumnFilters: false,
        enableSorting: false,
        enableColumnActions: false,
        state: {
            isLoading,
            showAlertBanner: isError,
        },
        columnFilterDisplayMode: "popover",
        enableGlobalFilter: false,
        paginationDisplayMode: 'pages',
        positionToolbarAlertBanner: 'bottom',
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
                    onClick={() => handleExportToExcel(referralListData)}
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
        <Container sx={{ mt: "100px" }}>
            <Typography variant='h5' fontWeight={700} fontSize="1.8rem" mb={4}>
                Referral List
            </Typography>
            <Stack sx={{ mt: 4, borderRadius: 2, overflow: 'hidden' }}>
                <MaterialReactTable table={table} />
            </Stack>
        </Container>
    );
};

export default ReferralList;