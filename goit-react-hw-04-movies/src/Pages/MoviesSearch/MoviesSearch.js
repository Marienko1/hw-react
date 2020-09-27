import React, { Component } from "react";
import Searchbar from "../../Components/SearchBar";
import api from "../../Services";
import MovieGalleryItem from "../../Components/MoviesGalleryItem";
import styles from "./moviessearch.module.css";

export default class SearchMovie extends Component {
  state = {
    inputValue: "",
    movieList: [],
    isLoading: false,
  };

  handleMakeRequest = () => {
    const { inputValue } = this.state;
    this.setState({ isLoading: true });

    api
      .searchByTitle(inputValue)
      .then((response) => {
        this.setState(({ movieList }) => ({
          movieList: [...movieList, ...response.data.results],
          isLoading: false,
        }));
      })
      .catch((error) => console.log(error));
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const search = event.target.movieInput.value;
    this.setState((prevState) => {
      if (prevState.inputValue !== search) {
        return {
          movieList: [],
          inputValue: search,
        };
      } else {
        return;
      }
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const { inputValue } = this.state;

    if (prevState.inputValue !== inputValue) {
      this.setState({
        isLoading: true,
      });

      this.handleMakeRequest();
    }
  }

  render() {
    const { movieList } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit}></Searchbar>
        <ul className={styles.cardList}>
          <MovieGalleryItem items={movieList}></MovieGalleryItem>
        </ul>
      </>
    );
  }
}

// Searchbar.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
