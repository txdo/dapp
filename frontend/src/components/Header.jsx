import { Link, NavLink } from "react-router-dom";
import useHeader from "../hooks/useHeader";
import { userStore } from "../state";

const Header = () => {
  const isLoggedIn = userStore((state) => state.isLoggedIn);
  const logout = useHeader();

  return (
    <header>
      <Link to="/" className="brand-link">
        <h1>Dapp</h1>
      </Link>
      <nav>
        {isLoggedIn ? (
          <>
            <NavLink to="/profile" className="nav-link">
              Profile
            </NavLink>
            <NavLink to="/chats" className="nav-link">
              Chats
            </NavLink>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <NavLink to="/login" className="nav-link">
              Login
            </NavLink>
            <NavLink to="/register" className="nav-link">
              Register
            </NavLink>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
