import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Field, Formik, Form } from "formik";
import { ShowFinderContext } from "../utils/context/showFinder/ShowFinderState";

const SeachBar: React.FC = () => {
  const { getShow } = useContext(ShowFinderContext);
  const initialValues: { movie: string } = { movie: "" };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        getShow(values.movie);
      }}
    >
      <Form className="main-search-bar">
        <div className="search-bar-form">
          <FontAwesomeIcon icon={faSearch} size="2x" className="icon" />
          <Field type="text" name="movie" />
        </div>
        <button type="submit" className="button">
          Search
        </button>
      </Form>
    </Formik>
  );
};
export default SeachBar;
