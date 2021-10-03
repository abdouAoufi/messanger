import React from "react";
import Box from "@mui/system/Box";

export default function Layout({ children }) {
  return (
    <Box sx={{ width: "100%", position: "fixed", top: 0, bottom: 0 , right : 0, left : 0}}>
      <Box sx={{ display: "flex", height: "100%" }}>{children}</Box>
    </Box>
  );
}
