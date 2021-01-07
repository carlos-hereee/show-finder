import React from "react";
import parse from "html-react-parser";
import { AllShowFinder } from "../utils/type/type";

type MovieProps = {
  movie: AllShowFinder;
};

const Show: React.FC<MovieProps> = ({ movie }) => (
  <div className="movie-card">
    <div className="movie-poster__cover">
      <img src={movie.image.medium} alt={movie.name} className="movie-poster" />
    </div>
    <div className="movie-content">
      <div>
        <h3>{movie.name}</h3>
        <p>{movie.summary && parse(movie.summary)}</p>
        <button type="button" className="button">
          Show Episodes
        </button>
      </div>
    </div>
  </div>
);

export default Show;
