import React from "react";
import Box from "@mui/material/Box";
import Navbar from "./Navbar/Navbar";

export default function RightSideBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Navbar />
    </Box>
  );
}
