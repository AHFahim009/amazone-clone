import React, { useContext, useState } from "react";
import SignUP from "./SignUP.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
//----------------------------------------------------------
const SignUp = () => {
  //------------------

  const [error, setError] = useState("");
  //-------------------------------------
  //* destructuring context provider value
  const { createUser } = useContext(AuthContext);
  //---------------------------------------------

  const handleSingUp = (event) => {
    //-----------------------------
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    // console.log(email, password, confirm);
    //---------------------------------------

    if (password !== confirm) {
      setError("your password did not match");
      return;
    } else if (password.length < 6) {
      setError("Password must be minimum 6 characters");
      return;
    }
    //--------------------------------------------------

    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        console.log(error.massage);
      });
  };
  //----------------------------------

  //!......................................................................

  return (
    <>
      <section className="form-container">
        <h1 className="form-title">Sign Up</h1>
        <form onSubmit={handleSingUp}>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="" required />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="" required />
          </div>
          <div className="form-control">
            <label htmlFor="confirm">Confirm Password</label>
            <input type="password" name="confirm" id="" required />
          </div>

          <input className="btn-submit" type="submit" value="Sign Up" />
        </form>
        <p>
          <small>
            Already have an account? <Link to="/login"> Login</Link>
          </small>
        </p>
        <p className="text-error">{error}</p>
      </section>
    </>
  );
};

export default SignUp;
