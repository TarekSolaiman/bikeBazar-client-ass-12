import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

const { createContext, useState, useEffect } = require("react");

export const AuthContext = createContext();
const auth = new getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Create user email & password
  const signUp = (email, passwor) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, passwor);
  };

  // login email & password
  const login = (email, passwor) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, passwor);
  };

  //Update Name
  const nameUpdate = (name) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };

  // Create user with google
  const googlLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  // send a email for reset password
  const forgatePassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  // logOut user
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    loading,
    login,
    signUp,
    logOut,
    nameUpdate,
    googlLogin,
    forgatePassword,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
