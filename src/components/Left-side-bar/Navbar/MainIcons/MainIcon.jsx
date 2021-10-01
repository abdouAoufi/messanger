import React from "react";
import Box from "@mui/material/Box";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import CreateSharpIcon from "@mui/icons-material/CreateSharp";
import Icon from "../../../Icon/Icon";

export default function MainIcon() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Icon first>
        <MoreHorizIcon />
      </Icon>
      <Icon>
        <VideoCameraBackIcon />
      </Icon>
      <Icon>
        <CreateSharpIcon />
      </Icon>
    </Box>
  );
}
