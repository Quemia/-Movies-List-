import React from "react";
import { Container, CardBaner, CardTitle } from "./style.js";

const Card = ({ movie }) => {
  console.log(movie);

  return (
    <Container>
      <CardBaner src={movie.image} alt={movie.title} />
      <CardTitle>{movie.title}</CardTitle>
      <h3>{movie.original_title_romanised}</h3>
      <h5>{movie.original_title}</h5>
      <h4>{movie.director}</h4>
    </Container>
  );
};

export default Card;
