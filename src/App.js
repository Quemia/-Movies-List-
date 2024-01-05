import React, { useState } from "react";
import RoutesApp from "./router";
import styled, { ThemeProvider } from "styled-components";
import themes from "./styles/themes";
import { AppContainer } from "../src/styles/globalStyles";
import Navbar from "./components/navbar/navbar";

function App() {
  const [theme, setTheme] = useState("light");


  // theme={themes[Themedefault]}
  return (
    <ThemeProvider theme={themes[theme]}>
      <AppContainer>
        <RoutesApp />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
