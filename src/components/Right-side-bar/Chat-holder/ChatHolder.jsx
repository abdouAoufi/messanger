import React, { useState, useContext, useEffect, useRef } from "react";
import Navbar from "./Chat/Navbar/Navbar";
import BottomBar from "./Chat/Bottom-bar/BottomBar";
import Box from "@mui/material/Box";
import ProfileContainer from "./Chat/Profile-container/ProfileContainer";
import MessageHolder from "./Chat/MessageHolder/MessageHolder";
import styled from "styled-components";
import { useParams, useHistory } from "react-router-dom";
import Loading from "../../Loading";
import { ChatContext } from "../../../context/Chat/Chat";
import { randomUserList } from "../../../assests";

function ChatHolder() {
  const messageRef = useRef(null);
  const [currentUser, setCurentStateUser] = useState({});
  const [messageToSend, setMessageToSend] = useState("");
  const [loading, setLoading] = useState(true);
  const { setCurrentUser } = useContext(ChatContext);
  const userID = useParams().userID;
  const history = useHistory();
  const sendMessage = (message) => {
    messageRef.current.sendMessage(message);
    setTimeout(() => reciveMessage(message), 1000);
  };
  const reciveMessage = (message) => {
    // TODO FAKE API
    messageRef.current.reciveMessage(message);
  };

  useEffect(() => {
    getUser();
    return function () {
      resetStates();
    };
  }, [userID]);

  const getUser = () => {
    if (!userID) {
      return history.push("/home");
    }
    // TODO fake call to API
    setTimeout(() => {
      setLoading(false);
      const name =
        randomUserList[Math.floor(Math.random() * randomUserList.length)];
      setCurentStateUser({
        name,
        occupation: "Student",
      });
      setCurrentUser({
        name,
        occupation: "Student",
      });
    }, 1400);
  };

  const resetStates = () => {
    setLoading(true);
    setCurentStateUser({});
    setCurrentUser({ name: "Loading ..", occupation: "Loading" });
  };

  return (
    <Box
      component="div"
      sx={{
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <Navbar name={currentUser.name || "user"} />
      <ChatWrapper>
        {loading ? (
          <Loading mt="6" />
        ) : (
          <Box component="div">
            <ProfileContainer
              name={currentUser.name || "uknwon user"}
              occupation={currentUser.occupation || "uknwon user"}
            />
            <MessageHolder ref={messageRef} />
            <BottomBar sendMessage={sendMessage} />
          </Box>
        )}
      </ChatWrapper>
    </Box>
  );
}

const ChatWrapper = styled.div`
  overflow-y: auto;
  max-height: 80vh;
`;

export default ChatHolder;
