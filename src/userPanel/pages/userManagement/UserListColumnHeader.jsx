import { createMRTColumnHelper } from 'material-react-table';
import { IconButton, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';

const columnHelper = createMRTColumnHelper();

export const UserListColumnHeader = [

    columnHelper.accessor('loginId', {
        header: 'Login Id',
        size: 120,
    }),
    columnHelper.accessor('name', {
        header: 'Name',
        size: 150,
    }),
    columnHelper.accessor('email', {
        header: 'Email',
        size: 150,
    }),
    columnHelper.accessor('mobile', {
        header: 'Mobile',
        size: 150,
    }),
    columnHelper.accessor('BUSDBalance', {
        header: 'Main balance',
    }),
    columnHelper.accessor('totalStakedBalance', {
        header: 'Total staked balance',
    }),
    columnHelper.accessor('TRADEBalance', {
        header: 'Trade balance',
    }),
    columnHelper.accessor('AFFLIATEBalance', {
        header: 'Affliate balance',
    }),
    columnHelper.accessor('PACKAGEBalance', {
        header: 'Package balance',
    }),
    columnHelper.accessor('createdAt', {
        header: 'Registration Date',
        size: 250,
        Cell: ({ row }) => (
            <Typography>
                {new Date(row.original.createdAt).toLocaleString()}
            </Typography>
        ),
    }),
    columnHelper.display({
        header: 'Action',
        size: 50,
        Cell: ({ row }) => {
            const navigate = useNavigate()
            return <IconButton onClick={() => navigate(`/dashboard/userManagement/editUser/${row.original._id}`)}>
                < EditIcon />
            </IconButton>
        }
    })
];