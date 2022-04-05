import React from "react";
import { useSelector } from "react-redux";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { EditProfileScreen } from "../screens/EditProfileScreen";
import Home from "../screens/Home";
// import { PrivateRoutes } from "./PrivateRoutes";

//import { DashboardRouter } from "./DashboardRouter";
//import { PrivateRoutes } from "./PrivateRoutes";
//import { PublicRoutes } from "./PublicRoutes";

const PrivateRoutes = ({ children }) => {
  const { isAutho } = useSelector((state) => state.auth);

  if (!isAutho) {
    alert("You are not logged in");
    return <Navigate to="/" />;
  }
  return children;
};

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/myprofile"
          element={
            <PrivateRoutes>
              <EditProfileScreen />
            </PrivateRoutes>
          }
        />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
