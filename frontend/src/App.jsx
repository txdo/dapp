import { Routes, Route } from "react-router-dom";
import "./styles/main.scss";
import useApp from "./hooks/useApp";
import LandingPage from "./pages/LandingPage";
import Layout from "./components/Layout";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import IsNotAuthenticated from "./guards/isNotAuthenticated";
import IsAuthenticated from "./guards/isAuthenticated";
import Login from "./pages/Login";

const App = () => {
  useApp();

  return (
    <div className="box">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route element={<Layout />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
