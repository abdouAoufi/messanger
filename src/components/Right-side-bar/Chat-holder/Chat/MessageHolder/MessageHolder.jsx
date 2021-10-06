import React from "react";
import styled from "styled-components";
import MessageSent from "./Message/MessageSent";
import MessageRecived from "./Message/MessageRecived";
export default function MessageHolder() {
  const getScroll = () => {
    const messageHolder = document.getElementById("ChatWrapper");
    messageHolder.scrollBy(0, 10);
  };
  return (
    <ChatWrapper onClick={getScroll} id="ChatWrapper">
      <MessageSent />
      <MessageRecived />
      <MessageSent />
      <MessageSent />
      <MessageRecived />
      <MessageSent />
      <MessageSent />
      <MessageRecived />
      <MessageSent />
      <MessageSent />
      <MessageRecived />
      <MessageSent />
      <MessageSent />
      <MessageRecived />
      <MessageSent />
    </ChatWrapper>
  );
}

const ChatWrapper = styled.div`
  padding: 1rem 0.5rem;
  align-items: center;
  height: fit-content;
  overflow-y: scroll;
`;
