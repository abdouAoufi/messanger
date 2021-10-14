import React from "react";
import { IconButton } from "@mui/material";

export default function Icon({ children, onClick }) {
  return (
    <IconButton
      onClick={onClick}
      sx={{ backgroundColor: "#EEEEEE", mx: 0.5, p: 1.2 }}
    >
      {children}
    </IconButton>
  );
}
