import React from "react";
import styled from "styled-components";
import Avatar from "../../../../../Avatar/Avatar";
import { TYPO_COLORS } from "../../../../../../assests";

export default function MessageRecived({ text }) {
  return (
    <Wrapper>
      <Avatar margin="tiny" size="tiny" firstLetter="A" />
      <Messagee>{text}</Messagee>
    </Wrapper>
  );
}

const Messagee = styled.div`
  width: fit-content;
  max-width: 45%;
  padding: 0.75rem;
  border-radius: 1.5rem;
  margin-top: 8px;
  background-color: #e4e6eb;
  color: #3f3b3b;
`;

const Wrapper = styled.div`
  float: left;
  display: flex;
  align-items: center;
`;
