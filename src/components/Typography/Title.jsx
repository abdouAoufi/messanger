import React from "react";
import { Typography } from "@mui/material";

export default function Title({ children }) {
  return (
    <Typography
      letterSpacing={2}
      textAlign="center"
      variant="h4"
      component="h2"
      fontWeight="bold"
      color="#3f3b3b"
    >
      {children}
    </Typography>
  );
}
