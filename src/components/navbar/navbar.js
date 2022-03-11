import React from "react";
import { NavbarContainer, TitlePage, ModeText } from "./navbar.style.js";

const Navbar = () => {
  return (
    <NavbarContainer>
      <TitlePage>Ghibli Studios</TitlePage>
      <ModeText>Dark Mode</ModeText>
    </NavbarContainer>
  );
};

export default Navbar;
