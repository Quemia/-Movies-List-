import React, { useState } from "react";
import RoutesApp from "./router";
import styled, { ThemeProvider } from "styled-components";
import themes from "./styles/themes";
import { AppContainer } from "../src/styles/globalStyles";

function App() {
  return (
    <AppContainer>
      <RoutesApp />
    </AppContainer>
  );
}

export default App;
