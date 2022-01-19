import { Link } from "react-router-dom";
// import logo from "../images/logo.png";
import logo from "../images/logounderconstruction.png";
import riure from "../images/riure.png";

const TitleBar = () => {
  return (
    <div className="title-bar">
      <Link to="/">
        <img className="logo" src={logo} alt="logo" />
      </Link>
      <a
        className="bonus-link"
        href="https://www.youtube.com/watch?v=cQMzwiBJyY0"
        target="_blank"
        rel="noreferrer noopen"
      >
        <img className="riure" src={riure} alt="laugh" />
      </a>
    </div>
  );
};

export default TitleBar;
