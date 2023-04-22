import React, { useContext } from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
//---------------------------------------------------------

const Header = () => {
  //_________________

  const { user, logOut } = useContext(AuthContext);
  //______________________________________________

  const handleLogOut = () => {
    //------------------------

    logOut()
      .then((result) => {})
      .catch((error) => {
        console.log(error);
      });
  };
  //----------------------

  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/login">Login</Link>
        <Link to="/sign">Sign up</Link>
        //!-----------------------------------------------------
        {user && (
          <span className="text-white">
            Welcome {user.email}
            <button onClick={handleLogOut}>Sing Out</button>
          </span>
        )}
        //!------------------------------------------------------
      </div>
    </nav>
  );
};

export default Header;