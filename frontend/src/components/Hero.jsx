import { Link } from "react-router-dom";
import background from "../assets/background.jpg";
import { userStore } from "../state";

const Hero = () => {
  const isLoggedIn = userStore((state) => state.isLoggedIn);

  return (
    <section className="hero">
      <div className="grid-col-2">
        <div className="hero-text">
          <h1>Find Your Perfect Match Today</h1>
          {isLoggedIn ? (
            <Link to="/date">Date now!</Link>
          ) : (
            <Link to="/register">Sign Up</Link>
          )}
        </div>
        <div className="hero-img">
          <img
            src={background}
            alt="Background image of a couple in the park"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
