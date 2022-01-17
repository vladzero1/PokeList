import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Loading = styled.div`
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #ee1515;
  width: 120px;
  height: 120px;
  animation: ${spin} 1s linear infinite;
`;

const Container = styled.div({
  display: "flex",
  justifyContent: "center",
  padding: "10px 0px",
});
export const Loader: React.FC<{}> = ({}) => {
  return (
    <Container>
      <Loading />
    </Container>
  );
};
