/* eslint-disable no-param-reassign */
import React from 'react';
import { Movie } from '../../types/Movie';
import './MovieCard.scss';

interface Props {
  movie: Movie;
}

export const MovieCard: React.FC<Props> = ({ movie }) => {
  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>,
  ) => {
    e.currentTarget.src =
      'https://via.placeholder.com/360x270.png?text=no%20preview';
  };

  return (
    <div className="card" data-cy="movieCard">
      <div className="card-image">
        <figure className="image is-4by3">
          <img
            data-cy="moviePoster"
            src={movie.imgUrl}
            alt={movie.title}
            onError={handleImageError}
          />
        </figure>
      </div>
      <div className="media-content">
        <p className="title is-8" data-cy="movieTitle">
          {movie.title}
        </p>
      </div>
      <div className="content" data-cy="movieDescription">
        {movie.description}
        <a href={movie.imdbUrl} data-cy="movieURL">
          IMDB
        </a>
      </div>
    </div>
  );
};
