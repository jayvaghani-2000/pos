import { Route, Routes } from "react-router-dom";
import Home from "src/components/Home";

const AuthenticatedRoute = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default AuthenticatedRoute;
