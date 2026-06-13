import { createMRTColumnHelper } from 'material-react-table';
import { Typography } from '@mui/material';
import DialogBox from '../../../../userPanelComponent/DialogBox';

const columnHelper = createMRTColumnHelper();

export const BannerListHeaderColumn = [
    columnHelper.accessor('_id', {
        header: 'ID',
        size: 40,
    }),
    columnHelper.accessor('title', {
        header: 'Title',
        size: 40,
    }),
    columnHelper.display({
        id: 'image',
        header: 'Image',
        Cell: ({ row }) => {
            const image = row?.original?.image;
            return (
                <a href={image} target="_blank" rel="noopener noreferrer">
                    <img
                        src={image}
                        alt="image"
                        style={{
                            width: '50px',
                            height: 'auto',
                            borderRadius: '4px',
                            boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
                        }}
                    />
                </a>
            )
        },
        size: 100,
    }),
    columnHelper.accessor('createdAt', {
        header: 'Uploaded At',
        size: 200,
        Cell: ({ row }) => (
            <Typography>
                {new Date(row.original.createdAt).toLocaleString()}
            </Typography>
        ),
    }),
    columnHelper.display({
        id: 'action',
        header: 'Action',
        size: 80,
        Cell: ({ row }) => (
            <DialogBox
                btnName={"Delete"}
                btnSx={{
                    backgroundColor: "#0d3b36",
                    color: "white",
                    textTransform: "none",
                    "&:hover": {
                        backgroundColor: "#145c52"
                    }
                }}
                bannerId={row?.original?._id}
            />
        ),
    }),
];