const HomePoster = ({ pic, title }) => {
  return (
    <div className="home-poster">
      <img src={pic} alt="pic" />
      <h2>{title}</h2>
    </div>
  );
};

export default HomePoster;
