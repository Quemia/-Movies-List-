import React from "react";
import { CgDarkMode } from "react-icons/cg";

import { NavbarContainer, ImageLogo, ModeText } from "./navbar.style.js";

const Navbar = () => {
  return (
    <NavbarContainer>
      <ImageLogo/>
      <ModeText>
        <CgDarkMode />
      </ModeText>
    </NavbarContainer>
  );
};

export default Navbar;
