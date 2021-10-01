import React from "react";
import styled from "styled-components";
import MessageSent from "./Message/MessageSent";
import MessageRecived from "./Message/MessageRecived";
export default function MessageHolder() {
  return (
    <ChatWrapper>
      <MessageSent />
      <MessageRecived />
    </ChatWrapper>
  );
}

const ChatWrapper = styled.div`
  padding: 0 0.5rem;
  align-items: center;
`;
