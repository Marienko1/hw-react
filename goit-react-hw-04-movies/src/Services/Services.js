import axios from "axios";

export default {
  baseUrl: `https://api.themoviedb.org/3`,
  apiKey: "7f7dc31298592eb2d1fbbfdbcae6939f",
  page: 1,

  trandingMovies() {
    return axios.get(
      `${this.baseUrl}/trending/movie/week?api_key=${this.apiKey}`
    );
  },

  searchByTitle(query) {
    return axios.get(
      `${this.baseUrl}/search/movie?api_key=${this.apiKey}&language=en-US&page=${this.page}&include_adult=false&query=${query}`
    );
  },

  getMovieDettails(id) {
    return axios.get(`${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`);
  },

  getMovieCast(id) {
    return axios.get(
      `${this.baseUrl}/movie/${id}/credits?api_key=${this.apiKey}`
    );
  },

  getMovieReview(id) {
    return axios.get(
      `${this.baseUrl}/movie/${id}/reviews?api_key=${this.apiKey}`
    );
  },
};
