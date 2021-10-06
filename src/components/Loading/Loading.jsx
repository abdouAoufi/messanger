import React from "react";
import Typography from "@mui/material/Typography";
import { TYPO_COLORS } from "../../assests";

export default function Loading({ mt }) {
  return (
    <Typography
      variant="body1"
      sx={{ color: TYPO_COLORS.lessBlack, textAlign: "center", mt: +mt || 0 }}
    >
      Loading users...
    </Typography>
  );
}
