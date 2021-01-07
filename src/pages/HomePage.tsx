import React, { useContext, useEffect, useState } from "react";
import { ShowFinderContext } from "../utils/context/showFinder/ShowFinderState";

const HomePage: React.FC = () => {
  const { getAllShow } = useContext(ShowFinderContext);
  const [page, setPage] = useState<number>(1);
  // useEffect(()=>{
  //   getAllShow(1)
  // }, [])
  console.log("page", page);
  return (
    <div>
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
    </div>
  );
};
export default HomePage;
