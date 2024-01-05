import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  CardBaner,
  CardTitle,
  CardOriginalTitleRomanised,
  CardOriginalTitle,
} from "./card.style.js";

const kebabCase = (string) =>
  string
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase();

export const movieHash = (movie) => {
  const string = `${movie.title}`;
  return kebabCase(string);
};

const Card = ({ movie, theme, themeColor }) => {

  const url = `/description/${themeColor}/${movieHash(movie)}`;

  return (
    <Container theme={theme}>
      <Link to={url}>
        <CardBaner src={movie.image} alt={movie.title} />
      </Link>
      <CardTitle theme={theme}>{movie.title}</CardTitle>
      <CardOriginalTitleRomanised theme={theme}>
        {movie.original_title_romanised}
      </CardOriginalTitleRomanised>
      <CardOriginalTitle theme={theme}>
        {movie.original_title}
      </CardOriginalTitle>
    </Container>
  );
};

export default Card;
