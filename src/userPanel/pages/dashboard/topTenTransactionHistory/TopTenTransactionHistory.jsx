// import { Stack, Typography, Container } from "@mui/material";
// import TopTenTransactionHistoryTable from "./topTenTransactionHistoryTable/TopTenTransactionHistoryTable";

// function TopTenTransactionHistory() {
//   return (
//     <Stack>
//       <Container><Typography variant="h6" fontWeight="bold">Top 10 transaction history</Typography></Container>
//       <TopTenTransactionHistoryTable />
//     </Stack>
//   )
// }

// export default TopTenTransactionHistory;



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
import { useTransactionsListQuery } from '../../../../globalState/walletState/walletStateApis';
import { topTenTransactionHistoryColumnHeader } from './topTenTransactionHistoryColumnHeader';

const STATUS_OPTIONS = ["PENDING", "COMPLETED", "PROCESSING", "REJECTED"];
// const TRANSACTION_TYPES = ["DEPOSIT", "STAKE-IN", "WITHDRAW", "REVERCED-USER", "REWARD", REFERRAL-INCOME, SYSTEM-REWARD, STAKING-REWARD, NETWORK-BONUS, SWAP-CMN-TO-CUSD, SWAP-CUSD-TO-CMN, INTERNAL-TRANSFER, GENERATION-REWARD, CONVERT-REWARD, BURN];

const handleExportToExcel = (rows) => {
  const worksheet = XLSX.utils.json_to_sheet(rows);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
  XLSX.writeFile(workbook, 'transactionList.xlsx');
};

function TopTenTransactionHistory() {

  const { data: listData, isLoading, isError, error } = useTransactionsListQuery({
    // page: pagination.pageIndex + 1,
    // sizePerPage: pagination.pageSize,
  });

  const showError = error?.data?.message

  const transactionsListData = listData?.data?.docs || [];

  const table = useMaterialReactTable({
    columns: topTenTransactionHistoryColumnHeader,
    data: transactionsListData,
    enableColumnFilters: false,
    enableSorting: false,
    enableColumnActions: false,
    manualPagination: true,
    manualFiltering: true,
    rowCount: listData?.data?.totalRecords || 0,
    state: {
      // pagination,
      isLoading,
      showAlertBanner: isError,
    },
    // onPaginationChange: setPagination,
    enablePagination: false,
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
    // renderTopToolbarCustomActions: () => (
    //   <Box
    //     sx={{
    //       display: 'flex',
    //       gap: 2,
    //       padding: 1,
    //       flexWrap: 'wrap',
    //     }}
    //   >
    //     <Button
    //       variant="contained"
    //       onClick={() => handleExportToExcel(transactionsListData)}
    //       startIcon={<FileDownloadIcon sx={{ color: "white" }} />}
    //       sx={{
    //         textTransform: 'none',
    //         color: 'white',
    //         boxShadow: 'none',
    //         bgcolor: "primary.main",
    //         '&:hover': { boxShadow: 'none' },
    //       }}
    //     >
    //       Excel
    //     </Button>
    //   </Box>
    // ),
  });

  return (
    <Stack sx={{ mt: "3rem" }}>
      <Typography variant='h5' fontWeight={700} fontSize="1.8rem" mb={4}>
        Top 10 transaction list
      </Typography>
      <Stack sx={{ borderRadius: 2, overflow: 'hidden' }}>
        <MaterialReactTable table={table} />
      </Stack>
    </Stack>
  );
};

export default TopTenTransactionHistory;