import { Container, Stack } from "@mui/material";
import { ForexCrossRates } from "react-ts-tradingview-widgets";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function ForexCrossRatesWidget() {

    const { activeTheme } = useSelector((state) => state.themeMode);

    useEffect(() => {
        const style = document.createElement("style");
        style.innerHTML = `
            .tradingview-widget-copyright {
                display: none !important;
            }
        `;
        document.head.appendChild(style);
    }, []);

    return (
        <Stack
            sx={{
                mt: "2rem",
                width: "100%",
                maxWidth: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
            }}
        >
            <ForexCrossRates backgroundColor={activeTheme === "dark" ? "#292929" : "#ebe8e8"} colorTheme={activeTheme === "dark" ? "dark" : "light"} width={"100%"} height={600} />
        </Stack>
    );
}

export default ForexCrossRatesWidget;