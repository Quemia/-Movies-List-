import React, { useEffect, useState } from "react";
import api from "../api/api";
import Card from "../card/card";
import Navbar from "../navbar/navbar";
import Input from "../input/input";
import { ContainerCard } from "./home.style.js";

const Home = () => {
  const [movies, setMovies] = useState([]);

  const getApiData = async () => {
    const responseData = await api.get("https://ghibliapi.dev/films");
    setMovies(responseData.data);
    console.log(responseData);
  };

  useEffect(() => {
    getApiData();
  }, []);

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
