import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.init";

export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);

    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInGoogle = () => {
    return signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user)
        setLoading(true);
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const signOutUser = () => {
    setLoading(true);

    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      console.log(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    createUser,
    signInUser,
    signOutUser,
    signInGoogle,
    user,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
