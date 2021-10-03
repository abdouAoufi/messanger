import React from "react";
import Box from "@mui/material/Box";
import Navbar from "./Navbar/Navbar";
import SearchBar from "./Searchbar/SearchBar";
import { Separator } from "../Separator/Separator";
import ProfileContainer from "../Profile-container/ProfileContainer";

export default function LeftSideBar() {
  return (
    <Box
      sx={{
        position: "relative",
        margin: "0 auto",
        minWidth: "100px",
        borderRight: "1px solid #e4e6eb",
        overflow: "scroll",
        width: { xs: "100px", lg: "380px" },
        maxWidth: "380px",
        display: "flex",
        px: "16px",
        flexDirection: "column",
        justifyContent: "start",
        placeItems: "center",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#FFFFFF",
          width: "100%",
          position: "sticky",
          top: 0,
          right: 0,
          left: 0,
          zIndex: 100,
        }}
      >
        <Navbar />
        <SearchBar />
        <Separator />
      </Box>
      <ProfileContainer />
    </Box>
  );
}
