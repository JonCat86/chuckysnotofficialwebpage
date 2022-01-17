import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link className="navlink" to="/">
        Home
      </Link>
      <Link className="navlink" to="/characters">
        Characters
      </Link>
      <Link className="navlink" to="/films">
        Films
      </Link>
      <Link className="navlink" to="/victims">
        Victims
      </Link>
    </nav>
  );
};

export default Nav;
