import React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";

export default function SearchBar() {
  return (
    <Box sx={{ display: "flex", width: "100%", mt: { xs: 2, sm: 0.35 } }}>
      <Input placeholder="Search Messenger"/> 
    </Box>
  );
}

const Input = styled.input`
  width: 85%;
  margin: 0 auto;
  outline: none;
  background-color: #e4e4eb;
  border: 0;
  border-radius: 2rem;
  padding: 10px 14px;
  font-size: 1rem;
`;
