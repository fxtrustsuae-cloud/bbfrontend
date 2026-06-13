import { createMRTColumnHelper } from 'material-react-table';
import { Typography } from '@mui/material';

const columnHelper = createMRTColumnHelper();

export const topTenTransactionHistoryColumnHeader = [

    columnHelper.display({
        header: 'Name',
        size: 150,
        Cell: ({ row }) => {
            return < Typography >{row?.original?.user?.name}</Typography >
        },
    }),
    columnHelper.accessor('balanceType', {
        header: 'Balance Type',
        size: 120,
    }),
    columnHelper.accessor('transactionType', {
        header: 'Transaction Type',
        size: 250,
    }),
    columnHelper.accessor('amount', {
        header: 'Amount',
        size: 150,
    }),
    columnHelper.accessor('status', {
        header: 'Status',
        size: 150,
    }),
    columnHelper.accessor('description', {
        header: 'Description',
        size: 250,
    }),
    columnHelper.accessor('createdAt', {
        header: 'Registration Date',
        size: 200,
        Cell: ({ row }) => (
            <Typography>
                {new Date(row.original.createdAt).toLocaleString()}
            </Typography>
        ),
    }),
];