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
        <Route
          path="/filteredCandidate"
          element={<h3>List of filtered candidate</h3>}
        />
        <Route path="/postJob" element={<h3>Post A Job</h3>} />
        <Route path="/applications" element={<h3>List of Applications</h3>} />
        <Route
          path="/shortlisted"
          element={<h3>List of shortlisted candidate</h3>}
        />
        <Route
          path="/favorites"
          element={<h3>List of favorite candidate</h3>}
        />
        <Route path="/support" element={<h3>Get Support</h3>} />
        <Route path="/interviews" element={<h3>List of interviews</h3>} />
        <Route path="/pricing" element={<h3>Product Pricing</h3>} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default AuthenticatedRoute;
