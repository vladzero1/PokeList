import styled from "@emotion/styled";
import dynamic from "next/dynamic";
import React from "react";

const Header = dynamic(() => import("../Header"));

const Container = styled.div({
  backgroundColor: "#ffde52",
});

export const Layout: React.FC<{}> = ({ children }) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  );
};
