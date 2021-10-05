import React from "react";
import ChatHolder from "./ChatHolder/ChatHolder";
import styled from "styled-components";
import { Switch, Route, useHistory, Link } from "react-router-dom";

export default function RightSideBar() {
  return (
    <Wrapper>
      <InnerWrapper>
        <Switch>
          <Route path="/home/chat" component={ChatHolder} />
          <Route>hi</Route>
        </Switch>
      </InnerWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex-grow: 1;
  min-width: 70vw;
  height: 100%;
  overflow-y: scroll;
`;

const InnerWrapper = styled.div`
  position: relative;
`;
