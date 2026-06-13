import { createMRTColumnHelper } from 'material-react-table';
import { Button, Typography } from '@mui/material';
import ModalComponent from "../../userPanelComponent/ModalComponent"
import { Link } from 'react-router-dom';
import EditTransaction from './EditTransaction';

const columnHelper = createMRTColumnHelper();

export const transactionListHeaderColumn = [

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
    columnHelper.display({
        header: 'Action',
        Cell: ({ row }) => {
            // <Button
            //     sx={{
            //         display: !row.original.transactionType === "WITHDRAW" && "none"
            //     }}
            //     component={Link}
            //     to={`/dashboard/transactionList/edit/${row.original._id}`}
            //     variant='contained'
            //     size='small'
            // >Edit</Button>
            return (row.original.transactionType === "WITHDRAW" && row.original.status === "PENDING") && <ModalComponent
                key={row.original._id}
                Content={EditTransaction}
                contentData={row.original._id}
                btnName={"Edit"}
            />
        },
    }),
];