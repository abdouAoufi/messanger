import React from "react";
import Box from "@mui/material/Box";
import styled from "styled-components";
import Avatar from "../../../Avatar/Avatar";


export default function ProfileContainer() {
  return (
    <>
      <ProfileContainerr>
        <Avatar firstLetter="A" size="mini" />
        <Box sx={{ typography: "body1" }}>Aoufi Abderahmane</Box>
      </ProfileContainerr>
    </>
  );
}

const ProfileContainerr = styled.div`
  display: flex;
  align-items: center;
`;
