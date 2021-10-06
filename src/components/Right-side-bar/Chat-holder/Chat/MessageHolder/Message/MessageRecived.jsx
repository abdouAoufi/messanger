import React from "react";
import styled from "styled-components";
import Avatar from "../../../../../Avatar/Avatar";

export default function MessageRecived({ reciver }) {
  return (
    <Wrapper>
      <Avatar margin="tiny" size="tiny" firstLetter="A" />
      <Messagee>Hello its me here we can have </Messagee>
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
  font-weight: medium;
  color: #050505;
`;

const Wrapper = styled.div`
  width: 100%;
  float: left;
  display: flex;
  align-items: center;
`;
