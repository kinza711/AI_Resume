import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ProfilePage from "./pages/ProfilePage";
import DashboardPage from "./pages/DashboardPage";
import F404Page from "./pages/F404Page";
import WorkingPage from "./pages/WorkingPage";
import AdminDashboard from "./pages/AdminDashbaord";
import UserManagement from "./pages/UserManagement";
import EditUser from "./pages/EditUser";
import AdminLog from "./components/auth/AdminLog";
const App = () => {
  return (
    <div className="main">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminLog />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/usermanag" element={<UserManagement />} />
          <Route path="/edituser" element={<EditUser />} />

          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/404" element={<F404Page />} />
          <Route path="/working" element={<WorkingPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
