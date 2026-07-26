import React from "react";
import StudentSidebar from "../../components/StudentComponents/StudentSidebar";
import { Outlet } from "react-router-dom";
import DashboardFooter from "../../components/common/DashboardFooter";

export default function StudentLayout() {
  return (
    <div className="w-full h-dvh overflow-auto flex">
      <StudentSidebar />
      <div className="flex flex-col flex-1 min-w-0 ">
        <div className="flex-1 overflow-auto">
          <Outlet />
        </div>
        <DashboardFooter />
      </div>
    </div>
  );
}
