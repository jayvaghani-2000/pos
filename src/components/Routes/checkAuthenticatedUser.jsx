import React from "react";
import { useContext } from "react";
import { AuthContext } from "src/store/authentication";
import Cookies from "js-cookie";
import { useEffect } from "react";

const CheckAuthenticatedUser = () => {
  const {
    handleSetHadCheckAuth,
    handleSetUser,
    handleSetUserToken,
  } = useContext(AuthContext);

  const activeUser = () => {
    const token = Cookies.get("tokenCB");
    if (token) {
      handleSetUserToken(token);
      handleSetUser({
        isAuthenticated: true,
        user: {},
      });
    }
    handleSetHadCheckAuth(true);
  };

  useEffect(() => {
    activeUser()
  },[])

  return <></>;
};

export default CheckAuthenticatedUser;
