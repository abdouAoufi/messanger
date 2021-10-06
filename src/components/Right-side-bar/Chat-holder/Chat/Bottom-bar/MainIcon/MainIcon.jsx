import React from "react";
import styled from "styled-components";
import ImageIcon from "@mui/icons-material/Image";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

export default function MainIcon() {
  return (
    <Wrapper>
      <ImageIcon sx={iconConfiguratoin} />
      <EmojiEmotionsIcon sx={iconConfiguratoin} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 75%;
`;

const iconConfiguratoin = { color: "#00b4b0", mx: 0.6 };
