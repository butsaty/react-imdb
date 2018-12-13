import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './FeaturedPage.css';
import ImdbService from '../imdbService';

class FeaturedPage extends Component {
  constructor(props) {
    super(props)
    this.imdbService = new ImdbService();
  }

  state = {
    featuredList: []
  };

  async componentDidMount() {
    try {
      const items = await this.imdbService.getTop(15);
      this.setState({ featuredList: items });
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    const movieTile = (
      this.state.featuredList.map((info) =>
        <div className="grid">
          <div className="box">
            <Link to={`/movies/${info.id}`} activeClassName="current" className="poster-title-link">
              <h3 className='poster-title'>{info.title}</h3>
              <img src={info.posterurl} alt="POSTER" className="poster" />
            </Link>
          </div>
        </div>
      )
    );

    return (
      <div>
        <h2>Featured</h2>
        {movieTile}
      </div>
    );
  }
}

export default FeaturedPage