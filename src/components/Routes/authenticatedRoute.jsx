import { Navigate, Route, Routes } from "react-router-dom";
import Home from "src/components/Home";

const AuthenticatedRoute = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};

export default AuthenticatedRoute;
