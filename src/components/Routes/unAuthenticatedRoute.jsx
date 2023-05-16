import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthContext } from "src/store/authentication";
import CheckAuthenticatedUser from "src/components/Routes/checkAuthenticatedUser";
import Login from "src/components/Login";

const UnAuthenticatedRoute = () => {
  const { hadCheckAuth } = useContext(AuthContext);

  return (
    <Routes>
      {!hadCheckAuth ? (
        <Route path="*" element={<CheckAuthenticatedUser />} />
      ) : (
        <>
          <Route path="/login/*" element={<Login />} />
          <Route path="/register" element={<>Register</>} />
          <Route path="/forgot-password" element={<h2>Forgot Password?</h2>} />
          <Route path="*" element={<Navigate to="/login" />} />
        </>
      )}
    </Routes>
  );
};

export default UnAuthenticatedRoute;
