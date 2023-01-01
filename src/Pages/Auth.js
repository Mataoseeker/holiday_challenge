import React from "react";
import { useUserContext } from "../Context/UserContext";
// import DashBoard from "./DashBoard";

const Auth = () => {
  const { user } = useUserContext();
  return <>{user.isGuestUser ? "" : ""}</>;
};

export default Auth;