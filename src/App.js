import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import CharaPage from "./components/CharaPage";
import FilmsPage from "./components/FilmsPage";
import HomePage from "./components/HomePage";
import VictimsPage from "./components/VictimsPage";
import Error404 from "./components/Error404";
import Nav from "./components/Nav";
import TitleBar from "./components/TitleBar";
import { useEffect } from "react";
import Footer from "./components/Footer";

function App() {
  //   useEffect(() => {
  //     const fetchData = () => {
  //       const data = fetch(texts);
  //       const textsData = data.json;
  //       return textsData;
  //     };
  //     fetchData();
  //   }, []);

  return (
    <Router>
      <TitleBar />
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/characters" exact element={<CharaPage />} />
        <Route path="/films" exact element={<FilmsPage />} />
        <Route path="/victims" exact element={<VictimsPage />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
