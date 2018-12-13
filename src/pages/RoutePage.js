import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import ImdbService from '../imdbService';

import MoviesPage from './MoviesPage';
import FeaturedPage from './FeaturedPage';
import MovieInfoPage from './MovieInfoPage';

class RoutePage extends Component {
    constructor(props) {
        super(props)
        this.imdbService = new ImdbService();
    }

    state = {
        movieList: []
    };

    async componentDidMount() {
        try {
            debugger;
            const list = await this.imdbService.getMovieList();
            this.setState({ movieList: list });
        } catch (e) {
            console.error(e);
        }
    }

    render() {
        const moviesPage = () => (
            <MoviesPage movieList={this.state.movieList} />
        );

        return (
            <div className="page-content">
                <Switch>
                    <Route exact path="/" render={moviesPage} />
                    <Route path="/movies/:id" component={MovieInfoPage} />
                    <Route path="/movies" render={moviesPage} />
                    <Route path="/featured" component={FeaturedPage} />
                </Switch>
            </div>
        )
    }
}

export default RoutePage