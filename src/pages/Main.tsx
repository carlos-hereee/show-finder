import React, { useContext } from "react";
import parse from "html-react-parser";
import { ShowFinderContext } from "../utils/context/showFinder/ShowFinderState";
import SearchBar from "../components/SearchBar";
import { TvMaze } from "../data/tvmaze";

const Main: React.FC = () => {
  const { showFinder } = useContext(ShowFinderContext);
  console.log("showFinder", showFinder.length);
  return (
    <div className="main-container">
      <div className="main-wrapper">
        <SearchBar />
        <div className="movie-container">
          {showFinder.length > 1 &&
            showFinder.map((data: any) => (
              <div key={data.show.id} className="movie-card">
                <div className="movie-poster">
                  <img
                    src={data.show.image && data.show.image.medium}
                    alt={data.show.name}
                    className="movie-poster-img"
                  />
                </div>
                <div className="movie-content">
                  <div>
                    <h3>{data.show.name}</h3>
                    <p>{data.show.summary && parse(data.show.summary)}</p>
                    <button type="button" className="show-episodes-btn">
                      Show Episodes
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
