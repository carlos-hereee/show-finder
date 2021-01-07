import React, { useContext, useEffect, useState } from "react";
import shortid from "shortid";
import { ShowFinderContext } from "../utils/context/showFinder/ShowFinderState";
import SearchBar from "../components/SearchBar";
import Show from "../components/Show";
import HomePage from "./HomePage";
import { ToogleShow } from "../utils/type/type";

const Main: React.FC = () => {
  const {
    showFinder,
    // getAllShow,
    //  allShowFinder, activeShow
  } = useContext(ShowFinderContext);
  // const [page, setPage] = useState<string>("homepage");
  const showToggle: ToogleShow = {
    homepage: <HomePage />,
  };
  // useEffect(() => {
  //   getAllShow(1);
  // }, []);
  return (
    <div className="show-finder">
      <h1>Discover your new next favorite show</h1>
      <SearchBar />
      <div className="show-finder__content">
        {/* {showFinder &&
          showFinder.map((data) => (
            <div key={shortid.generate()}>
              <Show movie={data.show} />
            </div>
          ))} */}
        {showToggle.homepage}
      </div>
    </div>
  );
};

export default Main;
