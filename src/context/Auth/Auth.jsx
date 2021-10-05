import { createContext, useState } from "react";
import { getAuthInfo, getUserInfo } from "../../services/auth-service";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const isAuthLocal = JSON.parse(getAuthInfo()) || false;
  const userInfoLocal = JSON.parse(getUserInfo()) || undefined;
  const [isAuth, setAuth] = useState(isAuthLocal);
  const [userInfo, setUserInfo] = useState(userInfoLocal);
  return (
    <AuthContext.Provider value={{ isAuth, setAuth, userInfo, setUserInfo }}>
      {children}
    </AuthContext.Provider>
  );
};
