import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { connect } from "react-redux";
import { authOperations } from "../redux/auth";
import { Button, TextField } from "@material-ui/core";

// const styles = {
//   form: {
//     width: 320,
//   },
//   label: {
//     display: "flex",
//     flexDirection: "column",
//     padding: 4,
//   },
// };

const RegisterView = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const handleNameChange = ({ target }) => {
    setName(target.value);
  };

  const [email, setEmail] = useState("");
  const handleEmailChange = ({ target }) => {
    setEmail(target.value);
  };

  const [password, setPassword] = useState("");
  const handlePasswordChange = ({ target }) => {
    setPassword(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
  };

  const styles = {
    form: {
      display: "flex",
      padding: "0 0 30px 10px",
    },
  };

  return (
    <div className="Wrapper">
      <form style={styles.form}>
        <div style={{ marginRight: "10px" }}>
          <TextField
            label="name"
            name="name"
            type="text"
            value={name}
            onChange={handleNameChange}
          />
          <br />
          <TextField
            label="email"
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
          />
          <br />
          <TextField
            error={password.length < 1 || password.length > 6 ? false : true}
            helperText={
              password.length < 1 || password.length > 6
                ? ""
                : "need more symbols"
            }
            label="password"
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <br />
          <Button
            style={{ height: "40px", marginTop: "60px" }}
            variant="contained"
            color="secondary"
            type="submit"
            onClick={handleSubmit}
          >
            Register
          </Button>
        </div>
      </form>
    </div>
  );
};

export default RegisterView;
