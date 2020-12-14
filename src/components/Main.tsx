import React, { useState } from "react";
import parse from "html-react-parser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Field, Formik, Form } from "formik";
import axios from "axios";

const Main = () => {
  const [movie, setMovie] = useState([]);

  const submitForm = (e) => {
    axios
      .get(`http://api.tvmaze.com/search/shows?q=${e.movie}`)
      .then((response) => setMovie(response.data));
  };
  return (
    <div className="main-container">
      <div className="main-wrapper">
        <Formik
          initialValues={{ movie: "" }}
          onSubmit={(values) => submitForm(values)}
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
          {movie.length > 0 &&
            movie.map((data) => {
              const { show } = data;
              return (
                <div key={data.show.id} className="movie-card">
                  <div className="movie-poster">
                    <img
                      src={show.image && show.image.medium}
                      alt={show.name}
                      className="movie-poster-img"
                    />
                  </div>
                  <div className="movie-content">
                    <div>
                      <h3>{show.name}</h3>
                      <p>{show.summary && parse(show.summary)}</p>
                      <button type="button" className="show-episodes-btn">
                        Show Episodes
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Main;
