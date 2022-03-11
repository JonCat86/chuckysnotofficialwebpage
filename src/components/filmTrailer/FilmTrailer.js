import "./filmTrailer.css";

const FilmTrailer = ({ url }) => (
  <iframe
    className="film-trailer"
    src={`https://www.youtube.com/embed/${url}`}
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    title="Embedded youtube"
  />
);

export default FilmTrailer;
