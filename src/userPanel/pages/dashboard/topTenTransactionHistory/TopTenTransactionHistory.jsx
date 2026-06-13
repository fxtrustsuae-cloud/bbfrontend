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
import { topTenTransactionHistoryColumnHeader } from './topTenTransactionHistoryColumnHeader';
import { useTransactionListQuery } from '../../../../globalState/admin/adminStateApis';
import { useState } from 'react';

const handleExportToExcel = (rows) => {
  const worksheet = XLSX.utils.json_to_sheet(rows);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
  XLSX.writeFile(workbook, 'transactionList.xlsx');
};

function TopTenTransactionHistory() {

  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 10 });

  const { data: listData, isLoading, isError } = useTransactionListQuery({
    page: pagination.pageIndex + 1,
    sizePerPage: pagination.pageSize
  });

  const transactionsListData = listData?.data?.docs || [];

  const table = useMaterialReactTable({
    columns: topTenTransactionHistoryColumnHeader,
    data: transactionsListData,
    enableColumnFilters: false,
    enableSorting: false,
    enableColumnActions: false,
    manualFiltering: true,
    rowCount: listData?.data?.totalDocs || 0,
    state: {
      isLoading,
      showAlertBanner: isError,
    },
    columnFilterDisplayMode: "popover",
    enableGlobalFilter: false,
    positionToolbarAlertBanner: 'bottom',
    enablePagination: false,
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

  return (
    <Stack sx={{ mt: "30px" }}>
      <Typography variant='h5' fontWeight={700} fontSize="1.8rem" mb={4}>
        Transaction List
      </Typography>
      <Stack sx={{ mt: 2, borderRadius: 2, overflow: 'hidden' }}>
        <MaterialReactTable table={table} />
      </Stack>
    </Stack>
  );
};

export default TopTenTransactionHistory;