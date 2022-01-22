import styled from "@emotion/styled";
import React from "react";
import { MenuList } from "../../Constant";
import PokemonLogo from "../../PokemonLogo.png";
import Image from "next/image";
import HamburgerNav from "../HamburgerNav/lazy";
import Link from "next/link";

const FakeDiv = styled.div({
  width: "80px",
});

const HeaderContainer = styled.div({
  height: "50px",
  display: "flex",
  alignContent: "center",
  justifyContent: "space-between",
  borderBottom: "1px black solid",
});

const Header: React.FC<{}> = () => {
  return (
    <HeaderContainer aria-label="Header Container">
      <HamburgerNav list={MenuList} />
      <Link href={"/"} passHref={true}>
        <Image
          src={PokemonLogo}
          width={110}
          height={39}
          alt="Pokemon Logo"
          priority={true}
        />
      </Link>

      <FakeDiv />
    </HeaderContainer>
  );
};

export default Header;
