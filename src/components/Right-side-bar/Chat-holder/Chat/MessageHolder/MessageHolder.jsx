import React, { forwardRef, useImperativeHandle, useState } from "react";
import styled from "styled-components";
import MessageSent from "./Message/MessageSent";
import MessageRecived from "./Message/MessageRecived";
const MessageHolder = forwardRef((props, ref) => {
  // const [messagesToBeSend, setMessagesToBeSent] = useState([]);
  // const [messageRecived, setMessageRecived] = useState([]);
  const [messages, setMessages] = useState([]);
  const getScroll = () => {
    const messageHolder = document.getElementById("ChatWrapper");
    messageHolder.scrollBy(0, 10);
  };
  useImperativeHandle(ref, () => ({
    // function returned we can execute outside ....
    sendMessage(message) {
      let messagesList = [...messages];
      messagesList.push({ type: "send", text: message });
      setMessages(messagesList);
    },
    reciveMessage(message) {
      let messagesList = [...messages];
      messagesList.push({ type: "recive", text: message });
      setMessages(messagesList);
      console.log(messagesList);
    },
  }));
  return (
    <ChatWrapper onClick={getScroll} id="ChatWrapper">
      {messages.map((message, index) => {
        if (message.type === "send") {
          return <MessageSent text={message.text} key={index} />;
        }
        return <MessageRecived text={message.text} key={index} />;
      })}
    </ChatWrapper>
  );
});

const ChatWrapper = styled.div`
  padding: 1rem 0.5rem;

  overflow-y: auto;
`;

export default MessageHolder;
