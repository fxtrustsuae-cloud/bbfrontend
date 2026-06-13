import Toolbar from "@mui/material/Toolbar";
import SearchInput from "../../../../../userPanelComponent/SearchInput";
import Selector from "../../../../../userPanelComponent/Selector";
import { useMediaQuery } from "@mui/material";


const items = ["Level 1", "Level 2", "Level 3", "Level 4", "Level 5", "Level 6", "Level 7", "Level 8", "Level 9", "Level 10", "Level 11", "Level 12", "Level 13", "Level 14", "Level 15", "Level 16", "Level 17", "Level 18", "Level 19", "Level 20", "Level 21", "Level 22", "Level 23", "Level 24", "Level 25", "Level 26", "Level 27", "Level 28", "Level 29", "Level 30", "Level 31"]


function UniLevelTableToolbar() {

  const matches = useMediaQuery('(max-width:690px)');

  return (
    <Toolbar sx={{ py: "1rem", display: "flex", gap: matches ? "1rem" : "0", flexDirection: matches ? "column" : "row", justifyContent: "space-between" }}>
      <Selector items={items} width={matches ? "100%" : "250px"} />
      <SearchInput stactSx={{ width: matches ? "100%" : "auto" }} inputWidth={matches ? "100%" : "250px"} />
    </Toolbar>
  );
}

export default UniLevelTableToolbar;