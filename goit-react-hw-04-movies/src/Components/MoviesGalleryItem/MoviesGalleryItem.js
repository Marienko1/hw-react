import React from "react";
import styles from "./moviesgallery.module.css";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const movieGalleryItem = ({ items }) => (
  <>
    {items.map((item) => (
      <div
        key={item.id}
        style={
          item.backdrop_path
            ? {
                backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
              }
            : {
                backgroundImage:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSAUmka06uFKW8BxmZXi8uH_N1euTnUnTWmhQ&usqp=CAU",
              }
        }
        className={styles.moviecard}
      >
        <NavLink to={{ pathname: `/movies/${item.id}` }}>
          <div className={styles.moviecardOverlay}></div>
          <div className={styles.moviecardContent}>
            <div className={styles.moviecardHeader}>
              <h1 className={styles.moviecardTitle}>{item.title}</h1>
              <h4 className={styles.moviecardInfo}>
                ({item.release_date.slice(0, 4)} )
              </h4>
            </div>
            {/* <p className={styles.moviecardDesc}>{item.overview}</p> */}
          </div>
        </NavLink>
      </div>
    ))}
  </>
);

export default movieGalleryItem;

movieGalleryItem.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      backdrop_path: PropTypes.string,
      title: PropTypes.string.isRequired,
      vote_average: PropTypes.number.isRequired,
    })
  ).isRequired,
};
