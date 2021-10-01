import React from "react";
import Avatar from "@mui/material/Avatar";

export default function AvatarContainer({ firstLetter, size }) {
  return (
    <>
      <Avatar
        sx={{
          bgcolor: "#feb062",
          height: size === "mini" ? 36 : size === "tiny" ? 30 : 56,
          width: size === "mini" ? 36 : size === "tiny" ? 30 : 56,
          mr: size === "tiny" ? 1.0 : 1.5,
        }}
      >
        {firstLetter}
      </Avatar>
    </>
  );
}
