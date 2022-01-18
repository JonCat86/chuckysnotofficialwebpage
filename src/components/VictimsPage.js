import texts from "../assets/texts/victimsTexts.json";
import Victim from "./Victim";
import Counter from "./Counter";
import VictimsMovieTitle from "./VictimsMovieTitle";

import banner1 from "../images/banner1.png";
import banner2 from "../images/banner2.png";
import banner3 from "../images/banner3.png";
import banner4 from "../images/banner4.png";
import banner5 from "../images/banner5.png";
import banner6 from "../images/banner6.png";
import banner7 from "../images/banner7.png";
import banner8 from "../images/banner8.png";

const VictimsPage = () => {
  const bg = (color) => ({
    background: `linear-gradient(-90deg, #${color} , #050505 60%`,
  });
  const bgr = (color) => ({
    background: `linear-gradient(-90deg, #050505 40%, #${color}`,
  });

  const handleAccordion = (e) => {
    e.target.nextSibling.classList.toggle("deployed");
    e.target.querySelector(".odd1").classList.toggle("icon-deployed-odd");
    e.target.querySelector(".odd2").classList.toggle("icon-deployed-odd");
    e.target.querySelector(".even1").classList.toggle("icon-deployed-even");
    e.target.querySelector(".even2").classList.toggle("icon-deployed-even");
  };
  return (
    <section className="victims-page">
      <Counter />
      <div className="victims">
        <VictimsMovieTitle
          title="Child's Play"
          victims="4"
          banner={banner1}
          accordion={handleAccordion}
        />
        <div className="victims-movie-container" style={bg("300")}>
          {texts.cp.map((el) => (
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
      <VictimsMovieTitle
        title="Child's Play 2"
        victims="7"
        banner={banner2}
        accordion={handleAccordion}
      />
      <div className="victims-movie-container" style={bgr("300")}>
        {" "}
        {texts.cp2.map((el) => (
          <Victim
            key={el.key}
            pic1={el.pic1}
            pic2={el.pic2}
            name={el.name}
            killer={el.killer}
            text={el.text}
            num={el.key}
          />
        ))}
      </div>
      <VictimsMovieTitle
        title="Child's Play 3"
        victims="?"
        banner={banner3}
        accordion={handleAccordion}
      />
      <div className="victims-movie-container" style={bg("300")}>
        {" "}
        {texts.cp3.map((el) => (
          <Victim
            key={el.key}
            pic1={el.pic1}
            pic2={el.pic2}
            name={el.name}
            killer={el.killer}
            text={el.text}
            num={el.key}
          />
        ))}
      </div>
      <VictimsMovieTitle
        title="Bride of Chucky"
        victims="?"
        banner={banner4}
        accordion={handleAccordion}
      />
      <div className="victims-movie-container" style={bgr("047")}>
        {" "}
        {texts.bride.map((el) => (
          <Victim
            key={el.key}
            pic1={el.pic1}
            pic2={el.pic2}
            name={el.name}
            killer={el.killer}
            text={el.text}
            num={el.key}
          />
        ))}
      </div>
      <VictimsMovieTitle
        title="Seed of Chucky"
        victims="?"
        banner={banner5}
        accordion={handleAccordion}
      />
      <div className="victims-movie-container" style={bg("047")}>
        {" "}
        {texts.seed.map((el) => (
          <Victim
            key={el.key}
            pic1={el.pic1}
            pic2={el.pic2}
            name={el.name}
            killer={el.killer}
            text={el.text}
            num={el.key}
          />
        ))}
      </div>
      <VictimsMovieTitle
        title="Curse of Chucky"
        victims="?"
        banner={banner6}
        accordion={handleAccordion}
      />
      <div className="victims-movie-container" style={bg("fff")}>
        {" "}
        {texts.curse.map((el) => (
          <Victim
            key={el.key}
            pic1={el.pic1}
            pic2={el.pic2}
            name={el.name}
            killer={el.killer}
            text={el.text}
            num={el.key}
          />
        ))}
      </div>
      <VictimsMovieTitle
        title="Cult of Chucky"
        victims="?"
        banner={banner7}
        accordion={handleAccordion}
      />
      <div className="victims-movie-container" style={bgr("fff")}>
        {" "}
        {texts.cult.map((el) => (
          <Victim
            key={el.key}
            pic1={el.pic1}
            pic2={el.pic2}
            name={el.name}
            killer={el.killer}
            text={el.text}
            num={el.key}
          />
        ))}
      </div>
      <VictimsMovieTitle
        title="Chucky (S1)"
        victims="?"
        banner={banner8}
        accordion={handleAccordion}
      />
      <div className="victims-movie-container" style={bg("fb0")}>
        {" "}
        {texts.series1.map((el) => (
          <Victim
            key={el.key}
            pic1={el.pic1}
            pic2={el.pic2}
            name={el.name}
            killer={el.killer}
            text={el.text}
            num={el.key}
          />
        ))}
      </div>
    </section>
  );
};

export default VictimsPage;
