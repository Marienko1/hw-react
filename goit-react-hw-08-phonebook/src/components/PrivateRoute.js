import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
// import { connect } from "react-redux";
// import { authSelectors } from "../redux/auth";

const PrivateRoute = ({ component: Component, ...routeProps }) => {
  const isAuthenticated = useSelector((state) => state.auth.token);
  return (
    <Route
      {...routeProps}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
// const mapStateToProps = (state) => ({
//   isAuthenticated: authSelectors.isAuthenticated(state),
// });

// export default connect(mapStateToProps)(PrivateRoute)
