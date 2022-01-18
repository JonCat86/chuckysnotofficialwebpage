import Victim from "./Victim";

const VictimsMovieTitle = ({
  title,
  victimsNumber,
  banner,
  accordion,
  victims,
  bgStyle,
}) => {
  const styleBanner = {
    backgroundImage: `url(${banner})`,
  };
  const bg = () => ({
    // background: `linear-gradient(-90deg, #${color} , #050505 60%`,
    // background: `linear-gradient(-90deg, #300 , #050505 60%)`,
    background: `${bgStyle}`,
  });
  // const bgr = (color) => ({
  //   background: `linear-gradient(-90deg, #050505 40%, #${color}`,
  //   background: `linear-gradient(-90deg, #050505 40%, #300)`,
  // });

  return (
    <div className="victims-movie">
      <div
        className="victims-movie-title"
        style={styleBanner}
        onClick={accordion}
      >
        <h2>{title}</h2>
        <p>
          victims: <b>{victimsNumber}</b>
        </p>
        <div className="victims-movie-tiltle-icon">
          <span className="odd1"></span>
          <span className="even1"></span>
          <span className="odd2"></span>
          <span className="even2"></span>
        </div>
      </div>
      <div className="victims-movie-container" style={bg()}>
        {victims.map((el) => (
          <Victim
            key={el.key}
            pic1={el.pic1}
            pic2={el.pic2}
            name={el.name}
            killer={el.killer}
            text={el.text}
            num={el.key}
            color={"822"}
          />
        ))}
      </div>
    </div>
  );
};

export default VictimsMovieTitle;
