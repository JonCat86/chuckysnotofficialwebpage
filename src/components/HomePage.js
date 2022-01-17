import HomePoster from "./HomePoster";
import { Link } from "react-router-dom";
import charaposter from "../images/charaposter.png";
import victimsposter from "../images/victimsposter.png";
import filmsposter from "../images/filmsposter.png";
import homeposter from "../images/homeposter.png";

const HomePage = () => {
  return (
    <section className="home-page">
      <div className="home-links">
        <Link className="home-link" to="/">
          <HomePoster pic={homeposter} title="WELCOME" />
        </Link>
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
