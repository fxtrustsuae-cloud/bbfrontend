// import { Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// const ProtectedAuthRoute = ({ children }) => {
//     const { token } = useSelector(state => state.auth);

//     return token ? <Navigate to="/" replace /> : children;
// };

// export default ProtectedAuthRoute;





import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedAuthRoute = ({ children }) => {
    const { token } = useSelector(state => state.auth);

    return token ? <Navigate to="/dashboard" replace /> : children;
};

export default ProtectedAuthRoute;