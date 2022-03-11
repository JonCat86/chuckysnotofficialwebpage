import { Link } from "react-router-dom";
import HomePoster from "../homePoster/HomePoster";
import homeposter from "../../images/homeposter.png";
import charaposter from "../../images/charaposter2.png";
import filmsposter from "../../images/filmsposter2.png";
import victimsposter from "../../images/victimsposter.png";
import texts from "../../assets/texts/homeTexts.json";
import "./homePage.css";

const HomePage = () => {
  return (
    <section className="home-page">
      <div className="welcome">
        <img src={homeposter} alt="welcome" />
        <p>{texts.welcome}</p>
      </div>
      <div className="home-links">
        {/* <Link className="home-link" to="/">
          <HomePoster pic={homeposter} title="WELCOME" />
        </Link> */}
        <Link className="home-link" to="/characters">
          <HomePoster pic={charaposter} title="CHARACTERS" />
        </Link>
        <Link className="home-link" to="/films">
          <HomePoster pic={filmsposter} title="FILMS" />
        </Link>
        <Link className="home-link" to="/victims">
          <HomePoster pic={victimsposter} title="VICTIMS" />
        </Link>
      </div>
    </section>
  );
};

export default HomePage;
