import React, { useContext } from "react";
import SearchBar from "../components/SearchBar";
import SearchPage from "./SearchPage";
import HomePage from "./HomePage";
import { ToogleShow } from "../utils/type/type";
import { ShowFinderContext } from "../utils/context/showFinder/ShowFinderState";

const Main: React.FC = () => {
  const { activePage } = useContext(ShowFinderContext);
  const showToggle: ToogleShow = {
    homepage: <HomePage />,
    searchpage: <SearchPage />,
  };
  return (
    <div className="show-finder">
      <h1>Discover your new next favorite show</h1>
      <SearchBar />
      <div className="show-finder__content">{showToggle[activePage]}</div>
    </div>
  );
};

export default Main;
