import React, { Suspense } from "react";
import { BrowserRouter, Switch, Redirect } from "react-router-dom";
import routes from "../routes";
// import Loader from "react-loader-spinner";
import AppBar from "./AppBar";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

const App = ({ isloadingContacts }) => {
  return (
    <BrowserRouter>
      <AppBar />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          {routes.map((route) =>
            route.private ? (
              <PrivateRoute key={route.label} {...route} />
            ) : (
              <PublicRoute key={route.label} {...route} />
            )
          )}
          <Redirect to="/login" />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};
export default App;
