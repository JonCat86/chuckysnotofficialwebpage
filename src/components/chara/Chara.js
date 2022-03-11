import "./chara.css";

const Chara = ({ name, pic, films, comment }) => {
  return (
    <div className="chara">
      <img src={pic} alt="pic" />
      <div className="chara-text">
        <p className="chara-name">{name}</p>
        <p className="chara-films">
          Films: <b>{films}</b>
        </p>
        <hr />
        <p className="chara-comment">{`"${comment}"`}</p>
        <hr />
        <h3>. .</h3>
      </div>
    </div>
  );
};

export default Chara;
