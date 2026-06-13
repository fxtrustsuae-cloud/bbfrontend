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
    TextField,
} from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import * as XLSX from 'xlsx';
import { useSelector } from 'react-redux';
import { useState, useMemo, useCallback } from 'react';
import { UserListColumnHeader } from './UserListColumnHeader';
import { useTransactionsListQuery } from '../../../globalState/walletState/walletStateApis';
// import Selector from '../../../components/Selector';
import Selector from '../../userPanelComponent/Selector';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { useUserListQuery } from '../../../globalState/admin/adminStateApis';

const STATUS_OPTIONS = ["PENDING", "COMPLETED", "PROCESSING", "REJECTED"];
// const TRANSACTION_TYPES = ["DEPOSIT", "STAKE-IN", "WITHDRAW", "REVERCED-USER", "REWARD", REFERRAL-INCOME, SYSTEM-REWARD, STAKING-REWARD, NETWORK-BONUS, SWAP-CMN-TO-CUSD, SWAP-CUSD-TO-CMN, INTERNAL-TRANSFER, GENERATION-REWARD, CONVERT-REWARD, BURN];

const handleExportToExcel = (rows) => {
    const worksheet = XLSX.utils.json_to_sheet(rows);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    XLSX.writeFile(workbook, 'userListData.xlsx');
};

function UserList() {

    const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 10 });
    const [search, setSearch] = useState("");
    const [filters, setFilters] = useState({
        greaterThan: "",
        lessThan: "",
        type: "",
        fromDate: null,
        toDate: null,
    });

    const formattedFromDate = filters.fromDate ? dayjs(filters.fromDate).format('YYYY-MM-DD') : undefined;
    const formattedToDate = filters.toDate ? dayjs(filters.toDate).format('YYYY-MM-DD') : undefined;

    const { data: listData, isLoading, isError, error } = useUserListQuery({
        page: pagination.pageIndex + 1,
        sizePerPage: pagination.pageSize,
        search,
        ...filters,
        startDate: formattedFromDate,
        endDate: formattedToDate,
    });

    const showError = error?.data?.message

    const userListData = listData?.data?.docs || [];

    const columns = useMemo(() => UserListColumnHeader, []);
    const data = useMemo(() => userListData, [userListData]);

    const handleFilterChange = useCallback((key, value) => {
        setFilters((prev) => ({ ...prev, [key]: value }));
    }, []);

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
                User list
            </Typography>

            <Box sx={{
                display: 'flex',
                flexDirection: { xs: 'column', lg: 'row' },
                gap: 2,
                flexWrap: 'wrap',
                mb: 4,
            }}>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2 }}>
                    <Stack>
                        <InputLabel sx={{ mb: 0.5, fontSize: 12 }}>Greater than</InputLabel>
                        <TextField
                            type="number"
                            size='small'
                            value={filters.greaterThan}
                            onChange={(e) => handleFilterChange('greaterThan', e.target.value)}
                        />
                    </Stack>
                    <Stack>
                        <InputLabel sx={{ mb: 0.5, fontSize: 12 }}>Less than</InputLabel>
                        <TextField
                            type="number"
                            size='small'
                            value={filters.lessThan}
                            onChange={(e) => handleFilterChange('lessThan', e.target.value)}
                        />
                    </Stack>
                    <Stack>
                        <InputLabel sx={{ mb: 0.5, fontSize: 12 }}>Type</InputLabel>
                        <Selector
                            items={["BUSDBalance", "totalStakedBalance"]}
                            value={filters.type}
                            onChange={(e) => handleFilterChange('type', e.target.value)}
                            width={{ xs: '100%', sm: 200 }}
                        />
                    </Stack>
                </Box>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
                        <Stack>
                            <InputLabel sx={{ mb: 0.5, fontSize: 12 }}>From</InputLabel>
                            <DatePicker
                                value={filters.fromDate}
                                onChange={(newValue) => handleFilterChange('fromDate', newValue)}
                                slotProps={{
                                    textField: { size: 'small' },
                                    field: { clearable: true },
                                }}
                            />
                        </Stack>
                        <Stack>
                            <InputLabel sx={{ mb: 0.5, fontSize: 12 }}>To</InputLabel>
                            <DatePicker
                                value={filters.toDate}
                                onChange={(newValue) => handleFilterChange('toDate', newValue)}
                                slotProps={{
                                    textField: { size: 'small' },
                                    field: { clearable: true },
                                }}
                            />
                        </Stack>
                    </Box>
                </LocalizationProvider>
            </Box>

            <Stack sx={{ mt: 4, borderRadius: 2, overflow: 'hidden' }}>
                <MaterialReactTable table={table} />
            </Stack>
        </Stack>
    );
};

export default UserList;