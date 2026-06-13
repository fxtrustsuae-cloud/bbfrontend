import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const GoToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {

        const contentElement = document.getElementById("main-content");

        if (contentElement) {
            contentElement.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [pathname]);

    return null;
};

export default GoToTop;