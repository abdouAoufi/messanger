import React from "react";
import CallIcon from "@mui/icons-material/Call";
import { Box } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { IconButton } from "@mui/material";

export default function MainIcons() {
  return (
    <Box sx={{ displayFlex: "flex", alignItems: "center" }}>
      <IconButton sx={{ color: "#00b4b0" }} size="large">
        <CallIcon />
      </IconButton>
      <IconButton sx={{ color: "#00b4b0" }} size="large">
        <InfoIcon />
      </IconButton>
    </Box>
  );
}
