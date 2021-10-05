export const saveSession = (userInfo) => {
  localStorage.setItem("isAuth", true);
  localStorage.setItem("userInfo", JSON.stringify(userInfo));
};

export const deleteSession = () => {
  localStorage.setItem("isAuth", false);
  localStorage.setItem("userInfo", null);
};

export const getAuthInfo = () => {
  return localStorage.getItem("isAuth");
};

export const getUserInfo = () => {
  return localStorage.getItem("userInfo");
};

