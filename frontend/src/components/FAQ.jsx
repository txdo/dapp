import caret from "../assets/caret-right.svg";

const FAQ = () => {
  return (
    <section className="faq">
      <div className="grid-col-2">
        <div className="questions">
          <ul>
            <li>Are you looking for love, but don’t know where to start?</li>
            <li>
              Do you want to meet someone who shares your interests, values, and
              goals?
            </li>
            <li>
              Do you wish you could find your soul mate in minutes, not months
              or years?
            </li>
          </ul>
        </div>
        <div className="answer">
          If you answered yes to any of these questions, then you need to try
          Dapp, the ultimate dating website for singles like you. Dapp is more
          than just a dating site — it’s a matchmaking service that uses a smart
          algorithm to find you compatible matches based on your personality,
          preferences, and lifestyle.
        </div>
        <div className="caret">
          <img src={caret} alt="" />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
