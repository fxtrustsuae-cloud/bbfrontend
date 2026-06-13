import Toolbar from "@mui/material/Toolbar";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from "react";
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useMediaQuery, Stack } from "@mui/material";
import Selector from "../../../../../userPanelComponent/Selector"


const itme1 = ["Subscription", "Renewal", "Trading", "Compounding", "Staking"]

const itme2 = ["Add", "Remove"]

const itme3 = ["6 Months", "12 Months", "24 Months", "36 Months", "48 Months", "60 Months", "120 Months"]


function BusinessHistoryTableToolbar() {

  const matches = useMediaQuery('(max-width:685px)');

  const [value, setValue] = useState(dayjs('2022-04-17'));

  return (
    <Toolbar sx={{ py: "1rem", display: "flex", flexDirection: "column", gap: matches ? "1rem" : "2rem" }}>
      <Stack sx={{ flexDirection: matches ? "column" : "row", gap: matches ? "1rem" : "2rem", width: "100%", justifyContent: "space-between" }}>
        <Selector items={itme1} shouldBeFullWidth={true} value="Subscription" />
        <Selector items={itme2} shouldBeFullWidth={true} value="Add" />
        <Selector items={itme3} shouldBeFullWidth={true} />
      </Stack>
      <Stack sx={{ flexDirection: matches ? "column" : "row", gap: matches ? "1rem" : "2rem", width: matches ? "100%" : "auto" }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            value={value}
            onChange={(newValue) => setValue(newValue)}
          />
          <DatePicker
            value={value}
            onChange={(newValue) => setValue(newValue)}
          />
        </LocalizationProvider>
      </Stack>
    </Toolbar>
  );
}

export default BusinessHistoryTableToolbar;