import { useState, useEffect } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Stack } from "@mui/material";

function ScrollUp() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            setIsVisible(scrollTop > 200);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScrollUp = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <Stack
            onClick={handleScrollUp}
            sx={{
                position: "fixed",
                bottom: "2.5rem",
                right: { xs: "2rem", sm: "4rem" },
                zIndex: 10,
                padding: "0.5rem",
                cursor: "pointer",
                opacity: isVisible ? 1 : 0,
                transition: "opacity 0.3s ease-in-out",
            }}
        >
            <KeyboardArrowUpIcon
                sx={{
                    fontSize: "3rem",
                    color: "white",
                    backgroundColor: "#f1b811",
                    borderRadius: "50%",
                    padding: "0.3rem",
                }}
            />
        </Stack>
    );
}

export default ScrollUp;