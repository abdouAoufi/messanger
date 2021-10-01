import React from "react";
import Avatar from "@mui/material/Avatar";

export default function AvatarContainer({ firstLetter, size }) {
  return (
    <>
      <Avatar
        sx={{
          bgcolor: "#feb062",
          height: size === "mini" ? 36 : 56,
          width: size === "mini" ? 36 : 56,
          mr: 1.5,
        }}
      >
        {firstLetter}
      </Avatar>
    </>
  );
}
