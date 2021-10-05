import { createContext, useState } from "react";
import { getAuthInfo } from "../../services/auth-service";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isAuth, setAuth] = useState(JSON.parse(getAuthInfo()));
  return (
    <AuthContext.Provider value={{ isAuth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
