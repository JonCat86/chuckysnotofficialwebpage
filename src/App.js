import { Route, Routes, HashRouter } from "react-router-dom";

import CharaPage from "./components/charaPage/CharaPage";
import FilmsPage from "./components/filmsPage/FilmsPage";
import HomePage from "./components/homePage/HomePage";
import VictimsPage from "./components/victimsPage/VictimsPage";
import Error404 from "./components/error404/Error404";
import Nav from "./components/nav/Nav";
import TitleBar from "./components/titleBar/TitleBar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <HashRouter>
      <TitleBar />
      <Nav />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/characters" exact element={<CharaPage />} />
        <Route path="/films" exact element={<FilmsPage />} />
        <Route path="/victims" exact element={<VictimsPage />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
