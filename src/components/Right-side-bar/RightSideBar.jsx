import React from "react";
import Box from "@mui/material/Box";
import Navbar from "./Navbar/Navbar";
import Chat from "./Chat/Chat";


export default function RightSideBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Navbar />
      <Chat />
    </Box>
  );
}
