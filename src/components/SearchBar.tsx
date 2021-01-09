import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Field, Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ShowFinderContext } from "../utils/context/showFinder/ShowFinderState";

const schema = Yup.object({
  movie: Yup.string().required("You must enter a show"),
});
const SeachBar: React.FC = () => {
  const { getShow } = useContext(ShowFinderContext);
  const initialValues: { movie: string } = { movie: "" };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        getShow(values.movie);
      }}
      validationSchema={schema}
    >
      <Form className="search-bar">
        <div className="search-bar-form">
          <FontAwesomeIcon icon={faSearch} size="2x" className="icon" />
          <Field type="text" name="movie" />
        </div>
        <ErrorMessage name="name" component="div" className="validate" />
        <button type="submit" className="button">
          Search
        </button>
      </Form>
    </Formik>
  );
};
export default SeachBar;
