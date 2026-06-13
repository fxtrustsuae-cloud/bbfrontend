import {
    MaterialReactTable,
    useMaterialReactTable
} from 'material-react-table';
import { Stack, InputLabel, Container, Typography } from '@mui/material';
import { useState } from 'react';
import { TicketsTableColumnHeade } from './TicketsTableColumnHeade';
import Selector from '../../../../userPanelComponent/Selector';
import { useSupportTicketListQuery } from '../../../../../globalState/supportState/supportStateApis';

function TicketsTable() {

    const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 10 });
    const [status, setStatus] = useState("");

    const { data: listData, isLoading, isError, error } = useSupportTicketListQuery({
        page: pagination.pageIndex + 1,
        sizePerPage: pagination.pageSize,
        status
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
            <Stack>
                <InputLabel sx={{ mb: 0.5, fontSize: 12 }}>Status</InputLabel>
                <Selector
                    items={["OPEN", "CLOSED", "PROCESSING"]}
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    width={{ xs: '100%', sm: 200 }}
                />
            </Stack>
            <Stack sx={{ marginTop: '2rem', borderRadius: '1.2rem', overflow: 'hidden' }}>
                <MaterialReactTable table={table} />
            </Stack>
        </Stack>
    )
};

export default TicketsTable;