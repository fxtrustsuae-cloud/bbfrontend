import { createMRTColumnHelper } from 'material-react-table';
import { Typography, Skeleton } from '@mui/material';
import { useGetUserProfileQuery } from '../../../../globalState/settings/profileSettingApi';

const columnHelper = createMRTColumnHelper();

export const topTenTransactionHistoryColumnHeader = [
    columnHelper.display({
        header: 'Login ID',
        size: 40,
        Cell: () => {
            const { data, isLoading } = useGetUserProfileQuery()
            return < Typography >{isLoading ? <Skeleton width={100} height={30} /> : data?.data?.loginId || "Empty"}</Typography >
        },
    }),
    columnHelper.accessor('balanceType', {
        header: 'Balance Type',
        size: 120,
    }),
    // columnHelper.accessor('transactionType', {
    //     header: 'Transaction Type',
    //     size: 150,
    // }),
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