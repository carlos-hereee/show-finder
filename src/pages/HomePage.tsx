import React, { useContext, useEffect, useState } from "react";
import shortid from "shortid";
import ReactPaginate from "react-paginate";
import Show from "../components/Show";
import { ShowFinderContext } from "../utils/context/showFinder/ShowFinderState";
import allShowFinder from "../data/api.json";

const HomePage: React.FC = () => {
  // const { getAllShow, allShowFinder } = useContext(ShowFinderContext);
  const [currentPage, setCurrentPage] = useState<number>(0);
  // useEffect(() => {
  //   getAllShow(page);
  // }, []);
  const perPage = 10;
  const offset = currentPage * perPage;
  const currentPageData = allShowFinder
    .slice(offset, offset + perPage)
    .map((data) => (
      <div key={shortid.generate()}>
        <p>page 1</p>
        <Show movie={data} />
      </div>
    ));
  const pageCount = Math.ceil(allShowFinder.length / perPage);
  const handlePageClick = (page: { selected: number }) => {
    setCurrentPage(page.selected);
  };
  return (
    <ReactPaginate
      previousLabel="<- Previous"
      nextLabel="Next ->"
      pageCount={pageCount}
      pageRangeDisplayed={3}
      marginPagesDisplayed={2}
      onPageChange={handlePageClick}
      containerClassName="pagination"
      previousLinkClassName="pagination__link"
      nextLinkClassName="pagination__link"
      disabledClassName="pagination__link--disabled"
      activeClassName="pagination__link--active"
    >
      {currentPageData}
    </ReactPaginate>
  );
};
export default HomePage;
