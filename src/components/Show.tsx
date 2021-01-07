import React from "react";
import parse from "html-react-parser";

interface ShowProps {
  movie: {
    id: number;
    image: { medium: string; original: string };
    language: string;
    name: string;
    summary: string;
    url: string;
  };
}

const Show: React.FC<ShowProps> = ({ movie }) => (
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
