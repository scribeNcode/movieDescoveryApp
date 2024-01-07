import "../Landing/Landing.css";
import Navbar from "../../components/Header/Navbar/Navbar";
function Landing() {
  return (
    <div className="landing-page">
      <div className="landing-page-overlay"></div>
      <div className="nav">
        <Navbar />
      </div>
      <div className="landing-page-hero-sec">
        <h1>Endless access to movies, TV shows, and beyond.</h1>
        <p>
          Watch from any location. Terminate your subscription at any moment.
        </p>
        <div className="sign-up-div">
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
            <input type="text"  className="email-input"/>
            <button>Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
