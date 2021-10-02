import React from "react";
import styled from "styled-components";
import ProfileContainer from "./Profile-container/ProfileContainer";
import MessageHolder from "./MessageHolder/MessageHolder";

export default function Chat() {
  return (
    <Wrapper>
      <ProfileContainer />
      <MessageHolder />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-height: 100vh;
  overflow: scroll;
`;
