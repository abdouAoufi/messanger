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
import Chat from "./HOC/Chat";

function ChatHolder({ currentUser }) {
  const messageRef = useRef(null);
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const { setCurrentUser } = useContext(ChatContext);
  const userID = useParams().userID;

  const sendMessage = (message) => {
    if (!message) return;
    messageRef.current.sendMessage(message);
    setTimeout(() => reciveMessage(message), 1000);
  };
  const reciveMessage = (message) => {
    // TODO FAKE API
    if (!message) return;
    messageRef.current.reciveMessage(message);
  };

  useEffect(() => {
    if(currentUser.name){
      setLoading(false)
    }
    return function () {
      setLoading(true)
    };
  }, [currentUser]);

  return (
    <Box
      component="div"
      sx={{
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <Navbar name={currentUser.name || "loading"} />
      <ChatWrapper>
        {loading ? (
          <Loading mt="6" />
        ) : (
          <Box component="div">
            <ProfileContainer
              name={currentUser.name || "Uknwon user"}
              occupation={currentUser.occupation || "Uknwon user"}
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

const ChatHoderWithUser = Chat(ChatHolder);
export default ChatHoderWithUser;
