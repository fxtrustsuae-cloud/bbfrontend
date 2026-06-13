import { BrowserRouter, Route, Routes, Navigate, useLocation, useParams } from "react-router-dom";
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
const NotFound = lazy(() => import("./userPanel/pages/NotFound.jsx"));
const LandingPage = lazy(() => import("./landing/LandingPage.jsx"));
const DashboardLayout = lazy(() => import("./userPanel/userPanelLayout/dashboardLayout/DashboardLayout.jsx"));
import { useTheme, useMediaQuery } from "@mui/material";
import { setBanner } from "./globalState/admin/adminStateSlice.js";
import ModalComponent from "./userPanel/userPanelComponent/ModalComponent.jsx";
import { useGetBannerQuery } from "./globalState/admin/adminStateApis.js";
import BannerContent from "./userPanel/pages/BannerContent.jsx";
import TokenExpiryHandler from "./userPanel/userPanelComponent/TokenExpiryHandler.jsx";
import BBMLanding from "./landing/BBMLanding.jsx";
import RequireVerification from "./userPanel/userPanelComponent/RequireVerification.jsx";


function App() {

  const theme = useTheme();
  const downSm = useMediaQuery(theme.breakpoints.down("sm"))

  const { banner } = useSelector(state => state.admin)
  const { token } = useSelector(state => state.auth)

  const { open, message, severity } = useSelector((state) => state.notification);
  const dispatch = useDispatch();

  const handleCloseNotify = () => dispatch(clearNotification());


  useEffect(() => {
    dispatch(initializeAuth());
  }, [dispatch]);

  const { data, isLoading } = useGetBannerQuery()

  const bannerData = !isLoading && data?.data

  useEffect(() => {
    if (token && (!isLoading && data?.status)) {
      dispatch(setBanner(true));
    }
  }, [isLoading, data]);



  const withVerificationWrapper = (element, isKycRequired, isBankVerificationRequired, isHalfKycRequired) => {
    return (
      <RequireVerification
        isKycRequired={isKycRequired}
        isHalfKycRequired={isHalfKycRequired}
        isBankVerificationRequired={isBankVerificationRequired}
      >
        {element}
      </RequireVerification>
    );
  };


  return (
    <BrowserRouter>

      <TokenExpiryHandler />

      {(banner && bannerData) && (
        <ModalComponent
          open={true}
          Content={BannerContent}
          contentData={{
            ...data?.data,
            onModalClose: () => dispatch(setBanner(false)),
          }}
          padding={"none"}
          onOpen={() => { }}
          modalWidth={downSm ? "90%" : 500}
        />
      )}

      <GoToTop />
      <Notify
        open={open}
        onClose={handleCloseNotify}
        message={message}
        severity={severity}
      />
      <Suspense fallback={<Loading mt={"20rem"} />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/BBM" element={<BBMLanding />} />
          <Route
            path="/signin"
            element={
              <ProtectedAuthRoute>
                <SignIn />
              </ProtectedAuthRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <ProtectedAuthRoute>
                <Signup />
              </ProtectedAuthRoute>
            }
          />
          <Route
            path="/signInDetails"
            element={
              <ProtectedAuthRoute>
                <SignInDetails />
              </ProtectedAuthRoute>
            }
          />
          <Route element={<ProtectedRoute />}>
            <Route path='/dashboard' element={<DashboardLayout />}>
              {
                routing.map((route, index) => (
                  <Route key={index} path={`/dashboard/${route.path}`}
                    // element={route.element} 
                    element={withVerificationWrapper(route.element, route.isKycRequired)}
                  />
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