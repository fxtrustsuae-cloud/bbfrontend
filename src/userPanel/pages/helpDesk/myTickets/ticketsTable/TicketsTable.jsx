import {
    MaterialReactTable,
    useMaterialReactTable
} from 'material-react-table';
import { Stack, InputLabel, Box } from '@mui/material';
import { useState } from 'react';
import { TicketsTableColumnHeade } from './TicketsTableColumnHeade';
import Selector from '../../../../userPanelComponent/Selector';
import { useSupportTicketListQuery } from '../../../../../globalState/admin/adminStateApis';

function TicketsTable() {

    const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 10 });
    const [status, setStatus] = useState("");
    const [priority, setPriority] = useState("");

    const { data: listData, isLoading, isError, error } = useSupportTicketListQuery({
        page: pagination.pageIndex + 1,
        sizePerPage: pagination.pageSize,
        status,
        priority
    });

    const showError = error?.data?.message

    const list = listData?.data?.ticketList || [];

    const table = useMaterialReactTable({
        columns: TicketsTableColumnHeade,
        data: list,
        enableColumnFilters: false,
        enableSorting: false,
        enableColumnActions: false,
        manualPagination: true,
        manualFiltering: true,
        rowCount: listData?.data?.totalRecords || 0,
        state: {
            pagination,
            isLoading,
            showAlertBanner: isError,
        },
        onPaginationChange: setPagination,
        columnFilterDisplayMode: "popover",
        paginationDisplayMode: 'pages',
        positionToolbarAlertBanner: 'bottom',
        muiToolbarAlertBannerProps: isError
            ? {
                color: 'error',
                children: showError || 'Error loading tickets.',
            }
            : undefined,
    });

    return (
        <Stack sx={{ mt: "30px" }}>
            <Box sx={{ display: "flex", gap: "15px" }}>
                <Stack>
                    <InputLabel sx={{ mb: 0.5, fontSize: 12 }}>Status</InputLabel>
                    <Selector
                        items={["OPEN", "CLOSED", "PROCESSING"]}
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        width={{ xs: '100%', sm: 200 }}
                    />
                </Stack>
                <Stack>
                    <InputLabel sx={{ mb: 0.5, fontSize: 12 }}>Priority</InputLabel>
                    <Selector
                        items={["LOW", "MEDIUM", "HIGH"]}
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                        width={{ xs: '100%', sm: 200 }}
                    />
                </Stack>
            </Box>
            <Stack sx={{ marginTop: '2rem', borderRadius: '1.2rem', overflow: 'hidden' }}>
                <MaterialReactTable table={table} />
            </Stack>
        </Stack>
    )
};

export default TicketsTable;