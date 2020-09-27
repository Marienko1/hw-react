import React from "react";
import PropTypes from "prop-types";
import styles from "./contactlist.module.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const ContactList = ({ contacts, onDelete }) => (
  <TransitionGroup component="ul" className={styles.list}>
    {contacts.map((item) => (
      <CSSTransition key={item.id} timeout={250} classNames={styles}>
        <li>
          <div className={styles.wrapper}>
            <span className={styles.telName}>{item.name}</span>
            <span className={styles.telNumber}>{item.number}</span>

            <button className={styles.closeBtn} id={item.id} onClick={onDelete}>
              &times;
            </button>
          </div>
        </li>
      </CSSTransition>
    ))}
  </TransitionGroup>
);

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};
