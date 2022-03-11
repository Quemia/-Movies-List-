import React from "react";
import {
  Container,
  CardBaner,
  CardTitle,
  CardOriginalTitleRomanised,
  CardOriginalTitle,
} from "./card.style.js";

const Card = ({ movie }) => {
  return (
    <Container>
      <CardBaner src={movie.image} alt={movie.title} />
      <CardTitle>{movie.title}</CardTitle>
      <CardOriginalTitleRomanised>
        {movie.original_title_romanised}
      </CardOriginalTitleRomanised>
      <CardOriginalTitle>{movie.original_title}</CardOriginalTitle>
    </Container>
  );
};

export default Card;
