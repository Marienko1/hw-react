import React, { Component } from "react";
import api from "../../Services";
import styles from "./movieReview.module.css";

export default class MovieReview extends Component {
  state = { reviews: [] };

  componentDidMount() {
    const { movieId } = this.props.match.params;

    api
      .getMovieReview(movieId)
      .then((response) => {
        console.log(response);
        this.setState({ reviews: response.data.results });
      })
      .catch((error) => console.log(error));
  }

  render() {
    const { reviews } = this.state;

    return (
      <div className={styles.rew}>
        {reviews.length === 0 ? (
          <p>We dont have any reviews for this movie</p>
        ) : (
          <ul>
            {reviews.map(({ id, author, content }) => (
              <li key={id}>
                <p className={styles.autor}> {author} :</p>
                <p>{content}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}
