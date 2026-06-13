import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectedRoute() {
    const { token } = useSelector(state => state.auth);
    return token ? <Outlet /> : <Navigate to="/signin" replace />;
}

export default ProtectedRoute;