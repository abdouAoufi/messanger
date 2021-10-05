import React from "react";
import Box from "@mui/material/Box";
import logo from "../../assests/images/logo.png";
import styled from "styled-components";
import { Typography } from "@mui/material";
import Title from "../../components/Typography/Title";
import Button from "../../components/Button/Button";
import { APP_DESCRIPTION } from "../../assests";
import { Link } from "react-router-dom";

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
      <Title>Welcome</Title>
      <Typography
        sx={{ maxWidth: "290px", color: "#050505" }}
        variant="p"
        component="p"
      >
        {APP_DESCRIPTION}
      </Typography>

      <Link to="/setup">
        <Button>Get started</Button>
      </Link>
    </Box>
  );
}

export default GetStarted;

const Logo = styled.img`
  height: 100px;
  width: 100px;
`;
