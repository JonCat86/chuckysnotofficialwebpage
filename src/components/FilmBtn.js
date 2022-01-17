const FilmBtn = ({ text, link }) => {
  return (
    <button>
      <a href={link} target="_blank" rel="noopener noreferrer">
        {text}
      </a>
    </button>
  );
};

export default FilmBtn;
