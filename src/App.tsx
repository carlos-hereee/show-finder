import React from "react";
import Header from "./pages/Header";
import Main from "./pages/Main";
import Footer from "./pages/Footer";
import "./stylesheets/index.scss";

const App: React.FC = () => (
  <div className="App">
    <Header />
    <Main />
    <Footer />
  </div>
);

export default App;
