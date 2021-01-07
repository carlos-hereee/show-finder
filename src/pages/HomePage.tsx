import React, { useContext, useEffect, useState } from "react";
import shortid from "shortid";
import Show from "../components/Show";
import { ShowFinderContext } from "../utils/context/showFinder/ShowFinderState";

const HomePage: React.FC = () => {
  const { getAllShow, allShowFinder } = useContext(ShowFinderContext);
  const [page, setPage] = useState<number>(1);
  useEffect(() => {
    getAllShow(page);
  }, []);
  console.log("allShowFinder", allShowFinder);
  return (
    <div>
      <p>Page {page}</p>
      <button
        type="button"
        className="button"
        disabled={page - 1 === 0}
        onClick={() => setPage(page - 1)}
      >
        Prev
      </button>
      <button
        type="button"
        className="button"
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>
      {allShowFinder &&
        allShowFinder.map((data) => {
          return (
            <div key={shortid.generate()}>
              <p>{data.score}</p>
              <Show movie={data.show} />
            </div>
          );
        })}
    </div>
  );
};
export default HomePage;
