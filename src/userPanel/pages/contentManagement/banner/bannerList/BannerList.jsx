import {
    MaterialReactTable,
    useMaterialReactTable
} from 'material-react-table';
import { Box, Button, Typography, Stack } from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { useSelector } from 'react-redux';
import { BannerListHeaderColumn } from './BannerListHeaderColumn';
import { useState } from 'react';
import { useBannerListQuery } from '../../../../../globalState/admin/adminStateApis';

function BannerList() {

    // const { selectedTheme } = useSelector((state) => state.themeMode);

    const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 10 });
    const [globalFilter, setGlobalFilter] = useState("");

    const { data: listData, isLoading, isError } = useBannerListQuery({
        page: pagination.pageIndex + 1,
        sizePerPage: pagination.pageSize,
        search: globalFilter,
    });

    const list = listData?.data || [];

    const table = useMaterialReactTable({
        columns: BannerListHeaderColumn,
        data: isError ? [] : [list],
        enableColumnFilters: false,
        enableSorting: false,
        enableColumnActions: false,
        manualPagination: true,
        manualFiltering: true,
        rowCount: listData?.data?.totalRecords || 0,
        state: {
            pagination,
            globalFilter,
            isLoading
        },
        onPaginationChange: setPagination,
        onGlobalFilterChange: setGlobalFilter,
        columnFilterDisplayMode: "popover",
        paginationDisplayMode: 'pages',
        positionToolbarAlertBanner: 'bottom',
    });

    return (
        <Stack sx={{ mt: "100px" }}>
            <Typography variant='h5' fontWeight={"700"} fontSize={"1.8rem"}>Banner List</Typography>
            <Stack sx={{ marginTop: '2rem', borderRadius: '1.2rem', overflow: 'hidden' }}>
                <MaterialReactTable table={table} />
            </Stack>
        </Stack>
    );
};

export default BannerList;