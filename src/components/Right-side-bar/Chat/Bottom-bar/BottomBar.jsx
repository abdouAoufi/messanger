import React from "react";
import Box from "@mui/material/Box";
import styled from "styled-components";

export default function BottomBar() {
  return <Wrapper></Wrapper>;
}

const Wrapper = styled.div`
  width: 100%;
  height: 52px;
  background-color: white;
  position: sticky;
  bottom: 0;
  right: 0;
  left: 0;
  border: 1px solid #c4c4c4;
`;
