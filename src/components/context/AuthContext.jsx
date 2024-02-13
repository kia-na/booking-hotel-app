/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";

const authContext = createContext();

const user = {
  name: "kiana",
  pass: "1234",
  email: "kiana@gmail.com",
};

function authReducer(state, action) {
  switch (action.type) {
    case "login":
      return { user: action.payload, isAuthenticated: true };
    case "logout":
      return { user: null, isAuthenticated: false };
    default:
      throw new Error("unknown action ");
  }
}
const initialState = {
  user,
  isAuthenticated: false,
};
function AuthProvider({ children }) {
  const [{ isAuthenticated }, dispatch] = useReducer(authReducer, initialState);

  function logout() {
    dispatch({ type: "logout" });
  }

  function login() {
    dispatch({ type: "login", payload: user });
  }

  return (
    <authContext.Provider value={{ user, isAuthenticated, logout, login }}>
      {children}
    </authContext.Provider>
  );
}

export default AuthProvider;

export function useAuth() {
  return useContext(authContext);
}
