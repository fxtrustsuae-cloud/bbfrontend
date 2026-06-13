import { createMRTColumnHelper } from 'material-react-table';
import { Typography } from '@mui/material';

const columnHelper = createMRTColumnHelper();

export const referralListColumnHeader = [
    columnHelper.accessor('name', {
        header: 'Name',
        size: 40,
    }),
    columnHelper.accessor('level', {
        header: 'Level',
        size: 40,
    }),
    columnHelper.accessor('referralCode', {
        header: 'Referral Code',
        size: 40,
    }),
    columnHelper.accessor('date', {
        header: 'Date',
        size: 40,
        Cell: ({ row }) => (
            <Typography>
                {new Date(row.original.date).toLocaleString()}
            </Typography>
        ),
    }),
];