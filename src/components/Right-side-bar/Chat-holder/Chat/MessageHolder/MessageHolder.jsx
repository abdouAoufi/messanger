import React, { forwardRef, useImperativeHandle, useState } from "react";
import styled from "styled-components";
import MessageSent from "./Message/MessageSent";
import MessageRecived from "./Message/MessageRecived";
const MessageHolder = forwardRef((props, ref) => {
  const [messagesToBeSend, setMessagesToBeSent] = useState([]);
  const [messageRecived, setMessageRecived] = useState([]);
  const [lastMessage , setLastMessaage] = useState([])
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
    },
    reciveMessage(message) {
      let messagesList = [...messageRecived];
      messagesList.push(message);
      setMessageRecived(messagesList);
      console.log(messagesList);
    },
  }));
  return (
    <ChatWrapper onClick={getScroll} id="ChatWrapper">
      {messagesToBeSend.map((message, index) => (
        <MessageSent key={index} text={message} />
      ))}
      {messageRecived.map((message, index) => (
        <MessageRecived key={index} text={message} />
      ))}
    </ChatWrapper>
  );
});

const ChatWrapper = styled.div`
  padding: 1rem 0.5rem;

  overflow-y: auto;
`;

export default MessageHolder;
