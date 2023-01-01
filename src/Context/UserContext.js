import { createContext, useContext, useState } from "react";
import {useNavigate}  from "react-router-dom";

export const userContext = createContext({
  user: null,
  logIn: () => {},
  logOut: () => {},
});

const USER = { name: "Guest", isGuestUser: true };

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(USER);
  let navigate = useNavigate();
  function logIn(username) {
    setUser({ isGuestUser: false, name: username });
    navigate("/dashboard")
  }
  function logOut() {
    setUser(USER);
    navigate("/login")
  }
  return (
    <userContext.Provider value={{ user, logIn, logOut }}>
      {children}
    </userContext.Provider>
  );
}

export function useUserContext() {
  const { user, logIn, logOut } = useContext(userContext);

  return { user, logIn, logOut };
}