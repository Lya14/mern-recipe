import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// IMPORT PAGES
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { RecoilRoot } from "recoil";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <RecoilRoot>
      <Router>
        <Routes>
          <Route exact path="/" element={user ? <Home /> : <Register />} />
          <Route
            path="/register"
            element={user ? <Navigate to="/" /> : <Register />}
          />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
        </Routes>
      </Router>
    </RecoilRoot>
  );
}

export default App;
