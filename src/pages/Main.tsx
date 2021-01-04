import React, { useContext } from "react";
import { ShowFinderContext } from "../utils/context/showFinder/ShowFinderState";
import SearchBar from "../components/SearchBar";
import Show from "../components/Show";

const Main: React.FC = () => {
  const { showFinder } = useContext(ShowFinderContext);
  return (
    <div className="main-container">
      <div className="main-wrapper">
        <SearchBar />
        <div className="movie-container">
          {showFinder.map((data) => (
            <div key={data.show.id}>
              <Show movie={data.show} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
