import React, { useEffect, useState } from "react";
import api from "../api/api";
import Card from "../card/card";
import { ContainerCard, TitlePage } from "./home.style.js";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    api
      .get("/films")
      .then((res) => {
        setMovies(res.data);
      })
      .catch((err) => {
        console.log("Error detected: " + err);
      });
  }, []);

  console.log(movies);

  return (
    <>
      <TitlePage>Ghibli Studios</TitlePage>
      <ContainerCard>
        {movies.map((movie) => (
          <Card movie={movie} />
        ))}
      </ContainerCard>
    </>
  );
};

export default Home;
