import React from "react";
import { connect } from "react-redux";
import { authSelectors } from "../redux/auth";

import { Logo } from "./Logo";
import Navigation from "./Navigation";
import UserMenu from "./UserMenu";

const AppBar = ({ isAuthenticated }) => {
  return (
    <header className="Wrapper">
      <Logo />
      {isAuthenticated ? <UserMenu /> : <Navigation />}
    </header>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
