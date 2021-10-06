import React from "react";
import Avatar from "@mui/material/Avatar";

export default function AvatarContainer({ firstLetter, size, margin }) {
  return (
    <>
      <Avatar
        sx={{
          bgcolor: "#feb062",
          height: size === "mini" ? 36 : size === "tiny" ? 30 : 56,
          width: size === "mini" ? 36 : size === "tiny" ? 30 : 56,
          mr: margin === "tiny" ? 1.0 : margin === "medium" ? 1.5 : 0,
        }}
      >
        {firstLetter}
      </Avatar>
    </>
  );
}
