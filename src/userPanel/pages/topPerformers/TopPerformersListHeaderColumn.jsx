import { createMRTColumnHelper } from 'material-react-table';
import { Typography } from '@mui/material';

const columnHelper = createMRTColumnHelper();

export const TopPerformersListHeaderColumn = [

    columnHelper.accessor('referralCode', {
        header: 'Referral Code'
    }),
    columnHelper.accessor('name', {
        header: 'Name'
    }),
    columnHelper.accessor('email', {
        header: 'Email'
    }),
    columnHelper.accessor('totalRewardBalance', {
        header: 'Total Reward Balance',
        Cell: ({ row }) => (
            <Typography>
                {Number(row.original.totalRewardBalance).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 2 })}
            </Typography>
        ),
    }),
    columnHelper.accessor('totalStakedBalance', {
        header: 'Total Staked Balance',
        Cell: ({ row }) => (
            <Typography>
                {Number(row.original.totalStakedBalance).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 2 })}
            </Typography>
        ),
    })
];