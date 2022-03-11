import "./film.css";
import FilmBtn from "../filmBtn/FilmBtn";
import YoutubeEmbed from "../filmTrailer/FilmTrailer";

const Film = ({ pic, title, year, abandon, wiki, trailer, director }) => {
  return (
    <div className="film">
      <img src={pic} alt="poster" />
      <div className="film-right">
        <div className="film-text">
          <h2>{title}</h2>
          <p>
            {year} - {director}
          </p>
        </div>
        <div className="film-btns">
          <FilmBtn text="Wikipedia" link={wiki} />
          <FilmBtn text="Abondomoviez" link={abandon} />
        </div>
        <YoutubeEmbed url={trailer} />
      </div>
    </div>
  );
};

export default Film;
