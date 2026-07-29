import React from "react";
import logo from "../../assets/logo.svg";
import ball from "../../assets/badge-ball.svg";
import topRight from "../../assets/top-right-circle.svg";
import bottomLeft from "../../assets/bottom-left-circle.svg";
import loginPhoto from "../../assets/login-photo.svg";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Lock, Mail } from "lucide-react";
import * as Yup from "yup";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { domain } from "../../store";
// import LogoComponent from "../../components/common/LogoComponent";

export default function LoginPage() {
  const navigate = useNavigate();

  const initialValues = { email: "", password: "" };

  const loginSchema = Yup.object({
    email: Yup.string()
      .required("Please Enter your Email")
      .email("Email must be something like this (you@school.edu)"),
    password: Yup.string().required("Please Enter your Password"),
  });

  const handleLogin = async (values) => {
    const data = { identifier: values.email, password: values.password };
    const endpoint = "/auth/local";
    const url = domain + endpoint;

    await axios
      .post(url, data)
      .then((res) => {
        const jwt = res.data.jwt;
        localStorage.setItem("token", jwt);
        const userId = res.data.user.id;

        axios
          .get(`${domain}/users/${userId}?populate=*`)
          .then((res) => {
            const role = res.data.mkm_user_role?.Role;

            if (role == "Teacher") {
              toast.success("Login successful");
              navigate("/teacher");
            } else if (role == "Parent") {
              toast.success("Login successful");
              navigate("/parent");
            } else if (role == "Student") {
              toast.success("Login successful");
              navigate("/student");
            } else {
              toast.error(
                "Your account isn't set up yet. Please contact support.",
              );
            }
          })
          .catch((err) => {
            toast.error(
              "Couldn't load your account details. Please try again.",
            );
          });
      })
      .catch((err) => {
        toast.error("Incorrect email or password.");
      });
  };
  return (
    <div className="w-full h-dvh flex">
      <div className="left w-full flex justify-center lg:w-[50%] lg:bg-white bg-[#F8FAFC] py-16 ">
        <div className="container lg:w-md w-85.5 flex flex-col justify-between items-center   ">
          <div className="top w-full flex flex-col gap-4 lg:flex-row justify-between items-center ">
            <div className="logo flex items-center gap-3">
              <div
                className={`logo-container bg-[#3B82F6] shadow-[#3B82F6] shadow lg:w-10 lg:h-10 w-9 h-9 rounded-xl flex justify-center items-center`}
              >
                <img src={logo} alt="logo-svg" className={`w-6 h-6`} />
              </div>
              <p className="text-[#1E293B] text-lg font-bold lg:text-xl">
                EduPulse
              </p>
            </div>
            <div className=" bg-[#ECFDF5] border px-4  h-6.5 border-[#A7F3D0]  rounded-3xl flex gap-2 items-center">
              <img src={ball} alt="" className="lg:w-2 lg:h-2 w-1.5 h-1.5" />
              <p className="text-[#065F46] font-bold text-[10px] lg:text-xs leading-4">
                Portal active
              </p>
            </div>
          </div>
          <div className="mid flex flex-col bg-white p-5 border border-[#E2E8F0] rounded-2xl">
            <Formik
              onSubmit={handleLogin}
              initialValues={initialValues}
              validationSchema={loginSchema}
            >
              <Form className="flex flex-col lg:gap-8 gap-4 ">
                <div className="welcome flex flex-col gap-2 items-center ">
                  <h1 className="font-extrabold lg:text-3xl text-xl leading-9 text-[#1E293B]">
                    Welcome back
                  </h1>
                  <p className="text-[16px] text-[#64748B] hidden lg:flex text-center">
                    Access your school dashboard, classes, and administrative
                    tools.
                  </p>
                  <p className="text-center text-[12px] lg:hidden flex text-[#64748B]">
                    Access your school dashboard and classes
                  </p>
                </div>
                <div className="fields flex flex-col lg:gap-6  gap-4">
                  <div className="flex flex-col gap-2 ">
                    <label className="font-semibold lg:text-[14px] text-[12px] text-[#334155]">
                      Email address
                    </label>
                    <div className="input-container relative w-full">
                      <Field
                        type="email"
                        name="email"
                        placeholder="you@school.edu"
                        className=" w-full text-[#1E293B]  border bg-[#F8FAFC] placeholder-[#94A3B8] border-[#E2E8F0] lg:py-3.75 py-2  lg:rounded-xl rounded-lg outline-0 pl-11.25"
                      />
                      <Mail className="text-[#94A3B8] absolute top-1/2 -translate-y-1/2 left-3 w-5 h-5 lg:w-6 lg:h-6" />
                    </div>

                    <ErrorMessage
                      name="email"
                      className="text-red-500 text-xs"
                      component={"p"}
                    />
                  </div>

                  <div className="flex flex-col gap-2 ">
                    <label className="font-semibold lg:text-[14px] text-[12px] text-[#334155]">
                      Password
                    </label>
                    <div className="input-container relative w-full">
                      <Field
                        type="password"
                        name="password"
                        placeholder="••••••••"
                        className=" w-full text-[#1E293B]  border bg-[#F8FAFC] placeholder-[#94A3B8] border-[#E2E8F0] lg:py-3.75 py-2  lg:rounded-xl rounded-lg outline-0 pl-11.25"
                      />
                      <Lock className="text-[#94A3B8] absolute top-1/2 -translate-y-1/2 left-3 w-5 h-5 lg:w-6 lg:h-6" />
                    </div>

                    <ErrorMessage
                      name="password"
                      className="text-red-500 text-xs"
                      component={"p"}
                    />
                  </div>

                  <div className="flex gap-2.5 items-center">
                    <Field
                      type="checkbox"
                      name="remember"
                      className="lg:w-5 lg:h-5 w-4 h-4"
                    />
                    <label
                      htmlFor="remember"
                      className="text-[#475569] lg:text-[14px] text-[12px] "
                    >
                      Remember Me
                    </label>
                  </div>
                  <div>
                    <button
                      type="submit "
                      className="bg-[#3B82F6] rounded-xl text-white w-full py-3 cursor-pointer active:bg-[#1f53a7]"
                    >
                      Sign in
                    </button>
                  </div>
                </div>
              </Form>
            </Formik>
          </div>
          <div className="bottom pt-6 flex flex-col lg:flex-row gap-2 lg:gap-10.25 text-[#94A3B8]  lg:text-[12px] text-[10px] items-center">
            <p>© 2026 EduPulse Inc. All rights reserved.</p>
            <div className="policy flex gap-3 lg:gap-4">
              <a href="#" className="hover:underline">
                Support Desk
              </a>
              <p className="lg:hidden text-[#E2E8F0] ">•</p>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="right hidden  lg:w-[50%] bg-[#EEF2FF] relative lg:flex flex-col justify-between p-12">
        <img src={topRight} alt="" className="absolute top-0 right-0 " />
        <img src={bottomLeft} alt="" className="absolute bottom-0 left-0  " />

        <div className="top flex justify-start z-10">
          <div className="box flex bg-white gap-3 rounded-2xl px-4 py-2.5 items-center">
            <div className="flex justify-center items-center bg-[#10B981] text-white py-2 px-1 rounded-lg font-bold text-[12px] ">
              99%
            </div>
            <div className="texts">
              <h3 className="text-[#1E293B] font-bold text-[12px] leading-4">
                Active Engagement
              </h3>
              <p className="text-[#64748B] text-[10px]">
                Across 1,200+ partner schools
              </p>
            </div>
          </div>
        </div>
        <div className="mid w-full flex justify-center z-20 ">
          <div className="container w-lg bg-white rounded-2xl p-8.25 flex flex-col gap-6">
            <img src={loginPhoto} alt="loginPhoto" />
            <div className="qoute  flex flex-col gap-4">
              <p className="font-medium text-lg leading-7.25 text-[#1E293B]">
                “EduPulse has completely transformed how our teachers, students,
                and parents connect. It's clean, lightning-fast, and incredibly
                reliable.”
              </p>
              <div className="author flex items-center   gap-3">
                <div className="circle rounded-full w-10 h-10 flex justify-center items-center text-[14px] font-bold bg-[#F59E0B] text-white">
                  SJ
                </div>
                <div className="author-details">
                  <h4 className="leading-5  text-[14px] font-bold text-[#1E293B]">
                    Dr. Sarah Jenkins
                  </h4>

                  <p className="text-[12px] text-[#64748B] ">
                    Principal, Oakridge High School
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom flex justify-between z-20 text-[#6366F1] font-bold text-xs">
          <p>EDUPULSE ENTERPRISE SUITE</p>
          <p>V4.12.0</p>
        </div>
      </div>
    </div>
  );
}
