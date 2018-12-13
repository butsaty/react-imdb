import React, { Component } from 'react'

import './MovieInfoPage.css';
import ImdbService from '../imdbService';

class FeaturedPage extends Component {
    constructor(props) {
        super(props)
        this.imdbService = new ImdbService();
    }

    state = {
        info: []
    };

    async componentDidMount() {
        try {
            const details = await this.imdbService.getMovieDetails(this.props.match.params.id);
            this.setState({ info: details });
        } catch (e) {
            console.error(e);
        }
    }

    render() {
        return (
            <div>
                <img src={this.state.info.posterurl} alt="POSTER" className="movie-poster" />
                <div className="movie-info">
                    <div>
                        <div className="base-info">
                            <p><b>Title: </b>{this.state.info.title}</p>
                            <p><b>IMDB: </b>{this.state.info.imdbRating}</p>
                            <p><b>Year: </b>{this.state.info.year}</p>
                            <p><b>Release date: </b>{this.state.info.releaseDate}</p>
                            <p><b>Genres: </b>{JSON.stringify(this.state.info.genres)}</p>
                            <p><b>Actors: </b>{JSON.stringify(this.state.info.actors)}</p>
                        </div>
                    </div>
                    <hr />
                    <b>Storyline</b>
                    <p>{this.state.info.storyline}</p>
                </div>
            </div>
        );
    }
}

export default FeaturedPage