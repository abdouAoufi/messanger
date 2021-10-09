import React from "react";
import ChatHolder from "./Chat-holder/ChatHolder";
import styled from "styled-components";
import { Switch, Route, useHistory, Link } from "react-router-dom";
import YourProfile from "./Your-profile/YourProfile.jsx";
import { ChatContextProvider } from "../../context/Chat/Chat";

export default function RightSideBar() {
  return (
    <ChatContextProvider>
      <Wrapper>
        <InnerWrapper>
          <Switch>
            <Route path="/home/chat/:userID" component={ChatHolder} />
            <Route>
              <YourProfile />
            </Route>
          </Switch>
        </InnerWrapper>
      </Wrapper>
    </ChatContextProvider>
  );
}

const Wrapper = styled.div`
  flex-grow: 1;
  min-width: 70vw;
  max-height: 100vh;
  min-height: 100vh;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
`;

const InnerWrapper = styled.div`
  position: relative;
`;
