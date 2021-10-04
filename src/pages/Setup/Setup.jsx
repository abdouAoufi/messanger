import React from "react";
import Box from "@mui/material/Box";
import logo from "../../assests/images/logo.png";
import styled from "styled-components";
import { Typography } from "@mui/material";
import { TextField } from "@mui/material";
import Button from "../../components/Button/Button";

function GetStarted() {
  return (
    <Box
      sx={{
        display: "flex",
        height: "85vh",
        width: "100%",
        flexDirection: "column",
        placeItems: "center",
        justifyContent: "space-around",
      }}
    >
      <Box sx={{ height: "100px", width: "100px" }}>
        <Logo src={logo} alt="logo" />
      </Box>
      <Typography
        textAlign="center"
        variant="h5"
        component="h2"
        fontWeight="bold"
        color="#3f3b3b"
      >
        Set up before you go
      </Typography>
      <Box>
        <TextField
          sx={{ display: "block" }}
          variant="standard"
          label="Your name"
        />
        <TextField
          sx={{ display: "block" }}
          variant="standard"
          label="Your job ( optional )"
        />
      </Box>
      <Button>Start</Button>
    </Box>
  );
}

export default GetStarted;

const Logo = styled.img`
  height: 100px;
  width: 100px;
`;
