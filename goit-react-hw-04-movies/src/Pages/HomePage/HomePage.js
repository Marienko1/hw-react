import React, { Component } from "react";
import api from "../../Services";
import MovieGalleryItem from "../../Components/MoviesGalleryItem";
import styles from "./homepage.module.css";

export default class HomePage extends Component {
  state = {
    moviesList: [],
  };

  componentDidMount() {
    api
      .trandingMovies()
      .then((movies) => {
        console.log(movies);
        this.setState({
          moviesList: movies.data.results,
        });
      })
      .catch((error) => console.log(error));
  }

  render() {
    const { moviesList } = this.state;
    return (
      <>
        <h1>Tranding Today</h1>

        <div className={styles.cardList}>
          <MovieGalleryItem items={moviesList}></MovieGalleryItem>
        </div>
      </>
    );
  }
}
