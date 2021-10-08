import React from "react";
import Box from "@mui/material/Box";
import styled from "styled-components";
import MainIcons from "./MainIcon/MainIcon";
import { IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

export default function BottomBar() {
  return (
    <Wrapper>
      <MainIcons />
      <MessageInputWrapper>
        <MessageInput placeholder="Aa" />
        <IconButton>
          <SendIcon sx={{ color: "#00b4b9", mx: 0.3 }} />
        </IconButton>
      </MessageInputWrapper>
      <IconButton sx={{ color: "#00b4b9", mx: 0.3 , flexGrow : 1 }}>
        <ThumbUpIcon />
      </IconButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 52px;
  display: flex;
  align-items: center;
  background-color: white;
  @media (min-width: 768px) {
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
  }
`;

const MessageInputWrapper = styled.div`
  height: 75%;
  display: flex;
  align-items: center;
  width: 80%;
  justify-content: space-between;
  background-color: #e4e4eb;
  border-radius: 2rem;
`;

const MessageInput = styled.input`
  height: 90%;
  border: 0;
  background-color: transparent;
  outline: none;
  width: 120px;
  flex-grow: 1;
  margin-left: 12px;
`;

const iconConfiguratoin = { color: "#00b4b0", mx: 1.2 };
