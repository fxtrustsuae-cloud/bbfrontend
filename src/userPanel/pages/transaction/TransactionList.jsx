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
import { useState, useMemo, useCallback } from 'react';
import { transactionListHeaderColumn } from './TransactionListHeaderColumn';
import { useTransactionListQuery } from '../../../globalState/admin/adminStateApis';
// import Selector from '../../../components/Selector';
import Selector from '../../userPanelComponent/Selector';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { useUserListQuery } from '../../../globalState/admin/adminStateApis';

const STATUS_OPTIONS = ["PENDING", "COMPLETED", "REJECTED"];
const transaction_Type = ["BURN", "DEPOSIT", "BOND-IN", "WITHDRAW", "CONVERT-REWARD", "BOND-REWARD", "SIGNUP-BONUS", "LEVEL-AIR-DROP", "REFER-INCOME", "FUND-TRANSFER", "RANK-UPGRADE-BONUS", "DELEGATED-REWARD", "RANK-REWARD"]

const handleExportToExcel = (rows) => {
  const worksheet = XLSX.utils.json_to_sheet(rows);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
  XLSX.writeFile(workbook, 'transactionList.xlsx');
};

function TransactionList() {

  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 10 });
  const [filters, setFilters] = useState({
    status: "",
    transactionType: "",
    fromDate: null,
    toDate: null,
  });

  const formattedFromDate = filters.fromDate ? dayjs(filters.fromDate).format('YYYY-MM-DD') : undefined;
  const formattedToDate = filters.toDate ? dayjs(filters.toDate).format('YYYY-MM-DD') : undefined;

  const { data: listData, isLoading, isError, error } = useTransactionListQuery({
    page: pagination.pageIndex + 1,
    sizePerPage: pagination.pageSize,
    ...filters,
    startDate: formattedFromDate,
    endDate: formattedToDate,
  });

  const showError = error?.data?.message

  // const { data: userListData, isLoading: userDataLoading } = useUserListQuery({
  //   page: 0,
  //   sizePerPage: 5,
  //   // search:
  // });

  // console.log(userListData)

  const transactionsListData = listData?.data?.docs || [];

  const columns = useMemo(() => transactionListHeaderColumn, []);
  const data = useMemo(() => transactionsListData, [transactionsListData]);

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
          onClick={() => handleExportToExcel(transactionsListData)}
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

  const handleFilterChange = useCallback((key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  }, []);

  return (
    <Stack sx={{ mt: "100px" }}>
      <Typography variant='h5' fontWeight={700} fontSize="1.8rem" mb={4}>
        Transaction List
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
            <InputLabel sx={{ mb: 0.5, fontSize: 12 }}>Status</InputLabel>
            <Selector
              items={STATUS_OPTIONS}
              value={filters.status}
              onChange={(e) => handleFilterChange('status', e.target.value)}
              width={{ xs: '100%', sm: 200 }}
            />
          </Stack>
          <Stack>
            <InputLabel sx={{ mb: 0.5, fontSize: 12 }}>Transaction type</InputLabel>
            <Selector
              items={transaction_Type}
              value={filters.transactionType}
              onChange={(e) => handleFilterChange('transactionType', e.target.value)}
              width={{ xs: '100%', sm: 200 }}
            />
          </Stack>
          {/* <Stack>
            <InputLabel sx={{ mb: 0.5, fontSize: 12 }}>User name</InputLabel>
            <SearchableSelector
              width="100%"
              items={clientListData.map((item) => ({
                value: item.id,
                name: `${item.name} (${item.email})`
              }))}
              value={watch("userId")}
              onChange={(val) => setValue("userId", val, { shouldValidate: true })}
              onSearchChange={(val) => setSearchClient(val)}
              isLoading={userListLoading}
              shouldBeFullwidth={true}
            />
          </Stack> */}
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

export default TransactionList;