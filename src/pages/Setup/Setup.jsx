import React, { useReducer, useState } from "react";
import Box from "@mui/material/Box";
import logo from "../../assests/images/logo.png";
import styled from "styled-components";
import { Typography } from "@mui/material";
import { TextField } from "@mui/material";
import Button from "../../components/Button/Button";

const reducer = (state, action) => {
  switch (action.type) {
    case "NO_NAME_PROVIDED":
      return { error: true, errorMessage: "No name provided" };
    case "INVALID_NAME":
      return { error: true, errorMessage: "Invalid name" };
    case "VALID_NAME":
      return { error: false, errorMessage: "" };
    default:
      return state;
  }
};

function GetStarted() {
  const initialState = {
    error: false,
    errorMessage: "",
  };

  const [textState, dispatch] = useReducer(reducer, initialState);
  const [name, setName] = useState("");
  const [occupation, setOccupation] = useState("");

  const validateInput = () => {
    if (name.length === 0) {
      dispatch({ type: "NO_NAME_PROVIDED" });
    } else if (name.length <= 2) {
      dispatch({ type: "INVALID_NAME" });
    } else {
      dispatch({ type: "VALID_NAME" });
      forwardData();
    }
  };

  const forwardData = () => {
    const userInformation = {
      name: name,
      occupation: occupation || "Awesome guest",
    };
    console.log(userInformation);
  };

  return (
    <Wrapper>
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
      <Box component="form">
        <TextField
          sx={{ display: "block", my: 1 }}
          variant="standard"
          label="Name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={textState.error}
          helperText={textState.errorMessage}
        />
        <TextField
          sx={{ display: "block", my: 1 }}
          variant="standard"
          label="Occupation ( optional )"
          value={occupation}
          onChange={(e) => {
            setOccupation(e.target.value);
          }}
        />
      </Box>
      <Button onClick={validateInput}> Start</Button>
    </Wrapper>
  );
}

export default GetStarted;

const Wrapper = styled.div`
  display: flex;
  height: 85vh;
  width: 100%;
  flex-direction: column;
  place-items: center;
  justify-content: space-around;
`;

const Logo = styled.img`
  height: 100px;
  width: 100px;
`;
