import { useContext } from "react";

import { AuthContext } from "src/store/authentication";
import AuthenticatedRoute from "src/components/Routes/authenticatedRoute";
import UnAuthenticatedRoute from "src/components/Routes/unAuthenticatedRoute";

function App() {
  const { user, userToken } = useContext(AuthContext);
  const { isAuthenticated } = user;

  return (
    <>{isAuthenticated ? <AuthenticatedRoute /> : <UnAuthenticatedRoute />}</>
  );
}

export default App;
