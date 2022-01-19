import Chara from "./Chara";
import texts from "../assets/texts/charasTexts.json";

const CharaPage = () => {
  return (
    <section className="chara-page">
      <div className="chara-top"></div>
      {texts.map((el) => (
        <Chara name={el.name} pic={el.pic} films={el.films} comment={el.text} />
      ))}
    </section>
  );
};

export default CharaPage;
