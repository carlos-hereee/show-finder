import React, { useState } from "react";
import parse from "html-react-parser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Field, Formik, Form } from "formik";
import axios from "axios";
import { TvMaze } from "../data";

interface MyFormValues {
  movie: string;
}

const Main: React.FC = () => {
  const [show, setShow] = useState([]);
  const initialValues: MyFormValues = { movie: "" };

  const submitForm = (e: { movie: string }) => {
    axios
      .get(`http://api.tvmaze.com/search/shows?q=${e.movie}`)
      .then((response) => setShow(response.data));
  };
  return (
    <div className="main-container">
      <div className="main-wrapper">
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            submitForm(values);
          }}
        >
          <Form className="main-search-bar">
            <div className="search-bar-form">
              <FontAwesomeIcon icon={faSearch} size="2x" className="icon" />
              <Field type="text" name="movie" />
            </div>
            <button type="submit" className="search-btn">
              Search
            </button>
          </Form>
        </Formik>
        <div className="movie-container">
          {show.length > 0 &&
            show.map((data: TvMaze) => (
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
