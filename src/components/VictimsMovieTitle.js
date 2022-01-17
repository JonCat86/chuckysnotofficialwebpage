const VictimsMovieTitle = ({ title, victims, banner, accordion }) => {
  const styleBanner = {
    backgroundImage: `url(${banner})`,
  };
  return (
    <div
      className="victims-movie-title"
      style={styleBanner}
      onClick={accordion}
    >
      <h2>{title}</h2>
      <p>
        victims: <b>{victims}</b>
      </p>
      <div className="victims-movie-tiltle-icon">
        <span className="odd1"></span>
        <span className="even1"></span>
        <span className="odd2"></span>
        <span className="even2"></span>
      </div>
    </div>
  );
};

export default VictimsMovieTitle;
