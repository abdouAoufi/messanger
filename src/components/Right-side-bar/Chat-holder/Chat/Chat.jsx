import React from "react";
import styled from "styled-components";
import ProfileContainer from "./Profile-container/ProfileContainer";
import MessageHolder from "./MessageHolder/MessageHolder";
import BottomBar from "./Bottom-bar/BottomBar";

export default function Chat() {
  return (
    <Wrapper>
      <ProfileContainer name="Lyes" occupation="Developer" />
      <MessageHolder />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
 
`;
