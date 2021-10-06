import React from "react";
import Navbar from "./Navbar/Navbar";
import Chat from "./Chat/Chat";
import BottomBar from "./Chat/Bottom-bar/BottomBar";
import Box from "@mui/material/Box";

function ChatHolder() {
  return (
    <Box
      component="div"
      sx={{
        px: 1,
        minHeight: "100vh",
        border: "1px solid black",
        postion: "relative",
      }}
    >
      <Navbar />
      <Chat />
      <BottomBar />
    </Box>
  );
}

export default ChatHolder;
