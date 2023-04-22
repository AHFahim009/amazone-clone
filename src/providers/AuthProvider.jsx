import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";
//--------------------------------------------

const auth = getAuth(app);
//------------------------

export const AuthContext = createContext(null);
//---------------------------------------------

const AuthProvider = (props) => {
  //----------------------------

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  //------------------------------------------

  // firebase function
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //-------------------------------------------------------------

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //-----------------------------------------------------------

  const logOut = () => {
    return signOut(auth);
  };
  //----------------------

  // observe the current user and rendering
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    // clean up function when current user will remove

    return () => {
      unsubscribe();
    };
  }, []);
  // --------------

  const authInfo = {
    setLoading,
    loading,
    user,
    createUser,
    signIn,
    logOut,
  };
  //---------

  // return the  auth context provider the children of the component
  return (
    <AuthContext.Provider value={authInfo}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
