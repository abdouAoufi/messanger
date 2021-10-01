import React from "react";
import Avatar from "@mui/material/Avatar";

export default function AvatarContainer({ firstLetter }) {
  return (
    <>
      <Avatar sx={{ bgcolor: "#feb062", height: 56, width: 56, mr: 1.5 }}>
        {firstLetter}
      </Avatar>
    </>
  );
}
