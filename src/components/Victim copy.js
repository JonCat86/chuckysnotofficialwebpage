import flipIcon from "../images/flip-icon.jpg";

const Victim = ({ pic1, pic2, name, killer, text, num }) => {
  const handleClick = (e) => {
    const victim = e.target;
    const trans = getComputedStyle(victim);
    if (trans.transform === "matrix(1, 0, 0, 1, 0, 0)") {
      victim.style.transform = "rotateY(180deg)";
      victim.parentNode.style.borderRadius = "25px 0 25px 0";
    } else {
      victim.style.transform = "rotateY(0deg)";
      victim.classList.remove("victim-active");
      victim.parentNode.style.borderRadius = "0 25px 0 25px";
    }
  };
  return (
    <div className="victim">
      <div className="victim-card" onClick={handleClick}>
        <div className="victim-front">
          <div className="victim-front-top">
            <h4>
              #<span>{num}</span>
            </h4>
            <img src={flipIcon} alt="flip" />
          </div>
          <div className="victim-front-text">
            <h2>{name}</h2>
          </div>
          <div className="victim-pic">
            <img className="pic" src={pic1} alt="face" />
          </div>
        </div>
        <div className="victim-back">
          <div className="victim-back-text">
            <h2>{name}</h2>
            <h4>killed by: {killer}</h4>
            <hr />
            <p className="victim-text">"{text}"</p>
          </div>
          <div className="victim-pic">
            <img className="pic" src={pic2} alt="death" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Victim;
