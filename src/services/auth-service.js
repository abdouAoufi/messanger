export const saveSession = () => {
  localStorage.setItem("isAuth", true);
};

export const deleteSession = () => {
  localStorage.setItem("isAuth", false);
};

export const getAuthInfo = () => {
  return localStorage.getItem("isAuth");
};
