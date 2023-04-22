import React, { Children, useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
//-------------------------------------------------------

const PrivetRouter = ({ children }) => {
  //------------------------------------

  const { user, loading, setLoading } = useContext(AuthContext);
  //------------------------------------------------------------
  const location = useLocation();
  //----------------------------

  if (loading) {
    return <div>loading......</div>;
  }

  if (user) {
    return children;
  }
  //---------------

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

//-------------------------
export default PrivetRouter;
