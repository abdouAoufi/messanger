import React from "react";
import Navbar from "./Navbar/Navbar";
import Chat from "./Chat/Chat";
import BottomBar from "./Chat/Bottom-bar/BottomBar";
import Box from "@mui/material/Box";
import ProfileContainer from "./Chat/Profile-container/ProfileContainer";
import MessageHolder from "./Chat/MessageHolder/MessageHolder";
import styled from "styled-components";

function ChatHolder() {
  return (
    <Box
      component="div"
      sx={{
        minHeight: "100vh",
        position: "relative"
      }}
    >
      <Navbar />
      <ChatWrapper>
        <ProfileContainer name="Lyes" occupation="Developer" />
        <MessageHolder />
      </ChatWrapper>
      <BottomBar />
    </Box>
  );
}

const ChatWrapper = styled.div`
  overflow-y: auto;
  max-height: 80vh;
`;

export default ChatHolder;
