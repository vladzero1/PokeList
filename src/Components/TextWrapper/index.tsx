import styled from "@emotion/styled";
import React from "react";
type TextWrapperProps = React.HTMLAttributes<HTMLDivElement>;

const TextContainer = styled.div({
  display: "flex",
  whiteSpace: "pre-wrap",
});

const TextWrapper: React.FC<TextWrapperProps> = ({
  children,
  className,
  ...props
}) => {
  return <TextContainer {...props}>{children}</TextContainer>;
};

export default TextWrapper;
