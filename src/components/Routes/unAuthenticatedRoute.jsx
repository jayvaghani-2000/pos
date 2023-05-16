import { Navigate, Route, Routes } from "react-router-dom";
import Home from "src/components/Home";

const UnAuthenticatedRoute = () => {
  return (
    <Routes>
      <Route path="/login" element={<Home />} />
      <Route path="/register" element={<Home />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default UnAuthenticatedRoute;