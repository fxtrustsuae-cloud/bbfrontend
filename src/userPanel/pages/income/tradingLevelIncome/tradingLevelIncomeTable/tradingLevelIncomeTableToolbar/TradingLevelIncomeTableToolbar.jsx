import Toolbar from "@mui/material/Toolbar";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from "react";
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';


function TradingLevelIncomeTableToolbar() {

  const [value, setValue] = useState(dayjs('2022-04-17'));

  return (
    <Toolbar sx={{ py: "1rem", display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: { xs: "1rem", sm: "2rem" } }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          sx={{ width: { xs: "100%", sm: "auto" } }}
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
        <DatePicker
          sx={{ width: { xs: "100%", sm: "auto" } }}
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
      </LocalizationProvider>
    </Toolbar>
  );
}

export default TradingLevelIncomeTableToolbar;