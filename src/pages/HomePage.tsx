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
    .map((data) => {
      console.log("data", data);
      return (
        <div key={data.id}>
          {data.id}
          {/* <Show movie={data} /> */}
        </div>
      );
    });
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
      breakClassName="page-item"
      breakLinkClassName="page-link"
      containerClassName="pagination justify-content-center pagination-circle"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      activeClassName="active"
    >
      {currentPageData}
    </ReactPaginate>
  );
};
export default HomePage;
