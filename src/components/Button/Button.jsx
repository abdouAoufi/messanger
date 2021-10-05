import React from "react";
import { Button as MButton } from "@mui/material";

export default function Button({ children , onClick }) {
  return (
    <MButton onClick={onClick} sx={{ px: 2, py: 1.5 , borderRadius : "14px"}} variant="contained">
      {children}
    </MButton>
  );
}
