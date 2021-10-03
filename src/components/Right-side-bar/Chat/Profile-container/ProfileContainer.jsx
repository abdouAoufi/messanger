import React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Avatar from "../../../Avatar/Avatar";

export default function ProfileContainer() {
  return (
    <Box sx={{ mt: 12, width: "100%" }}>
      <ProfileWrapper>
        <Avatar firstLetter="A" />
        <Box
          sx={{
            typographie: "body1",
            mt: 1.4,
            color: "#050505",
            fonWeight: "medium",
          }}
        >
          Aoufi Abderahmnae
        </Box>
        <Box
          sx={{
            typographie: "body2",
            mt: 0.6,
            fontWeight: "regular",
            color: "#7e7474",
          }}
        >
          New friend
        </Box>
      </ProfileWrapper>
    </Box>
  );
}

const ProfileWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  place-items: center;
  justify-content: center;
`;
