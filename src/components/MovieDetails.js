import React, { Component } from 'react'

export default class MovieDetails extends Component {
  render() {
    const { id, title, year, rate, details } = this.props;

    return (     
      <div>
        <b>{title} </b>(year: {year}, rate: {rate}) 
        {id === details.id && (
          <div>
            <i>{details.storyline}</i>
          </div>
        )}
      </div>      
    )
  }
}
