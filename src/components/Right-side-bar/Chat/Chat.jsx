import React from "react";
import styled from "styled-components";
import ProfileContainer from "./Profile-container/ProfileContainer";
import MessageHolder from "./MessageHolder/MessageHolder";

export default function Chat() {
  return (
    <>
      <ProfileContainer />
      <MessageHolder />
    </>
  );
}
