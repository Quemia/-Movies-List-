import React, { useEffect, useState } from "react";
import api from "../../api/api";
// import useService from "../../api/api";
import Card from "../card/card";
import Navbar from "../navbar/navbar";
import { IoIosSearch } from "react-icons/io";
import {
  ContainerCard,
  InputContent,
  ButtonSearch,
  Content,
  Icon,
} from "./home.style.js";

const MoviersProps = {
  title: String,
};

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const getApiData = async () => {
    const responseData = await api.get("https://ghibliapi.dev/films");
    setMovies(responseData.data);
  };

  useEffect(() => {
    getApiData();
  }, []);

  const searchLowerCase = search.toLocaleLowerCase(); 

  const Films = movies.filter((film) => film.title.toLocaleLowerCase().includes(searchLowerCase));
  return (
    <>
      <Navbar />
      <Content>
        <InputContent
          type="text"
          placeholder="Movie name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Content>
      <ContainerCard>
        {Films.map((movie) => (
          <Card movie={movie} />
        ))}
      </ContainerCard>
    </>
  );
};

export default Home;
