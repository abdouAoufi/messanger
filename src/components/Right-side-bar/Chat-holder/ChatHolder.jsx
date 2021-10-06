import React, { useState, useLayoutEffect, useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import BottomBar from "./Chat/Bottom-bar/BottomBar";
import Box from "@mui/material/Box";
import ProfileContainer from "./Chat/Profile-container/ProfileContainer";
import MessageHolder from "./Chat/MessageHolder/MessageHolder";
import styled from "styled-components";
import { useParams, useHistory } from "react-router-dom";
import Loading from "../../Loading";

function ChatHolder() {
  const userID = useParams().userID;
  const history = useHistory();
  useLayoutEffect(() => {
    if (!userID) {
      history.replace("/home");
    }
  });
  const [currentUser, setCurrentUser] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    // TODO fake call to API
    setTimeout(() => {
      setLoading(false);
      setCurrentUser({ name: "Lyes", occupation: "Student" });
    }, 1000);
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
          <Loading mt="6"/>
        ) : (
          <Box component="div">
            <ProfileContainer
              name={currentUser.name || "uknwon user"}
              occupation={currentUser.occupation || "uknwon user"}
            />
            <MessageHolder />
          </Box>
        )}
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
