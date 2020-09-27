import React, { Component, lazy, Suspense } from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import api from "../../Services";
import styles from "./movieDettails.module.css";
import PropTypes from "prop-types";
import Loader from "../../Components/Loader";

const MovieCast = lazy(() =>
  import(
    "../../Components/MovieCast/MovieCast" /* webpackChunkName: "movieCast-page" */
  )
);

const MovieReview = lazy(() =>
  import(
    "../../Components/MovieReview/MovieReview" /* webpackChunkName: "moviesReview-page" */
  )
);

export default class MoviesDetails extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        movieId: PropTypes.string.isRequired,
      }).isRequired,
      url: PropTypes.string.isRequired,
    }).isRequired,
    location: PropTypes.shape({
      state: PropTypes.shape({
        from: PropTypes.objectOf.isRequired,
      }),
    }).isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  };

  state = {
    id: null,
    poster_path: null,
    title: null,
    overview: null,
    genres: null,
    release_date: null,
    vote_average: null,
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;

    api
      .getMovieDettails(movieId)
      .then((response) => {
        console.log(response);
        this.setState({ ...response.data });
      })
      .catch((error) => console.log(error));
  }

  handleGoBack = () => {
    const { location, history } = this.props;
    history.push(location?.state?.from || "/");
  };

  render() {
    const {
      id,
      poster_path,
      title,
      overview,
      genres,
      release_date,
      vote_average,
    } = this.state;
    return (
      <div>
        <div className={styles.container}>
          <button
            type="button"
            className={styles.button}
            onClick={this.handleGoBack}
          >
            Go Back
          </button>

          {id && (
            <>
              <img
                src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
                alt=""
              />

              <div className={styles.description}>
                <h1>
                  {title} ({release_date.slice(0, 4)})
                </h1>
                <p>User Score: {vote_average * 10}%</p>
                <h2>Overview</h2>
                <p>{overview}</p>
                <h3>Genres</h3>
                <p>{genres.map((genre) => `${genre.name} `)}</p>
              </div>
            </>
          )}
        </div>
        <div className={styles.additional}>
          <span>Additional information</span>
          <div className={styles.nav}>
            <ul>
              <li style={{ marginRight: "10px" }}>
                <NavLink
                  activeClassName={styles.active}
                  className={styles.link}
                  to={{ pathname: `/movies/${id}/cast` }}
                >
                  Cast
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={styles.link}
                  activeClassName={styles.active}
                  to={{ pathname: `/movies/${id}/reviews` }}
                >
                  Reviews
                </NavLink>
              </li>
            </ul>
          </div>
          <Suspense fallback={<Loader />}>
            <Switch>
              <Route path="/movies/:movieId/cast" component={MovieCast} />
              <Route path="/movies/:movieId/reviews" component={MovieReview} />
            </Switch>
          </Suspense>
        </div>
      </div>
    );
  }
}
