import { Toolbar, useMediaQuery } from "@mui/material";
import SearchInput from "../../../../../userPanelComponent/SearchInput";

function GiftTLCProfitTableToolbar() {

    const matches = useMediaQuery('(max-width:450px)');

    return (
        <Toolbar>
            <SearchInput stactSx={{ alignItems: "end", width: "100%", height: "100%" }} inputWidth={matches ? "100%" : "250px"} />
        </Toolbar>
    );
}

export default GiftTLCProfitTableToolbar;