import React from "react";
import styled from "styled-components";
import CallIcon from "@mui/icons-material/Call";
import VideocamIcon from "@mui/icons-material/Videocam";
import InfoIcon from "@mui/icons-material/Info";

export default function MainIcons() {
  return (
    <IconContainer>
      <CallIcon sx={iconConfiguratoin} />
      <VideocamIcon sx={iconConfiguratoin} />
      <InfoIcon sx={iconConfiguratoin} />
    </IconContainer>
  );
}

const IconContainer = styled.div`
  display: flex;
  align-items: center;
`;

const iconConfiguratoin = { color: "#00b4b0", mx: 0.6 };
