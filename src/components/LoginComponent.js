import React, { useState, useEffect } from "react";
import { login } from "../actions/userActions";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import LoggedInScreen from "./LoggedInScreen";

const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const userLogin = useSelector((state) => state.isLoggedIn);

  const { loading, userInfo, error } = userLogin;

  useEffect(() => {
    if (userInfo?.data?.token) {
      alert("Log In Successfull");
      history.push("/user");
    }
  }, [userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div>
      <div
        style={{
          width: "80%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <form onSubmit={submitHandler}>
          <div class="form-group">
            <label for="formGroupExampleInput">Email</label>
            <input
              type="text"
              class="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Type Here"
            />
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput2">Password</label>
            <input
              type="text"
              class="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Type Here"
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;
