import React, { Component } from "react";
import styles from "./contactlist.module.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import { deleteContact } from "../../Redux/Actions/contact";
import PropTypes from "prop-types";

class ContactList extends Component {
  handleDeleteContact = (id) => () => {
    const { deleteContact } = this.props;

    deleteContact(id);
  };

  render() {
    const { contacts } = this.props;
    return (
      <TransitionGroup component="ul" className={styles.list}>
        {contacts.map((item) => (
          <CSSTransition key={item.id} timeout={250} classNames={styles}>
            <li>
              <div className={styles.wrapper}>
                <span className={styles.telName}>{item.name}</span>
                <span className={styles.telNumber}>{item.number}</span>

                <button
                  className={styles.closeBtn}
                  id={item.id}
                  onClick={this.handleDeleteContact(item.id)}
                >
                  &times;
                </button>
              </div>
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const mapStateToProps = ({ contact, filter }, props) => {
  return {
    contacts: filter
      ? contact.filter((item) =>
          item.name.toLowerCase().includes(filter.toLowerCase())
        )
      : contact,
  };
};

const mapDispatchToProps = (dispatch) => ({
  deleteContact: (id) => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
