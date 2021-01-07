import React from "react";
import SearchBar from "../components/SearchBar";
import SearchPage from "./SearchPage";
import HomePage from "./HomePage";
import { ToogleShow } from "../utils/type/type";

const Main: React.FC = () => {
  const showToggle: ToogleShow = {
    homepage: <HomePage />,
    searchpage: <SearchPage />,
  };
  return (
    <div className="show-finder">
      <h1>Discover your new next favorite show</h1>
      <SearchBar />
      <div className="show-finder__content">{showToggle.homepage}</div>
    </div>
  );
};

export default Main;
