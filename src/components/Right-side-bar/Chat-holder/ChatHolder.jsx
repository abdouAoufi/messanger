import React, { useState, useContext, useEffect } from "react";
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
  const [currentUser, setCurentStateUser] = useState({});
  const [loading, setLoading] = useState(true);
  const { setCurrentUser } = useContext(ChatContext);
  const userID = useParams().userID;
  const history = useHistory();

  useEffect(() => {
    getUser();
    return function () {
      setLoading(true);
      setCurentStateUser({});
      setCurrentUser({ name: "Loading ..", occupation: "Loading" });
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
