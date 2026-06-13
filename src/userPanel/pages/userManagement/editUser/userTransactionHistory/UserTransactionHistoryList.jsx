import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';
import {
  Box,
  Button,
  Typography,
  Stack,
  InputLabel,
} from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import * as XLSX from 'xlsx';
import { useState, useMemo, useCallback } from 'react';
import { UserTransactionHistoryColumnHeader } from "./UserTransactionHistoryColumnHeader"
import { useTransactionListQuery } from '../../../../../globalState/admin/adminStateApis';
import { useParams } from 'react-router-dom';
import Selector from '../../../../userPanelComponent/Selector';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';


const STATUS_OPTIONS = ["PENDING", "COMPLETED", "REJECTED"];

const TRANSACTION_TYPES = ["BURN", "DEPOSIT", "BOND-IN", "WITHDRAW", "CONVERT-REWARD", "BOND-REWARD", "SIGNUP-BONUS", "LEVEL-AIR-DROP", "REFER-INCOME", "FUND-TRANSFER", "RANK-UPGRADE-BONUS", "DELEGATED-REWARD", "RANK-REWARD"]

const handleExportToExcel = (rows) => {
  const worksheet = XLSX.utils.json_to_sheet(rows);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
  XLSX.writeFile(workbook, 'transactionList.xlsx');
};

function UserTransactionHistoryList() {

  const { id } = useParams()

  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 10 });
  const [filters, setFilters] = useState({
    status: "",
    transactionType: "",
    fromDate: null,
    toDate: null,
  });

  const formattedFromDate = filters.fromDate ? dayjs(filters.fromDate).format('YYYY-MM-DD') : undefined;
  const formattedToDate = filters.toDate ? dayjs(filters.toDate).format('YYYY-MM-DD') : undefined;

  const { data: listData, isLoading, isError } = useTransactionListQuery(
    {
      page: pagination.pageIndex + 1,
      sizePerPage: pagination.pageSize,
      userId: id,
      ...filters,
      startDate: formattedFromDate,
      endDate: formattedToDate,
    },
    {
      skip: !id
    }
  );

  const userTransactionsListData = listData?.data?.docs || [];

  const columns = useMemo(() => UserTransactionHistoryColumnHeader, []);
  const data = useMemo(() => userTransactionsListData, [userTransactionsListData]);

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
    <Stack sx={{ mt: "30px" }}>
      <Typography variant='h5' fontWeight={700} fontSize="1.5rem" mb={4}>
        Transaction history
      </Typography>
      <Stack>
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
              <InputLabel sx={{ mb: 0.5, fontSize: 12 }}>Transaction Type</InputLabel>
              <Selector
                items={TRANSACTION_TYPES}
                value={filters.transactionType}
                onChange={(e) => handleFilterChange('transactionType', e.target.value)}
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
      </Stack>
      <Stack sx={{ mt: 2, borderRadius: 2, overflow: 'hidden' }}>
        <MaterialReactTable table={table} />
      </Stack>
    </Stack>
  );
};

export default UserTransactionHistoryList;