import React, { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import styled from "styled-components";
import Avatar from "../../../../Avatar/Avatar";
import { ChatContext } from "../../../../../context/Chat/Chat";

const ProfileContainer = () => {
  const { currentUser } = useContext(ChatContext);

  console.log(currentUser.name || "null");

  return (
    <>
      {currentUser && (
        <ProfileContainerr>
          <Avatar margin="tiny" firstLetter={currentUser.name[0]} size="mini" />
          <Box sx={{ typography: "body1" }}>{currentUser.name}</Box>
        </ProfileContainerr>
      )}
    </>
  );
};

const ProfileContainerr = styled.div`
  display: flex;
  align-items: center;
`;

export default ProfileContainer;
