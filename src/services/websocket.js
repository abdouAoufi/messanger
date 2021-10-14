import { io } from "socket.io-client/dist/socket.io.js";
import { ADRESS } from "../services/statics";

const socket = io(ADRESS);

export const getSocket = () => {
  if (!socket) {
    throw Error("Socket not defined!");
  }
  return socket;
};
