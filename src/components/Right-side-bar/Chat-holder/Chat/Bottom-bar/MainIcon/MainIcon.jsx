import React from "react";
import ImageIcon from "@mui/icons-material/Image";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import { IconButton } from "@mui/material";
import { Box } from "@mui/system";

export default function MainIcon() {
  return (
    <Box sx={{ display: "flex", alignItems: "center", height: "75%" }}>
      <IconButton sx={{ color: "#00b4b9" }}>
        <ImageIcon />
      </IconButton>
      <IconButton sx={{ color: "#00b4b9" }}>
        <EmojiEmotionsIcon />
      </IconButton>
    </Box>
  );
}
