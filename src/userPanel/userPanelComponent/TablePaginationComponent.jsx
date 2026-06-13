import { Stack, TablePagination } from '@mui/material';

function TablePaginationComponent({ count, page, rowsPerPage, onPageChange, onRowsPerPageChange }) {
    return (
        <Stack>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25, 100]}
                component="div"
                count={count}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={onPageChange}
                onRowsPerPageChange={onRowsPerPageChange}
            />
        </Stack>
    );
}

export default TablePaginationComponent;