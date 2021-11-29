import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Navigate } from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { login } from "../actions/auth";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const styles={

  labels:{
    display:"block",
    marginTop:"10px",
    },
  cardContainer:{
    maxWidth: "350px !important",
    padding: "40px 40px",
  },
  card:{
    backgroundColor: "f7f7f7",
    padding: "20px 25px 30px",
    margin: "0 auto 25px",
    marginTop: "50px",
    mozBorderRadius: "2px",
    webkitBorderRadius: "2px",
    borderRadius: "2px",
    mozBoxShadow: "0px 2px 2px rgba(0, 0, 0, 0.3)",
    webkitBoxShadow: "0px 2px 2px rgba(0, 0, 0, 0.3)",
    boxShadow:" 0px 2px 2px rgba(0, 0, 0, 0.3)",
  },
}

  const Login = (props) => {
  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector(state => state.auth);

  const dispatch = useDispatch();

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(login(username, password))
        .then(() => {
          props.history.push("/userlist");
          window.location.reload();
        })
        .catch(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };

  if (isLoggedIn) {
    return <Navigate to="/userlist" />;
  }

  return (
    <div className="col-md-4" style={{alignItems:"center",padding:"10px"}}>
      <div className="card card-container" style={styles.cardContainer,styles.card}>
       
        <Form onSubmit={handleLogin} ref={form}>
          <div className="form-group">
            <label htmlFor="username" style={styles.labels}> Username</label>
            <Input
              type="text"
              className="form-control"
              name="username"
              value={username}
              onChange={onChangeUsername}
              validations={[required]}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" style={styles.labels}>Password</label>
            <Input
              type="password"
              className="form-control"
              name="password"
              value={password}
              onChange={onChangePassword}
              validations={[required]}
            />
          </div>

          <div className="form-group" style={{paddingTop:"20px"}}>
            <button className="btn btn-primary btn-block" disabled={loading}>
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              <span>Login</span>
            </button>
          </div>
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
      </div>
    </div>
  );
};

export default Login;
