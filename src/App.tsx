import React from "react";
import Header from "./pages/Header";
import Main from "./pages/Main";
import Footer from "./pages/Footer";
import { ShowFinderState } from "./utils/context/showFinder/ShowFinderState";
import "./stylesheets/index.scss";

const App: React.FC = () => (
  <div className="app">
    <Header />
    <ShowFinderState>
      <Main />
    </ShowFinderState>
    <Footer />
  </div>
);

export default App;
