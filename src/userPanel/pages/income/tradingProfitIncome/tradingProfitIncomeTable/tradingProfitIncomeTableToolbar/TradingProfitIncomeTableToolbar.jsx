import { Toolbar, useMediaQuery } from "@mui/material";
import SearchInput from "../../../../../userPanelComponent/SearchInput";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from "react";
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Stack } from "@mui/material";


function TradingProfitIncomeTableToolbar() {

    const matches = useMediaQuery('(max-width:1000px)');
    const inputWidthMatches = useMediaQuery('(max-width:600px)');

    const [value, setValue] = useState(dayjs('2022-04-17'));

    return (
        <Toolbar sx={{ py: "1rem", display: "flex", flexDirection: matches ? "column" : "row", justifyContent: "space-between", gap: matches ? "1rem" : "0" }}>
            <Stack sx={{ width: { xs: "100%", sm: 'auto' }, flexDirection: { xs: "column", sm: "row" }, gap: { xs: "1rem", sm: "2rem" } }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        sx={{ width: "100%" }}
                        value={value}
                        onChange={(newValue) => setValue(newValue)}
                    />
                    <DatePicker
                        sx={{ width: "100%" }}
                        value={value}
                        onChange={(newValue) => setValue(newValue)}
                    />
                </LocalizationProvider>
            </Stack>
            <Stack sx={{ width: { xs: "100%", sm: 'auto' } }}>
                <SearchInput inputWidth={inputWidthMatches ? "100%" : "250px"} />
            </Stack>
        </Toolbar>
    );
}

export default TradingProfitIncomeTableToolbar;