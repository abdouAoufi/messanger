import React from "react";
import ChatHolder from "./Chat-holder/ChatHolder";
import styled from "styled-components";
import { Switch, Route, useHistory, Link } from "react-router-dom";
import YourProfile from "./Your-profile/YourProfile.jsx";

export default function RightSideBar() {
  return (
    <Wrapper>
      <InnerWrapper>
        <Switch>
          <Route path="/home/chat" component={ChatHolder} />
          <Route>
            <YourProfile />
          </Route>
        </Switch>
      </InnerWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex-grow: 1;
  min-width: 70vw;
  max-height: 100vh;
  min-height: 100vh ;
  height: 100%;
  overflow-y: scroll;
`;

const InnerWrapper = styled.div`
  position: relative;
`;
