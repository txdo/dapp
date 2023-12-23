import { Link } from "react-router-dom";
import { userStore } from "../state";

const JoinDapp = () => {
  const isLoggedIn = userStore((state) => state.isLoggedIn);

  return (
    <section className="join-dapp">
      <div>
        <p>
          Whether you’re looking for friendship, romance, or something more,
          Dapp can help you find it. Don’t waste time on other dating sites that
          don’t work — join Dapp today and find your perfect match in minutes!
        </p>
        {isLoggedIn ? (
          <Link to="/date">Date Now!</Link>
        ) : (
          <Link to="/register">Sign Up</Link>
        )}
      </div>
    </section>
  );
};

export default JoinDapp;
