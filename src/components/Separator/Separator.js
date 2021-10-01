import styled from "styled-components";

export const Separator = styled.div`
  width: ${(props) => (props.mini ? "90%" : "100%")};
  height: 1px;
  margin: 1.2rem 0;
  background-color: #c4c4c4;
`;
