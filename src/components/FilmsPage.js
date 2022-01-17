import Film from "./Film";
import texts from "../assets/texts/filmsTexts.json";
import filmListPic from "../images/films-top-pic.png";

const FilmsPage = () => {
  return (
    <section className="films-page">
      <div className="films-top-pic">
        <img src={filmListPic} alt="chuckybook" />
      </div>
      {texts.map((el) => (
        <Film
          key={el.name}
          pic={el.pic}
          title={el.title}
          year={el.year}
          director={el.director}
          wiki={el.wiki}
          abandon={el.abandon}
          trailer={el.trailer}
        />
      ))}
    </section>
  );
};

export default FilmsPage;
