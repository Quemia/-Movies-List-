import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { MdOutlineFavorite } from "react-icons/md";
import Navbar from "../navbar/navbar";
import { IoReturnDownBackOutline } from "react-icons/io5";
import api from "../../api/api";
import { movieHash } from "../card/card.js";
import {
  BackButton,
  DescriptionContainer,
  ImageMovie,
  TitleMovie,
  OriginalTitleMovie,
  DescriptionMovie,
  Informations,
  LikeButton,
  ImagemDiv,
} from "./style.js";

const Description = () => {
  const [movieDesc, setMovieDesc] = useState([]);
  const { cover_movie } = useParams();

  const getApiData = async () => {
    const responseData = await api.get("https://ghibliapi.dev/films");
    const movie = responseData.data.find((m) => movieHash(m) === cover_movie);

    if (movie) {
      setMovieDesc(movie);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  const { title, original_title, image, description } = movieDesc;

  return (
    <>
      <Navbar />
      <DescriptionContainer>
        <ImagemDiv>
          <ImageMovie src={image} alt={title} />
        </ImagemDiv>

        <Informations>
          <TitleMovie>{title}</TitleMovie>
          <OriginalTitleMovie>{original_title}</OriginalTitleMovie>
          <DescriptionMovie>{description}</DescriptionMovie>

          <Link to={"/"}>
            <BackButton>
              <IoReturnDownBackOutline />
            </BackButton>
          </Link>
          <LikeButton>
            <MdOutlineFavoriteBorder />
            {/* <MdOutlineFavorite /> */}
          </LikeButton>
        </Informations>
      </DescriptionContainer>
    </>
  );
};

export default Description;
