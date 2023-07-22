import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/login.css";
import { useNavigate } from "react-router-dom";

import axios from "axios";
const Login = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let navigate = useNavigate();
  let handleSubmit = (e) => {
    e.preventDefault();
    let data = { email, password };
    axios.post("http://localhost:4001/login", data).then((res) => {
      if (res.data.message=="Login successFull") {
        navigate("/home");
      } else {
        alert(res.data.message);
      }
    });
  };

  return (
    <div className="login">
      <div className="loginblk">
        <div
          className="login1 text-center  text-light w-75  container  "
          style={{ height: "500px", width: "200px" }}
        >
          <div className="login_form w-50 mx-auto">
            <div className="hed">
              <h1 style={{ fontFamily: "sans-serif" }}>Login</h1>
            </div>
            <form action="" onSubmit={handleSubmit}>
              <div className="email text-light">
                <input
                  type="email"
                  placeholder="email address"
                  className="form-control mt-2"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="em"
                />
              </div>
              <div className="password">
                <input
                  type="password"
                  placeholder="password"
                  className="form-control mt-2"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="options">
                <button className="btn btn-light mt-3" id="btnlo" type="submit">
                  Login
                </button>
              </div>
              <div className="signUp_button">
                <p className="mt-3">Are you a new user ?</p>
                <Link to="/signup" className="btn btn-outline-light mt-3 text-dark" id="btnlo">
                  Sign Up
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
