import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initializeAuth } from "./globalState/auth/authSlice.js";
import { routing } from "./userPanel/routesMapping/RoutesMapping.jsx";
import GoToTop from "./userPanel/userPanelComponent/GoToTop.jsx";
import Loading from "./userPanel/userPanelComponent/Loading.jsx";
import SignIn from "./landing/authPages/signIn/SignIn.jsx";
import Signup from "./landing/authPages/signUp/Signup.jsx";
import SignInDetails from "./landing/authPages/signInDetails/SignInDetails.jsx";
import ProtectedRoute from "./userPanel/userPanelComponent/ProtectedRoute.jsx";
import ProtectedAuthRoute from "./userPanel/userPanelComponent/ProtectedAuthRoute.jsx";
import Notify from "./userPanel/userPanelComponent/Notify.jsx";
import { clearNotification } from "./globalState/notification/notificationSlice.js";
import NotFound from "./userPanel/pages/NotFound.jsx";
import TokenExpiryHandler from "./userPanel/userPanelComponent/TokenExpiryHandler.jsx";

// Lazy-loaded components
// const LandingPage = lazy(() => import("./landing/LandingPage.jsx"));
const DashboardLayout = lazy(() => import("./userPanel/userPanelLayout/dashboardLayout/DashboardLayout.jsx"));

function App() {

  const { open, message, severity } = useSelector((state) => state.notification);
  const dispatch = useDispatch();

  const handleCloseNotify = () => dispatch(clearNotification());

  useEffect(() => {
    dispatch(initializeAuth());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <TokenExpiryHandler />
      <GoToTop />
      <Notify
        open={open}
        onClose={handleCloseNotify}
        message={message}
        severity={severity}
      />
      <Suspense fallback={<Loading mt={"20rem"} />}>
        <Routes>
          <Route path="/" element={<Navigate to="/signin" replace />} />
          <Route
            path="/signin"
            element={
              <ProtectedAuthRoute>
                <SignIn />
              </ProtectedAuthRoute>
            }
          />
          {/*<Route
            path="/signup"
            element={
              <ProtectedAuthRoute>
                <Signup />
              </ProtectedAuthRoute>
            }
          />/ */}
          <Route
            path="/signInDetails"
            element={
              <ProtectedAuthRoute>
                <SignInDetails />
              </ProtectedAuthRoute>
            }
          />
          <Route
            element={<ProtectedRoute />}
          >
            <Route path='/dashboard' element={<DashboardLayout />}>
              {
                routing.map((route, index) => (
                  <Route key={route.path} path={`/dashboard/${route.path}`} element={route.element} />
                ))
              }
            </Route>
          </Route>

          {/* Catch-All Route for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;