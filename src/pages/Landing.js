import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components/index.js";
import {Link} from "react-router-dom";

const Landing = () => {
  return (
      <Wrapper>
        <nav>
          <Logo />
        </nav>
          <div className="container page">
            <div className="info">
              <h1>job <span>tracking</span> app</h1>
              <p>
              I'm baby schlitz hella mustache brunch banjo prism. Flexitarian yuccie vice iPhone. Mustache jean shorts glossier prism locavore +1 raw denim, mixtape yes plz bitters. Single-origin coffee cred DIY, XOXO squid before they sold out mumblecore aesthetic. Microdosing taxidermy occupy you probably haven't heard of them readymade normcore. Vexillologist ugh asymmetrical, single-origin coffee vaporware la croix sartorial leggings VHS bitters praxis.
              </p>
              <Link to="/register">
              <button className="btn btn-hero">
                Login/Register
              </button>
              </Link>
            </div>
            <img src={main} alt="job hunt" className="img main-img" />
          </div>
      </Wrapper>
   
  )
}

export default Landing