export default class ImdbService {
  async getMovieList() {
    const response = await fetch('https://react-mentoring-backend.herokuapp.com/movies')
    const movies = await response.json()

    return movies;
  }

  async getMovieDetails(id) {
    const response = await fetch('https://react-mentoring-backend.herokuapp.com/movies/' + id)
    const details = await response.json()

    return details;
  }

  async getTop(count) {
    const response = await fetch('https://react-mentoring-backend.herokuapp.com/movies?_sort=imdbrating&_limit=' + count)
    const details = await response.json()

    return details;
  }
}