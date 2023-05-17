import { Navigate, Route, Routes } from "react-router-dom";
import Home from "src/components/Pages/Home";
import Header from "src/components/Header";
import Footer from "src/components/Footer";
import styles from "./routes.module.scss";

const AuthenticatedRoute = () => {
  return (
    <div className={styles.authenticatedRoute}>
      <Header />
      <div className={styles.bodyWrapper}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route
            path="/browseTalent"
            element={
              <h3 className={styles.pageContentWrapper}>Browse talent here</h3>
            }
          />
          <Route
            path="/filteredCandidate"
            element={
              <h3 className={styles.pageContentWrapper}>
                List of filtered candidate
              </h3>
            }
          />
          <Route
            path="/postJob"
            element={<h3 className={styles.pageContentWrapper}>Post A Job</h3>}
          />
          <Route
            path="/applications"
            element={
              <h3 className={styles.pageContentWrapper}>
                List of Applications
              </h3>
            }
          />
          <Route
            path="/shortlisted"
            element={
              <h3 className={styles.pageContentWrapper}>
                List of shortlisted candidate
              </h3>
            }
          />
          <Route
            path="/favorites"
            element={
              <h3 className={styles.pageContentWrapper}>
                List of favorite candidate
              </h3>
            }
          />
          <Route
            path="/support"
            element={<h3 className={styles.pageContentWrapper}>Get Support</h3>}
          />
          <Route
            path="/interviews"
            element={
              <h3 className={styles.pageContentWrapper}>List of interviews</h3>
            }
          />
          <Route
            path="/pricing"
            element={
              <h3 className={styles.pageContentWrapper}>Product Pricing</h3>
            }
          />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default AuthenticatedRoute;
