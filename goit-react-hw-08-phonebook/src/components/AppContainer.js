import React, { Component } from "react";
import { connect } from "react-redux";
import contactsSelectors from "../redux/contacts/contactsSelectors";
import { authOperations } from "../redux/auth";
import App from "./App";

class AppContainer extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return <App {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    isloadingContacts: contactsSelectors.getLoading(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  onGetCurrentUser: () => dispatch(authOperations.getCurrentUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
