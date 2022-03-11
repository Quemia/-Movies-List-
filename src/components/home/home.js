import React, { useEffect, useState } from "react";
import api from "../api/api";
import Card from "../card/card";
import Navbar from "../navbar/navbar";
import Input from "../input/input";
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
      <Navbar />
      <Input />
      <ContainerCard>
        {movies.map((movie) => (
          <Card movie={movie} />
        ))}
      </ContainerCard>
    </>
  );
};

export default Home;
