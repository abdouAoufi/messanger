import React from "react";
import Box from "@mui/system/Box";

export default function Layout({ children }) {
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ display: "flex", height: "100vh" }}>{children}</Box>
    </Box>
  );
}
