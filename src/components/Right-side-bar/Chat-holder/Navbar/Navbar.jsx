import React from "react";
import styled from "styled-components";
import ProfileContainer from "./ProfileContainer/ProfileContainer";
import MainIcons from "./MainIcons/MainIcons";

export default function Navbar() {
  return (
    <Wrapper>
      <ProfileContainer />
      <MainIcons />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 100%;
  box-shadow: 3px 0 0 #c3c3c3;
  background-color: white;
  border-bottom: 1px solid #e4e6eb;
  padding: 0 0.8rem;
  justify-content: space-between;
  height: 56px;
  display: flex;
  position: sticky;
  right: 0;
  top: 0;
  left: 0;
  z-index: 100;
  align-items: center;
`;
