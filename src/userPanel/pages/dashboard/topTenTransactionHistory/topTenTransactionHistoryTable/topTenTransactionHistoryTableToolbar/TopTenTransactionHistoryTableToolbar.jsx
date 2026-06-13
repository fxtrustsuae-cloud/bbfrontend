import Toolbar from "@mui/material/Toolbar";
import Selector from "../../../../../userPanelComponent/Selector"
import { Stack, useMediaQuery } from "@mui/material";

const statusData = ["PENDING", "COMPLETED", "PROCESSING", "REJECTED"]

const transactionTypeData = ["REFERRAL-INCOME", "GENERATION-INCOME", "RANK-REWARD", "MATCHING-BONUS", "CLUB-INCOME", "TRADING-PROFIT-INCOME", "IB-INCOME", "CREATE-ROBOT"]


function TopTenTransactionHistoryTableToolbar({ setStatus, setType, statusValue, typeValue }) {

  return (
    <Toolbar sx={{ gap: "1rem" }}>
      <Selector
        items={transactionTypeData}
        width={"250px"}
        onChange={(val) => setType(val.target.value)}
        value={typeValue}
        placeholder={"Transaction Type"}
      />
      <Selector
        items={statusData}
        width={"250px"}
        onChange={(val) => setStatus(val.target.value)}
        value={statusValue}
        placeholder={"Status"}
      />
    </Toolbar>
  );
}

export default TopTenTransactionHistoryTableToolbar;