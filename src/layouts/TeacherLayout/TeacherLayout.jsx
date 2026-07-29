import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import DashboardFooter from "../../components/common/DashboardFooter";
import axios from "axios";
import { domain } from "../../store";
import toast from "react-hot-toast";
import TeacherSidebar from "../../components/TeacherComponents/TeacherSidebar";

export default function TeacherLayout() {
  const navigate = useNavigate();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      let endpoint = "/users/me";
      let url = domain + endpoint;
      axios
        .get(url, { headers: { Authorization: `Bearer ${token}` } })
        .then((res) => {
          axios
            .get(`${domain}/users/${res.data.id}?populate=*`)
            .then((res) => {
              if (res.data.mkm_user_role?.Role !== "Teacher") {
                toast.error("This account doesn't have teacher access.");
                navigate("/login");
              } else {
                setIsChecking(false);
              }
            })
            .catch((err) => {
              toast.error(
                "Couldn't load your account details. Please try again.",
              );
              navigate("/login");
            });
        })
        .catch((err) => {
          toast.error("Your session has expired. Please log in again.");
          navigate("/login");
        });
    } else {
      toast.error("Please log in to continue.");
      navigate("/login");
    }
  }, []);

  return isChecking ? (
    <div className="w-full h-dvh flex justify-center items-center">
      <span className="loading loading-spinner loading-lg text-primary"></span>
    </div>
  ) : (
    <div className="w-full h-dvh overflow-auto flex ">
      <TeacherSidebar />
      <div className="flex flex-col flex-1 min-w-0 ">
        <div className="flex-1 overflow-auto">
          <Outlet />
        </div>
        <DashboardFooter />
      </div>
    </div>
  );
}
