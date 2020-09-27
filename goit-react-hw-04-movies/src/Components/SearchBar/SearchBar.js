import React from "react";
import PropTypes from "prop-types";
import styles from "./searchbar.module.css";

const Searchbar = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <fieldset className={styles.material}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          name="movieInput"
        />

        <hr></hr>
      </fieldset>
    </form>
  );
};

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
