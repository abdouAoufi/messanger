import React, { forwardRef, useImperativeHandle, useState } from "react";
import styled from "styled-components";
import MessageSent from "./Message/MessageSent";
import MessageRecived from "./Message/MessageRecived";
const MessageHolder = forwardRef((props, ref) => {
  const [messagesToBeSend, setMessagesToBeSent] = useState([]);
  const getScroll = () => {
    const messageHolder = document.getElementById("ChatWrapper");
    messageHolder.scrollBy(0, 10);
  };
  useImperativeHandle(ref, () => ({
    // function returned we can execute outside ....
    sendMessage(message) {
      let messagesList = [...messagesToBeSend];
      messagesList.push(message);
      setMessagesToBeSent(messagesList);
      console.log(messagesList);
    },
    reciveMessage(message) {
      console.log(message);
    },
  }));
  return (
    <ChatWrapper onClick={getScroll} id="ChatWrapper">
      {messagesToBeSend.map((message, index) => (
        <MessageSent key={index} text={message} />
      ))}

      {/* <MessageRecived text="Kount flafac ani jay" />   */}
    </ChatWrapper>
  );
});

const ChatWrapper = styled.div`
  padding: 1rem 0.5rem;
  
  overflow-y: auto;
`;

export default MessageHolder;
