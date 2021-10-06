import React from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Avatar from "../Avatar/Avatar";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function ProfileContainer({ name, lastMessage, id }) {
  return (
    <Box sx={{ width: "100%", overFlow: "scroll" }}>
      <Link to={`/home/chat/${id}`}>
        <Wrapper>
          <InnerWrapper>
            <Avatar margin="medium" firstLetter="A" />
            <Box sx={{ display: { xs: "none", lg: "block" } }}>
              <Box sx={{ typography: "subtitle2", color: "#050505" }}>
                {name || "user"}
              </Box>
              <Box
                sx={{
                  typography: "body2",
                  color: "#65676b",
                  fontWeight: "light",
                }}
              >
                {lastMessage || "start chating"}
              </Box>
            </Box>
          </InnerWrapper>

          <CheckCircleIcon
            sx={{ color: "#c4c4c4", display: { xs: "none", lg: "block" } }}
          />
        </Wrapper>
      </Link>
    </Box>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.25rem 0;
  padding: 4px;
  border-radius: 8px;
  &:hover {
    background-color: #eeeeee;
  }
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
