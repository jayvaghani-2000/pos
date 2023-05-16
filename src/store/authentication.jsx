import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState({
    isAuthenticated: false,
    user: {},
  });
  const [userToken, setUserToken] = useState("");

  const handleSetUser = (data) => {
    setUser(data);
  };

  const handleSetUserToken = (token) => {
    setUserToken(token);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        userToken,
        handleSetUser,
        handleSetUserToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
