import React, { createContext, useState } from "react";

export const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({
    name: "Loading ..",
    occupation: "Loading",
  });
  return (
    <ChatContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </ChatContext.Provider>
  );
};
