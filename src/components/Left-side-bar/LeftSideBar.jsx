import React from "react";
import Box from "@mui/material/Box";
import Navbar from "./Navbar/Navbar";
import SearchBar from "./Searchbar/SearchBar";
import { Separator } from "../Separator/Separator";
import ProfileContainer from "../Profile-container/ProfileContainer";
import { Link } from "react-router-dom";

export default function LeftSideBar() {
  return (
    <Box
      sx={{
        position: "relative",
        margin: "0 auto",
        borderRight: "1px solid #e4e6eb",
        overflow: "scroll",
        minWidth: { xs: "100px", lg: "360px" },
        maxWidth: "380px",
        display: "flex",
        flexGrow: 1,
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
      <Link to="/home/chat">
        <ProfileContainer  />
      </Link>
    </Box>
  );
}
