import { ADRESS } from "../services/statics";

export const registerUser = (userInfo) => {
  return fetch(ADRESS + "/auth", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userInfo),
  });
};
