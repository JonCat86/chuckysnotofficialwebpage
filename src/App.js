import {
  BrowserRouter as Router,
  Route,
  Routes,
  HashRouter,
} from "react-router-dom";

import CharaPage from "./components/CharaPage";
import FilmsPage from "./components/FilmsPage";
import HomePage from "./components/HomePage";
import VictimsPage from "./components/VictimsPage";
import Error404 from "./components/Error404";
import Nav from "./components/Nav";
import TitleBar from "./components/TitleBar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <TitleBar />
      <Nav />
      <Routes>
        <HashRouter basename="/" element={<HomePage />} />
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
