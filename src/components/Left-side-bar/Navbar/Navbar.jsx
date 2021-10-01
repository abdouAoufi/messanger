import React from "react";
import Box from "@mui/material/Box";
import MainIcon from "./MainIcons/MainIcon";

export default function Navbar() {
  return (
    <Box
      sx={{
        display: { xs: "none", lg: "flex" },
        justifyContent: "space-between",
        alignItems: "center",
        minWidth: "100%",
        minHeight: "52px",
        py: 0.8,
      }}
    >
      <Box
        sx={{
          typography: "body2",
          textAlign: "left",
          fontWeight: "bold",
          fontSize: "h5.fontSize",
          lineHeight: "h5.lineHeight",
        }}
      >
        Chats
      </Box>
      <MainIcon />
    </Box>
  );
}
