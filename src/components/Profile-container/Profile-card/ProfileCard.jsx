import React from "react";
import styled from "styled-components";
import Avatar from "../../Avatar/Avatar";
import Box from "@mui/material/Box";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function ProfileCard() {
  return (
    <Wrapper>
      <InnerWrapper>
        <Avatar firstLetter="A" />
        <Box sx={{ display: { xs: "none", lg: "block" } }}>
          <Box sx={{ typography: "subtitle2", color: "#050505" }}>
            Lyes Hamitouche
          </Box>
          <Box
            sx={{ typography: "body2", color: "#65676b", fontWeight: "light" }}
          >
            flil balak
          </Box>
        </Box>
      </InnerWrapper>

      <CheckCircleIcon
        sx={{ color: "#c4c4c4", display: { xs: "none", lg: "block" } }}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
`;

const InnerWrapper = styled.div`
  width: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 1024px) {
    justify-content: start;
  }
`;
