import styled from "@emotion/styled";
import React from "react";
import { Loader } from "../Loader";

interface LoadMoreButtonProps {
  target: React.MutableRefObject<any>;
  isLoading: boolean;
}
const ButtonContainer = styled.div({
  display: "flex",
  justifyContent: "center",
  paddingTop: "10px",
  height: "25px",
  width: "100%",
});
const LoadMoreButton: React.FC<LoadMoreButtonProps> = ({
  target,
  isLoading,
}) => {
  return (
    <ButtonContainer ref={target}>
      {isLoading ? <Loader /> : <span>Load More</span>}
    </ButtonContainer>
  );
};

export default LoadMoreButton;
