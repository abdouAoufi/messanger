import React from "react";
import Box from "@mui/material/Box";
import Navbar from "./Navbar/Navbar";
import SearchBar from "./Searchbar/SearchBar";
import { Separator } from "../Separator/Separator";

export default function LeftSideBar() {
  return (
    <Box
      typography="subtitle"
      sx={{
        margin: "0 auto",
        minWidth: "100px",
        width: { lg: "360px" },
        maxWidth: "360px",
        padding: "4px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        placeItems: "center",
      }}
    >
      <Navbar />
      <SearchBar />
      <Separator mini/>
      {/* <ProfileContainer/> */}
    </Box>
  );
}
