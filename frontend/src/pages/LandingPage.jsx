import FAQ from "../components/FAQ";
import Features from "../components/Features";
import Hero from "../components/Hero";
import JoinDapp from "../components/JoinDapp";

const LandingPage = () => {
  return (
    <section className="landing-page">
      <Hero />
      <FAQ />
      <Features />
      <JoinDapp />
    </section>
  );
};

export default LandingPage;
