import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./stylesheets/index.scss";

const App: React.FC = () => (
  <div className="App">
    <Header />
    <Main />
    <Footer />
  </div>
);

export default App;
