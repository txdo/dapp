import { Routes, Route } from "react-router-dom";
import "./styles/main.scss";
import useApp from "./hooks/useApp";
import LandingPage from "./pages/LandingPage";
import Layout from "./components/Layout";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import AuthGuard from "./guards/AuthGuard";

const App = () => {
  useApp();

  return (
    <div className="box">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route element={<Layout />}>
          <Route
            element={<AuthGuard condition={true} navigateTo="/register" />}
          >
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route element={<AuthGuard condition={false} navigateTo="/" />}>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
