import {
    MaterialReactTable,
    useMaterialReactTable,
} from 'material-react-table';
import {
    Box,
    Button,
    Container,
    Typography,
    Stack,
    InputLabel,
} from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import * as XLSX from 'xlsx';
import { useSelector } from 'react-redux';
import { useState, useMemo, useCallback } from 'react';
import { useTransactionsListQuery } from "../../../../../globalState/walletState/walletStateApis"
// import Selector from '../../../components/Selector';
// import Selector from '../../userPanelComponent/Selector';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { BBMICOTableHeadColumn } from './BBMICOTableHeadColumn';
import { useBurnTokenListQuery } from '../../../../../globalState/BBM/BBMApis';

const STATUS_OPTIONS = ["PENDING", "COMPLETED", "REJECTED"];
// const TRANSACTION_TYPES = ["DEPOSIT", "STAKE-IN", "WITHDRAW", "REVERCED-USER", "REWARD", REFERRAL-INCOME, SYSTEM-REWARD, STAKING-REWARD, NETWORK-BONUS, SWAP-CMN-TO-CUSD, SWAP-CUSD-TO-CMN, INTERNAL-TRANSFER, GENERATION-REWARD, CONVERT-REWARD, BURN];

const handleExportToExcel = (rows) => {
    const worksheet = XLSX.utils.json_to_sheet(rows);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    XLSX.writeFile(workbook, 'burnTokenList.xlsx');
};

function BBMICOTable() {

    const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 10 });
    // const [filters, setFilters] = useState({
    //     status: "",
    //     transactionType: "BURN-TOKEN",
    //     startDate: null,
    //     endDate: null,
    // });

    // const formattedFromDate = filters.startDate ? dayjs(filters.startDate).format('YYYY-MM-DD') : undefined;
    // const formattedToDate = filters.endDate ? dayjs(filters.endDate).format('YYYY-MM-DD') : undefined;

    const { data: listData, isLoading, isError, error } = useBurnTokenListQuery({
        page: pagination.pageIndex + 1,
        sizePerPage: pagination.pageSize,
        // ...filters,
        // startDate: formattedFromDate,
        // endDate: formattedToDate,
    });

    const showError = error?.data?.message

    const burnTokenListData = listData?.data?.docs || [];

    const columns = useMemo(() => BBMICOTableHeadColumn, []);
    const data = useMemo(() => burnTokenListData, [burnTokenListData]);

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
        },
        onPaginationChange: setPagination,
        columnFilterDisplayMode: "popover",
        enableGlobalFilter: false,
        paginationDisplayMode: 'pages',
        positionToolbarAlertBanner: 'bottom',
        muiToolbarAlertBannerProps: isError
            ? {
                color: 'error',
                children: showError || 'Error loading data.',
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
                    onClick={() => handleExportToExcel(burnTokenListData)}
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
        <Stack sx={{ mt: "40px" }}>
            <Typography variant='h5' fontWeight={700} fontSize="1.8rem" mb={4}>
                Burn token list
            </Typography>
            <Stack sx={{ borderRadius: 2, overflow: 'hidden' }}>
                <MaterialReactTable table={table} />
            </Stack>
        </Stack>
    );
};

export default BBMICOTable;