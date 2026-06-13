import { createMRTColumnHelper } from 'material-react-table';
import { Typography } from '@mui/material';
import ModalComponent from '../../../userPanelComponent/ModalComponent';
import EditTransaction from '../EditTransaction';
import { Link } from 'react-router-dom';

const columnHelper = createMRTColumnHelper();

export const pendingTransactionListHeaderColumn = [

    columnHelper.display({
        header: 'Name',
        size: 150,
        Cell: ({ row }) => {
            return <Typography
                component={Link}
                to={`/dashboard/userManagement/editUser/${row?.original?.user?._id}`}
                state={{ selectedValue: "Transaction history" }}
                sx={{ color: "inherit" }}
            >{row?.original?.user?.name}</Typography>
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
    columnHelper.display({
        header: 'Action',
        Cell: ({ row }) => {
            // console.log(row?.original)
            // <Button
            //     sx={{
            //         display: !row.original.transactionType === "WITHDRAW" && "none"
            //     }}
            //     component={Link}
            //     to={`/dashboard/transactionList/edit/${row.original._id}`}
            //     variant='contained'
            //     size='small'
            // >Edit</Button>
            return <ModalComponent
                key={row.original._id}
                Content={EditTransaction}
                contentData={row.original._id}
                btnName={"Edit"}
            />
        },
    }),
];