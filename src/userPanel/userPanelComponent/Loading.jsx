import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function Loading({ mt }) {
    return (
        <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", mt: mt && mt }}>
            <CircularProgress />
        </Box>
    );
}

export default Loading;