import {
    MaterialReactTable,
    useMaterialReactTable
} from 'material-react-table';
import {
    Typography,
    Stack
} from '@mui/material';
import { useMemo } from 'react';
import { TopPerformersListHeaderColumn } from './TopPerformersListHeaderColumn';
import { useGetTopPerformersListQuery } from '../../../globalState/settings/profileSettingApi';


function TopPerformersList() {

    const { data: listData, isLoading, isError, error } = useGetTopPerformersListQuery();

    const showError = error?.data?.message

    const topPerformersListData = listData?.data || [];

    const columns = useMemo(() => TopPerformersListHeaderColumn, []);
    const data = useMemo(() => topPerformersListData, [topPerformersListData]);

    const table = useMaterialReactTable({
        columns,
        data,
        enableColumnFilters: false,
        enableSorting: false,
        enableColumnActions: false,
        manualFiltering: true,
        rowCount: topPerformersListData?.length || 0,
        state: {
            isLoading,
            showAlertBanner: isError,
        },
        columnFilterDisplayMode: "popover",
        enableGlobalFilter: false,
        paginationDisplayMode: 'pages',
        positionToolbarAlertBanner: 'bottom',
        muiToolbarAlertBannerProps: isError
            ? {
                color: 'error',
                children: showError || 'Error loading top performers.',
            }
            : undefined,
    });

    return (
        <Stack>
            <Typography variant='h5' fontWeight={700} fontSize="1.8rem" mb={4}>
                Top Performers List
            </Typography>
            <Stack sx={{ mt: 2, borderRadius: 2, overflow: 'hidden' }}>
                <MaterialReactTable table={table} />
            </Stack>
        </Stack>
    );
};

export default TopPerformersList;