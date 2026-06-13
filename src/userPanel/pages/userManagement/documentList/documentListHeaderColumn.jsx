import { createMRTColumnHelper } from 'material-react-table';
import { useMediaQuery, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import ModalComponent from '../../../userPanelComponent/ModalComponent';
import EditDocumentModalContent from '../editDocument/EditDocumentModalContent';
import ShowExtraDocModal from './ShowExtraDocModal';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ShowDocModal from './ShowDocModal';
import DownloadButton from '../../../userPanelComponent/DownloadButton';


const columnHelper = createMRTColumnHelper();

export const documentListHeaderColumn = [
    // columnHelper.accessor('id', {
    //     header: 'ID',
    //     size: 40,
    // }),
    // columnHelper.accessor('userId', {
    //     header: 'User Id',
    //     size: 100,
    // }),
    columnHelper.display({
        id: 'action',
        header: 'Action',
        size: 80,
        Cell: ({ row }) => (
            <ModalComponent
                modalWidth={{ xs: "90%", sm: 600 }}
                btnName={"Edit"}
                Content={EditDocumentModalContent}
                contentData={row.original.id}
            />
        ),
    }),
    columnHelper.display({
        header: 'Name',
        size: 120,
        Cell: ({ row }) => {
            const userName = row?.original?.user?.name;
            return <Typography>{userName}</Typography>
        },
    }),
    columnHelper.display({
        header: 'Email',
        size: 120,
        Cell: ({ row }) => {
            const userEmail = row?.original?.user?.email;
            return <Typography>{userEmail}</Typography>
        },
    }),
    // columnHelper.accessor('phone', {
    //     header: 'Phone',
    //     size: 120,
    // }),
    // columnHelper.display({
    //     id: 'poi',
    //     header: 'POI',
    //     size: 100,
    //     Cell: ({ row }) => {

    //         const isPdf = (url = "") =>
    //             url.toLowerCase().endsWith(".pdf");

    //         const hasPOI = row?.original?.poi;
    //         const isPOI_PDF = isPdf(hasPOI);

    //         return hasPOI ? (
    //             <ShowDocModal
    //                 type={isPOI_PDF ? "button" : "image"}
    //                 btnName={isPOI_PDF ? "View PDF" : hasPOI}
    //                 modalWidth={{ xs: "90%", sm: 800 }}
    //                 Content={ShowDocModal}
    //                 contentData={{
    //                     src: hasPOI,
    //                     alt: "POI",
    //                     isPdf: isPOI_PDF
    //                 }}
    //             />
    //         ) : (
    //             <Typography variant="body2" color="textSecondary">
    //                 No POI
    //             </Typography>
    //         );
    //     },
    // }),
    columnHelper.display({
        id: 'poi',
        header: 'POI',
        size: 100,
        Cell: ({ row }) => {

            const isPdf = (url = "") =>
                url.toLowerCase().endsWith(".pdf");

            const hasPOI = row?.original?.poi;
            const isPOI_PDF = isPdf(hasPOI);

            return hasPOI ? (
                isPOI_PDF ? (
                    <DownloadButton
                        url={hasPOI}
                        fileName="POI.pdf"
                    />
                ) : (
                    <ShowDocModal
                        modalWidth={{ xs: "90%", sm: 800 }}
                        contentData={{
                            src: hasPOI,
                            alt: "POI"
                        }}
                    />
                )
            ) : (
                <Typography variant="body2" color="textSecondary">
                    No POI
                </Typography>
            );
        },
    }),
    // columnHelper.display({
    //     id: 'poa',
    //     header: 'POA',
    //     size: 100,
    //     Cell: ({ row }) => {

    //         const isPdf = (url = "") =>
    //             url.toLowerCase().endsWith(".pdf");

    //         const hasPOA = row?.original?.poa;
    //         const isPOA_PDF = isPdf(hasPOA);

    //         return hasPOA ? (
    //             <ShowDocModal
    //                 type={isPOA_PDF ? "button" : "image"}
    //                 btnName={isPOA_PDF ? "View PDF" : hasPOA}
    //                 modalWidth={{ xs: "90%", sm: 800 }}
    //                 Content={ShowDocModal}
    //                 contentData={{
    //                     src: hasPOA,
    //                     alt: "POA",
    //                     isPdf: isPOA_PDF
    //                 }}
    //             />
    //         ) : (
    //             <Typography variant="body2" color="textSecondary">
    //                 No POA
    //             </Typography>
    //         );
    //     },
    // }),
    columnHelper.display({
        id: 'poa',
        header: 'POA',
        size: 100,
        Cell: ({ row }) => {

            const isPdf = (url = "") =>
                url.toLowerCase().endsWith(".pdf");

            const hasPOA = row?.original?.poa;
            const isPOA_PDF = isPdf(hasPOA);

            return hasPOA ? (
                isPOA_PDF ? (
                    <DownloadButton
                        url={hasPOA}
                        fileName="POA.pdf"
                    />
                ) : (
                    <ShowDocModal
                        modalWidth={{ xs: "90%", sm: 800 }}
                        contentData={{
                            src: hasPOA,
                            alt: "POA"
                        }}
                    />
                )
            ) : (
                <Typography variant="body2" color="textSecondary">
                    No POA
                </Typography>
            );
        },
    }),
    // columnHelper.display({
    //     id: 'extraFiles',
    //     header: 'Extra files',
    //     Cell: ({ row }) => {
    //         const hasExtraFiles = row?.original?.extraDocs;
    //         return hasExtraFiles ? (
    //             <Stack sx={{ flexDirection: "row", gap: "10px" }}>
    //                 {
    //                     hasExtraFiles?.map((image, i) => (
    //                         <a href={image} target="_blank" rel="noopener noreferrer" key={i}>
    //                             <img
    //                                 src={image}
    //                                 alt="extraFiles"
    //                                 style={{
    //                                     width: '50px',
    //                                     height: 'auto',
    //                                     borderRadius: '4px',
    //                                     boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
    //                                 }}
    //                             />
    //                         </a>
    //                     ))
    //                 }
    //             </Stack>

    //         ) : (
    //             <Typography variant="body2" color="textSecondary">
    //                 No POA
    //             </Typography>
    //         );
    //     },
    //     size: 100,
    // }),
    columnHelper.display({
        id: 'extraDoc',
        header: 'Extra Document',
        Cell: ({ row }) => {
            const hasExtraDocs = row?.original?.extraDocs;
            const modalWidth = useMediaQuery('(max-width:600px)');
            return hasExtraDocs?.length > 0 ? (
                <ModalComponent
                    Content={ShowExtraDocModal}
                    contentData={hasExtraDocs}
                    type='icon'
                    btnName={VisibilityIcon}
                    modalWidth={modalWidth ? "95%" : 500}
                />
            ) : (
                <Typography variant="body2" color="textSecondary">
                    No Extra Document
                </Typography>
            );
        },
        // size: 100,
    }),
    columnHelper.accessor('approvedBy', {
        header: 'Approved / Rejected By',
        size: 150,
    }),
    columnHelper.accessor('remark', {
        header: 'Remark',
        // size: 150,
    }),
    columnHelper.accessor('status', {
        header: 'Status',
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
    // columnHelper.display({
    //     id: 'action',
    //     header: 'Action',
    //     size: 80,
    //     Cell: ({ row }) => (
    //         <ModalComponent
    //             modalWidth={{ xs: "90%", sm: 600 }}
    //             btnName={"Edit"}
    //             Content={EditDocumentModalContent}
    //             contentData={row.original.id}
    //         />
    //     ),
    // }),
];