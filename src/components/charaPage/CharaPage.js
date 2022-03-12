import Chara from "../chara/Chara";
import texts from "../../assets/texts/charasTexts.json";
import "./charaPage.css";

const CharaPage = () => {
  return (
    <section className="chara-page">
      <div className="chara-top"></div>
      {texts.map((el) => (
        <Chara
          key={el.key}
          name={el.name}
          pic={el.pic}
          films={el.films}
          comment={el.text}
        />
      ))}
    </section>
  );
};

export default CharaPage;
