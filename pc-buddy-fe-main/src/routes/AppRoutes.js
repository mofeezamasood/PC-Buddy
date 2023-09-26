import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Client/Home/Home";
import RoutePaths from "./types";
import SignUp from "../pages/Auth/SignUp/SignUp";
import SignIn from "../pages/Auth/SignIn/SignIn";
import GetBuild from "../pages/Client/Build/GetBuild/GetBuild";
import Profile from "../pages/Client/Profile/Profile";
import Reset from "../pages/Auth/Reset/Reset";
import ContactUs from "../pages/Client/ContactUs/ContactUs";
import AdminProfile from "../pages/Admin/AdminProfile/AdminProfile";
import AddComponent from "../pages/Admin/Components/AddComponent/AddComponent";
import CompareBuild from "../pages/Client/Build/CompareBuild/CompareBuild";
import Messages from "../pages/Admin/Messages/Messages";
import MessageChat from "../pages/Admin/Messages/MessageChat/MessageChat";
import EditComponent from "../pages/Admin/Components/EditComponent/EditComponent";
import DeleteComponent from "../pages/Admin/Components/DeleteComponent/DeleteComponent";
import GetBuilds from "../pages/Client/Build/GetBuild/GetBuilds";
import Lottie from "react-lottie-player";
import lottie from "../assets/json/error.json";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path={RoutePaths.home}>
          <Route index element={<Home />} />
          <Route path={RoutePaths.signin} element={<SignIn />} />
          <Route path={RoutePaths.signup} element={<SignUp />} />
          <Route path={RoutePaths.reset} element={<Reset />} />
          <Route path={RoutePaths.getBuild} element={<GetBuild />} />
          <Route path={RoutePaths.getBuild + "/:id"} element={<GetBuilds />} />
          <Route path={RoutePaths.compareBuild} element={<CompareBuild />} />
          <Route path={RoutePaths.profile} element={<Profile />} />
          <Route path={RoutePaths.contact} element={<ContactUs />} />
          <Route path={RoutePaths.admin} element={<AdminProfile />} />
          <Route path={RoutePaths.addComponent} element={<AddComponent />} />
          <Route path={RoutePaths.editComponent} element={<EditComponent />} />
          <Route
            path={RoutePaths.deleteComponent}
            element={<DeleteComponent />}
          />
          <Route path={RoutePaths.messages} element={<Messages />} />
          <Route path={RoutePaths.messageChat} element={<MessageChat />} />
        </Route>
        <Route
          path="*"
          element={
            <div className="h-screen flex justify-center max-w-3xl mx-auto relative">
              <p className="absolute top-10 md:top-4 uppercase tracking-widest font-bold text-xl md:text-5xl text-main border-4 border-black border-dashed p-3 rounded-2xl">Page not Found!</p>
              <Lottie animationData={lottie} play />
            </div>
          }
        />
      </Routes>
    </div>
  );
};

export default AppRoutes;
