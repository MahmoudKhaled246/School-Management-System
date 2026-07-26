import React from "react";

export default function DashboardFooter() {
  return (
    <div className="h-14 border-t border-gray-200 flex items-center justify-between px-6 text-sm text-gray-500 bg-white">
      <span>© 2026 EduPulse Inc. Admin Portal v4.12.0</span>
      <div className="flex gap-6">
        <a href="#" className="hover:text-gray-700">
          Support Desk
        </a>
        <a href="#" className="hover:text-gray-700">
          Security Policy
        </a>
      </div>
    </div>
  );
}
