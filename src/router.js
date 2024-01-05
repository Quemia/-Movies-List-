import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/home";
import Description from "./components/description/description";

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route
          path="/description/:themeColor/:cover_movie"
          exact
          element={<Description />}
        />
      </Routes>
    </BrowserRouter>
  );
}
