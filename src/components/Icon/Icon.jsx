import React from "react";
import styled from "styled-components";
import { IconButton } from "@mui/material";

export default function Icon({ children }) {
  return (
    <IconButton sx={{ backgroundColor: "#EEEEEE", mx: 0.5, p: 1.2 }}>
      {children}
    </IconButton>
  );
}
