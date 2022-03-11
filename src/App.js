import React from "react";
import RoutesApp from "./router";
import styled from "styled-components";

const AppContainer = styled.div`
  margin: -8px;
  padding: 0;
`;

function App() {
  return (
    <AppContainer>
      <RoutesApp />
    </AppContainer>
  );
}

export default App;
