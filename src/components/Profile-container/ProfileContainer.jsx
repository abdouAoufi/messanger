import React from "react";
import Box from "@mui/material/Box";
import ProfileCard from "./Profile-card/ProfileCard";

export default function ProfileContainer() {
  return (
    <Box sx={{ width: "100%" , overFlow : "scroll" }}>
      <ProfileCard />
    </Box>
  );
}
