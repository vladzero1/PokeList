import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import HamburgerLogo from "../../hamburgerLogo.svg";
import { NavData } from "../../Types";

const HamburgerIcon = styled.div({
  width: "92px",
  height: "50px",
  display: "flex",
  flexWrap: "wrap",
  alignContent: "center",
});
const MenuContainer = styled.div({
  display: "flex",
  position: "absolute",
  flexDirection: "column",
  transitionDuration: "0.3s",
  backgroundColor: "white",
  height: "100%",
  width: "250px",
  zIndex: 1,
  transform: "translateX(250px)",
});
const MenuBackground = styled.div({
  position: "absolute",
  height: "100vh",
  width: "100vw",
  backgroundColor: "black",
  opacity: 0.3,
});
const MenuItem = styled.button({
  minHeight: "50px",
  maxHeight: "150px",
});

interface HamburgerNavProps {
  list: NavData[];
}

const HamburgerNav: React.FC<HamburgerNavProps> = ({ list }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toogleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <HamburgerIcon onClick={toogleIsOpen}>
        <HamburgerLogo />
      </HamburgerIcon>
      <MenuContainer style={{ marginLeft: isOpen ? "-250px" : "-500px" }}>
        {list.map(({ description, url }) => {
          return (
            <Link href={url} passHref={true} key={description}>
              <MenuItem onClick={toogleIsOpen}>{description}</MenuItem>
            </Link>
          );
        })}
      </MenuContainer>
      <MenuBackground
        style={{ display: isOpen ? "flex" : "none" }}
        onClick={toogleIsOpen}
      />
    </>
  );
};

export default HamburgerNav;
