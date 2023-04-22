import React, { useContext } from "react";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
const Login = () => {
  const { signIn } = useContext(AuthContext);

  const navigate = useNavigate();

  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  console.log(from);

  const handleLogin = (event) => {
    //-------------------------------

    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    //---------------------------------

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //----------------------------------------------------

  return (
    <>
      <section className="form-container">
        <h1 className="form-title">Login</h1>
        <form onSubmit={handleLogin}>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="" required />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="" required />
          </div>

          <input className="btn-submit" type="submit" value="Login" />
        </form>
        <p>
          <small>
            New to Amazon clone? <Link to="/sign"> Create a new account</Link>
          </small>
        </p>
      </section>
    </>
  );
};

export default Login;
