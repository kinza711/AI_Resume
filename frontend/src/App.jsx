import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ProfilePage from "./pages/ProfilePage";
import DashboardPage from "./pages/DashboardPage";
import F404Page from "./pages/F404Page";
import WorkingPage from "./pages/WorkingPage";

const App = () => {
  return (
    <div className="main">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/404" element={<F404Page />} />
          <Route path="/working" element={<WorkingPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
