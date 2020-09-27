import React, { Component } from "react";
import api from "../../Services";
import styles from "./movieCast.module.css";

export default class MovieCast extends Component {
  state = { cast: [] };

  componentDidMount() {
    const { movieId } = this.props.match.params;

    api
      .getMovieCast(movieId)
      .then((response) => {
        console.log(response);
        this.setState({ ...response.data });
      })
      .catch((error) => console.log(error));
  }

  render() {
    const { cast } = this.state;

    return (
      <div>
        <ul className={styles.cast}>
          {cast &&
            cast.map((item) => (
              <li className={styles.castItem} key={item.credit_id}>
                <img
                  src={
                    item.profile_path
                      ? "https://image.tmdb.org/t/p/original" +
                        item.profile_path
                      : "https://i.ibb.co/7NmPR1b/avatar.png"
                  }
                  alt={item.name}
                />

                <p>{item.name}</p>
                <p>Character: {item.character}</p>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}
