import { Route, Routes } from "react-router";
import "./App.css";
import Portfolio from "./components/Portfolio";
import Blog from "./components/blog/Blog";
import Photography from "./components/photography/Photography";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/blog" element={<Blog />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/" element={<Portfolio />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
