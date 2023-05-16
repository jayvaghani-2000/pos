import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [hadCheckAuth, setHadCheckAuth] = useState(false);
  const [user, setUser] = useState({
    isAuthenticated: false,
    user: {},
  });
  const [userToken, setUserToken] = useState("");

  const handleSetUser = (data) => {
    setUser(data);
  };

  const handleSetHadCheckAuth = (checked) => {
    setHadCheckAuth(checked);
  };

  const handleSetUserToken = (token) => {
    setUserToken(token);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        userToken,
        hadCheckAuth,
        handleSetUser,
        handleSetUserToken,
        handleSetHadCheckAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
