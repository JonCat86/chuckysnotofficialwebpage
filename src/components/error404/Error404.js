import "./error404.css";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <section className="error404">
      <h1>ERROR 404</h1>
      <h2>Page not found</h2>
      <button>
        <Link className="hp-link" to="/">
          Take me back to the homepage
        </Link>
      </button>
    </section>
  );
};

export default Error404;
