import React from "react";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import {
  BookOpenCheck,
  CalendarCheck,
  CalendarDays,
  LayoutDashboard,
  LogOut,
  User,
  Users,
} from "lucide-react";
import profilePhoto from "../../assets/profile-photo.svg";

export default function ParentSidebar() {
  return (
    <div className="h-dvh w-66.25 bg-white border-r border-[#E2E8F0] flex flex-col justify-between ">
      <div className="top">
        <div className="logo flex py-4 pl-6 items-center gap-3 border-b border-[#E2E8F0]">
          <div
            className={`logo-container bg-[#3B82F6] w-8 h-8 rounded-lg shadow-[#3B82F6]  shadow flex justify-center items-center`}
          >
            <img src={logo} alt="logo-svg" className={`w-5 h-5`} />
          </div>
          <p className="text-[#1E293B] lg:text-lg font-bold text-[14px]">
            EduPulse
          </p>
        </div>
        <div className="links p-4">
          <ul className="flex flex-col gap-1.5">
            <li className="text-[14px] text-[#3B82F6] bg-[#3B82F6]/10 pl-4 py-3 rounded-xl border-l-4 border-[#3B82F6]">
              <Link to={"#"} className="flex items-center font-semibold gap-3 ">
                <LayoutDashboard className="w-3.75 h-3.7 " />
                Dashboard
              </Link>
            </li>
            <li className="text-[14px]  pl-4 py-3 rounded-xl text-[#64748B] active:bg-[#3B82F6]/10 active:text-[#3B82F6] active:border-l-4 active:border-[#3B82F6]">
              <Link to={"#"} className="flex items-center font-semibold gap-3 ">
                <User className="w-3.75 h-3.7 " />
                My Profile
              </Link>
            </li>
            <li className="text-[14px]  pl-4 py-3 rounded-xl text-[#64748B] active:bg-[#3B82F6]/10 active:text-[#3B82F6] active:border-l-4 active:border-[#3B82F6]">
              <Link to={"#"} className="flex items-center font-semibold gap-3 ">
                <Users className="w-3.75 h-3.7 " />
                My Children
              </Link>
            </li>
            <li className="text-[14px]  pl-4 py-3 rounded-xl text-[#64748B] active:bg-[#3B82F6]/10 active:text-[#3B82F6] active:border-l-4 active:border-[#3B82F6]">
              <Link to={"#"} className="flex items-center font-semibold gap-3 ">
                <CalendarDays className="w-3.75 h-3.7 " />
                Attendance
              </Link>
            </li>
            <li className="text-[14px]  pl-4 py-3 rounded-xl text-[#64748B] active:bg-[#3B82F6]/10 active:text-[#3B82F6] active:border-l-4 active:border-[#3B82F6]">
              <Link to={"#"} className="flex items-center font-semibold gap-3 ">
                <BookOpenCheck className="w-3.75 h-3.7 " />
                Grades
              </Link>
            </li>
            <li className="text-[14px]  pl-4 py-3 rounded-xl text-[#64748B] active:bg-[#3B82F6]/10 active:text-[#3B82F6] active:border-l-4 active:border-[#3B82F6] ">
              <Link to={"#"} className="flex items-center font-semibold gap-3 ">
                <CalendarCheck className="w-3.75 h-3.7 " />
                Schedule
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="bottom bg-[#F8FAFC] p-4 flex flex-col gap-3">
        <Link to={"#"}>
          <div className="profile flex gap-3">
            <div className="left">
              <img src={profilePhoto} alt="" />
            </div>
            <div className="righ">
              <h2 className="leading-5 font-bold text-[14px]">
                Dr. Sarah Jenkins
              </h2>
              <p className="text-[12px]">Senior Educator</p>
            </div>
          </div>
        </Link>

        <button className="text-[#EF4444] bg-[#FEF2F2] flex justify-center gap-2 py-3 rounded-lg shadow shadow-[#EF4444] cursor-pointer">
          <LogOut /> Sign Out
        </button>
      </div>
    </div>
  );
}
