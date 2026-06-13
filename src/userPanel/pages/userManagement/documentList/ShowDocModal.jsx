import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

export default function ShowDocModal({ contentData, modalWidth }) {

    const [open, setOpen] = React.useState(false);

    const { src, alt, isPdf } = contentData || {};

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: modalWidth || 800,
        maxHeight: '80vh',
        overflow: 'auto',
        bgcolor: 'background.paper',
        borderRadius: 2,
        boxShadow: 24,
        p: 2,
    };

    return (
        <>
            {isPdf ? (
                <Button size="small" onClick={() => setOpen(true)}>
                    View PDF
                </Button>
            ) : (
                <img
                    src={src}
                    alt={alt}
                    style={{
                        width: '50px',
                        borderRadius: '4px',
                        cursor: 'pointer',
                    }}
                    onClick={() => setOpen(true)}
                />
            )}

            <Modal open={open} onClose={() => setOpen(false)}>
                <Box sx={style}>
                    {isPdf ? (
                        <iframe
                            src={src}
                            title={alt}
                            style={{
                                width: '100%',
                                height: '75vh',
                                border: 'none',
                            }}
                        />
                    ) : (
                        <img
                            src={src}
                            alt={alt}
                            style={{
                                width: '100%',
                                objectFit: 'contain',
                            }}
                        />
                    )}
                </Box>
            </Modal>
        </>
    );
}


















// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Modal from '@mui/material/Modal';
// import Button from '@mui/material/Button';
// import Stack from '@mui/material/Stack';

// export default function ShowDocModal({ contentData, modalWidth }) {
//     const [open, setOpen] = React.useState(false);

//     const { src, alt } = contentData || {};

//     const isPdf = React.useMemo(
//         () => src?.toLowerCase().endsWith('.pdf'),
//         [src]
//     );

//     const style = {
//         position: 'absolute',
//         top: '50%',
//         left: '50%',
//         transform: 'translate(-50%, -50%)',
//         width: modalWidth || 800,
//         maxHeight: '80vh',
//         overflow: 'auto',
//         bgcolor: 'background.paper',
//         borderRadius: 2,
//         boxShadow: 24,
//         p: 2,
//     };

//     // ⬇️ Download handler
//     const handleDownload = () => {
//         const link = document.createElement('a');
//         link.href = src;
//         link.download = alt || 'document.pdf';
//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);
//     };

//     return (
//         <>
//             {isPdf ? (
//                 <Button
//                     size="small"
//                     variant="outlined"
//                     onClick={handleDownload}
//                 >
//                     Download PDF
//                 </Button>
//             ) : (
//                 <img
//                     src={src}
//                     alt={alt}
//                     style={{
//                         width: '50px',
//                         borderRadius: '4px',
//                         cursor: 'pointer',
//                     }}
//                     onClick={() => setOpen(true)}
//                 />
//             )}

//             {/* Image Preview Modal */}
//             {!isPdf && (
//                 <Modal open={open} onClose={() => setOpen(false)}>
//                     <Box sx={style}>
//                         <Stack spacing={2}>
//                             <img
//                                 src={src}
//                                 alt={alt}
//                                 style={{
//                                     width: '100%',
//                                     objectFit: 'contain',
//                                 }}
//                             />
//                             <Button
//                                 variant="outlined"
//                                 onClick={handleDownload}
//                             >
//                                 Download Image
//                             </Button>
//                         </Stack>
//                     </Box>
//                 </Modal>
//             )}
//         </>
//     );
// }