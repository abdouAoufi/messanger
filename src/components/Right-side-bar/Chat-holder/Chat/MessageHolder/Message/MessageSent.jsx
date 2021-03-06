import React from "react";
import styled from "styled-components";
import Avatar from "../../../../../Avatar/Avatar";

export default function MessageSent({ text }) {
  return (
    <Wrapper>
      <Messagee>{text}</Messagee>
    </Wrapper>
  );
}

const Messagee = styled.div`
  max-width: 45%;
  width : fit-content;
  padding: 0.75rem;
  border-radius: 1.5rem;
  margin-top: 8px;
  background-color: #364f6b;
  font-weight: medium;
  color: #ffffff;
  margin-right: 8px;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
`;
