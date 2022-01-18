import texts from "../assets/texts/victimsTexts.json";
import Counter from "./Counter";
import VictimsMovie from "./VictimsMovie";

const VictimsPage = () => {
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
        {texts.map((el) => (
          <VictimsMovie
            key={el.title}
            title={el.title}
            victimsNumber={el.victimsNumber}
            banner={el.banner}
            bgStyle={el.bgStyle}
            victims={el.victims}
            accordion={handleAccordion}
          />
        ))}
      </div>
    </section>
  );
};

export default VictimsPage;
