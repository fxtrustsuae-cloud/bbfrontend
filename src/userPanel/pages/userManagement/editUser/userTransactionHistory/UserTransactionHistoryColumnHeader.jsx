import { createMRTColumnHelper } from 'material-react-table';
import { Typography } from '@mui/material';
import ModalComponent from "../../../../userPanelComponent/ModalComponent";
import EditTransaction from "../../../transaction/EditTransaction"

const columnHelper = createMRTColumnHelper();

export const UserTransactionHistoryColumnHeader = [
    columnHelper.accessor('balanceType', {
        header: 'Balance Type',
        size: 120,
    }),
    columnHelper.accessor('transactionType', {
        header: 'Transaction Type',
        size: 150,
    }),
    columnHelper.display({
        header: 'From user',
        size: 150,
        Cell: ({ row }) => {
            return <Typography>{row.original.user.name}</Typography>
        }
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
            return (row.original.transactionType === "WITHDRAW" && row.original.status === "PENDING") && <ModalComponent
                Content={EditTransaction}
                contentData={row.original._id}
                btnName={"Edit"}
            />
        },
    }),
];