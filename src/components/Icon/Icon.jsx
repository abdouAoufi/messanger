import React from "react";
import styled from "styled-components";

export default function Icon({ children, first }) {
  return <IconWrapper first={first}>{children}</IconWrapper>;
}

const IconWrapper = styled.div`
  padding: 8px;
  margin-left: ${(props) => (props.first ? 0 : "10px")};
  border-radius: 50%;
  cursor: pointer;
  display: grid;
  place-items: center;
  background-color: #e4e6eb;
`;
