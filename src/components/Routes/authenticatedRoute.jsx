import { Navigate, Route, Routes } from "react-router-dom";
import Home from "src/components/Pages/Home";
import Header from "src/components/Header";
import Footer from "src/components/Footer";

const AuthenticatedRoute = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/browseTalent" element={<h3>Browse talent here</h3>} />
        <Route path="/pricing" element={<h3>Product Pricing</h3>} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default AuthenticatedRoute;
