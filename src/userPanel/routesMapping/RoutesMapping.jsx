import { lazy } from "react";

// import EditTransaction from "../pages/transaction/EditTransaction";
const TransactionList = lazy(() => import("../pages/transaction/TransactionList"));
const EditUser = lazy(() => import("../pages/userManagement/editUser/EditUser"));
const Dashboard = lazy(() => import("../pages/dashboard/Dashboard"));
const UserList = lazy(() => import("../pages/userManagement/UserList"));
const MyTickets = lazy(() => import("../pages/helpDesk/myTickets/MyTickets"));
const ShowTicket = lazy(() => import("../pages/helpDesk/showTicket/ShowTicket"));
const AddBanner = lazy(() => import("../pages/contentManagement/banner/addBanner/AddBanner"));
const BannerList = lazy(() => import("../pages/contentManagement/banner/bannerList/BannerList"));
const BumperOfferUserList = lazy(() => import("../pages/userManagement/BumperOfferUserList"));
const UploadUserDocument = lazy(() => import("../pages/userManagement/uploadUserDocument/UploadUserDocument"));
const PendingTransactionList = lazy(() => import("../pages/transaction/pendingTransaction/PendingTransactionList"));
const DocumentList = lazy(() => import("../pages/userManagement/documentList/DocumentList"));


export const routing = [
    { path: "", element: <Dashboard /> },
    { path: "userManagement/userList", element: <UserList /> },
    { path: "userManagement/editUser/:id", element: <EditUser /> },
    { path: "transaction/transactionList", element: <TransactionList /> },
    { path: "transaction/pendingTransactionList", element: <PendingTransactionList /> },
    { path: "support/myTickets", element: <MyTickets /> },
    { path: "support/showTicket", element: <ShowTicket /> },
    { path: "contentManagement/banner/addBanner", element: <AddBanner /> },
    { path: "contentManagement/banner/bannerList", element: <BannerList /> },
    { path: "userManagement/bumperOfferUserList", element: <BumperOfferUserList /> },
    { path: "userManagement/documentList", element: <DocumentList /> },
    // { path: "userManagement/uploadUserDocumnets", element: <UploadUserDocument /> },
]