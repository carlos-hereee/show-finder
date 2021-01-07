import React, { useContext } from "react";
import shortid from "shortid";
import Show from "../components/Show";
import { ShowFinderContext } from "../utils/context/showFinder/ShowFinderState";

const SearchPage: React.FC = () => {
  const { showFinder } = useContext(ShowFinderContext);
  return (
    <div>
      {showFinder &&
        showFinder.map((data) => (
          <div key={shortid.generate()}>
            <Show movie={data.show} />
          </div>
        ))}
    </div>
  );
};
export default SearchPage;
