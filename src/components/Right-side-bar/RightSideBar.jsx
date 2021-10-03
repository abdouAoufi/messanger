import React from "react";
import Box from "@mui/material/Box";
import Navbar from "./Navbar/Navbar";
import Chat from "./Chat/Chat";
import BottomBar from "./Chat/Bottom-bar/BottomBar";
import styled from "styled-components";

export default function RightSideBar() {
  return (
    <Wrapper>
      <InnerWrapper>
        <Navbar />
        <Chat />
        <BottomBar />
      </InnerWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex-grow: 1;
  height: 100%;
  overflow-y: scroll;
`;

const InnerWrapper = styled.div`
  position: relative;
`;
