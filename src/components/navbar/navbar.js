import React, { useState } from "react";
import { CgDarkMode } from "react-icons/cg";
import themes from "../../styles/themes/index.js";

import { NavbarContainer, ModeText } from "./navbar.style.js";

const Navbar = ({ theme }) => {
  return (
    <NavbarContainer theme={themes[theme]}>
      <ModeText theme={themes[theme]}>
        <CgDarkMode />
      </ModeText>
    </NavbarContainer>
  );
};

export default Navbar;
