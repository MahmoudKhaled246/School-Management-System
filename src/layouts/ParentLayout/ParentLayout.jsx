import React from "react";
import ParentSidebar from "../../components/ParentComponents/ParentSidebar";
import { Outlet } from "react-router-dom";
import DashboardFooter from "../../components/common/DashboardFooter";

export default function ParentLayout() {
  return (
    <div className="w-full h-dvh overflow-auto flex ">
      <ParentSidebar />
      <div className="flex flex-col flex-1 min-w-0 ">
        <div className="flex-1 overflow-auto">
          <Outlet />
        </div>
        <DashboardFooter />
      </div>
    </div>
  );
}
