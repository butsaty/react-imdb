import React, { Component } from 'react'

import './RoutePage.css';
import ImdbService from '../imdbService';
import MovieDetails from '../components/MovieDetails';

class MoviesPage extends Component {
  constructor(props) {
    super(props)
    this.imdbService = new ImdbService();
  }

  state = {
    details: []
  };

  async getDetails(id) {
    try {
      const info = await this.imdbService.getMovieDetails(id);
      this.setState({ details: info });
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    const { movieList } = this.props;

    return (
      <div>
        <h2>Movies</h2>
        <ul>
          {
            movieList.map((movie) =>
              <li>
                <MovieDetails
                  id={movie.id}
                  title={movie.title}
                  year={movie.year}
                  rate={movie.imdbRating}
                  details={this.state.details}
                  className="movie-details" />
                <button onClick={() => this.getDetails(movie.id)}>show more...</button>
              </li>
            )
          }
        </ul>
      </div>
    );
  }
}

export default MoviesPage