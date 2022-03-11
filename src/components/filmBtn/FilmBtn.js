import "./filmBtn.css";

const FilmBtn = ({ text, link }) => {
  return (
    <button className="film-btn">
      <a href={link} target="_blank" rel="noopener noreferrer">
        {text}
      </a>
    </button>
  );
};

export default FilmBtn;
