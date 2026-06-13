// import IconButton from '@mui/material/IconButton';
// import DownloadIcon from '@mui/icons-material/Download';

// const DownloadButton = ({ url, fileName = "document.pdf" }) => {
//     const handleDownload = () => {
//         const link = document.createElement("a");
//         link.href = url;
//         link.download = fileName;
//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);
//     };

//     return (
//         <IconButton size="small" onClick={handleDownload}>
//             <DownloadIcon fontSize="small" />
//         </IconButton>
//     );
// };

// export default DownloadButton;








// import IconButton from '@mui/material/IconButton';
// import DownloadIcon from '@mui/icons-material/Download';

// const DownloadButton = ({ url, fileName = "document.pdf" }) => {

//     console.log(url)

//     const handleDownload = async () => {
//         try {
//             const response = await fetch(url);
//             const blob = await response.blob();

//             const blobUrl = window.URL.createObjectURL(blob);
//             const link = document.createElement("a");

//             link.href = blobUrl;
//             link.download = fileName;
//             document.body.appendChild(link);
//             link.click();

//             document.body.removeChild(link);
//             window.URL.revokeObjectURL(blobUrl);
//         } catch (error) {
//             console.error("Download failed", error);
//         }
//     };

//     return (
//         <IconButton size="small" onClick={handleDownload}>
//             <DownloadIcon fontSize="small" />
//         </IconButton>
//     );
// };

// export default DownloadButton;















import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import DownloadIcon from "@mui/icons-material/Download";
import CircularProgress from "@mui/material/CircularProgress";
import Tooltip from "@mui/material/Tooltip";
import { useSelector } from "react-redux";

export default function DownloadButton({
    url,
    fileName = "document.pdf",
}) {
    const { token } = useSelector((state) => state.auth);
    const [loading, setLoading] = useState(false);

    const handleDownload = async () => {
        if (!token) return;

        try {
            setLoading(true);

            const response = await fetch(url, {
                method: "GET",
                headers: {
                    Authorization: token,
                },
            });

            if (!response.ok) {
                throw new Error("Failed to download file");
            }

            const blob = await response.blob();
            const blobUrl = window.URL.createObjectURL(blob);

            const link = document.createElement("a");
            link.href = blobUrl;
            link.download = fileName;

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            window.URL.revokeObjectURL(blobUrl);
        } catch (err) {
            console.error("Download error:", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Tooltip title="Download PDF">
            <span>
                <IconButton
                    size="small"
                    onClick={handleDownload}
                    disabled={loading}
                >
                    {loading ? (
                        <CircularProgress size={18} />
                    ) : (
                        <DownloadIcon fontSize="small" />
                    )}
                </IconButton>
            </span>
        </Tooltip>
    );
}