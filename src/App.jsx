import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Auth/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import ParentLayout from "./layouts/ParentLayout/ParentLayout";
import { Toaster } from "react-hot-toast";
import ParentDashboard from "./pages/ParentPages/ParentDashboard";
import ChildrenPage from "./pages/ParentPages/ChildrenPage";
import TeacherDashboard from "./pages/TeacherPages/TeacherDashboard";
import StudentLayout from "./layouts/StudentLayout/StudentLayout";
import StudentDashboard from "./pages/StudentPages/StudentDashboard";
import TeacherLayout from "./layouts/TeacherLayout/TeacherLayout";

export default function App() {
  return (
    <div className="w-full  overflow-auto " data-theme="light">
      <Toaster />
      <BrowserRouter>
        <Routes>
          {/* Login Path */}
          <Route path="/">
            <Route index element={<LoginPage />} />
            <Route path="login" element={<LoginPage />} />
          </Route>

          {/* Teacher Path */}
          <Route path="/teacher" element={<TeacherLayout />}>
            <Route index element={<TeacherDashboard />} />
          </Route>

          {/* Parent Path */}
          <Route path="/parent" element={<ParentLayout />}>
            <Route index element={<ParentDashboard />} />
            <Route path="children" element={<ChildrenPage />} />
          </Route>

          {/* Student Path */}
          <Route path="/student" element={<StudentLayout />}>
            <Route index element={<StudentDashboard />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
