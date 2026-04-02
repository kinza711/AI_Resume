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
import AdminLogin from "./pages/AdminLogin";
import ResuemPage from "./pages/ResuemPage";
import ProtectedRoute from "./utils/protected";

const App = () => {
  return (
    <div className="main">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute allowedRoles={["user", "Admin"]}>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route
            path="/usermanag"
            element={
              <ProtectedRoute allowedRoles={["Admin"]}>
                <UserManagement />
              </ProtectedRoute>
            }
          />
          <Route
            path="/edituser/:id"
            element={
              <ProtectedRoute allowedRoles={["Admin"]}>
                <EditUser />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admindashboard"
            element={
              <ProtectedRoute allowedRoles={["Admin"]}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/404" element={<F404Page />} />
          <Route path="/working" element={<WorkingPage />} />
          <Route path="/airesume" element={<ResuemPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
