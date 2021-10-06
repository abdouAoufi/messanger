import React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Avatar from "../../../../Avatar/Avatar";

export default function ProfileContainer({ name, occupation }) {
  return (
    <Box sx={{ mt: 12, width: "100%" }}>
      <ProfileWrapper>
        <Avatar firstLetter={name[0] ? name[0].toUpperCase() : "A"} />
        <div>
          {name && (
            <Box
              sx={{
                textAlign: "center",
                typographie: "body2",
                mt: 1.4,
                color: "#050505",
              }}
            >
              abdou
            </Box>
          )}
          {occupation && (
            <Box
              sx={{
                typographie: "body2",
                mt: 0.6,
                fontWeight: "regular",
                color: "#7e7474",
              }}
            >
              {occupation}
            </Box>
          )}
        </div>
      </ProfileWrapper>
    </Box>
  );
}

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  justify-content: center;
`;
