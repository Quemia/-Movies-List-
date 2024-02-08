import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { IoReturnDownBackOutline } from "react-icons/io5";
import api from "../../api/api";
import { movieHash } from "../card/card.js";
import themes from "../../styles/themes/index.js";

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
  ContentDescription,
} from "./description.style.js";
import Navbar from "../navbar/navbar.js";
import { ThemeContext } from "../home/home.js";

const Description = () => {
  const [movieDesc, setMovieDesc] = useState([]);
  const { cover_movie } = useParams();
  const { themeColor } = useParams();

  const value = React.useContext(ThemeContext);
  console.log("---  ", value)

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
    <ContentDescription theme={themes[themeColor]}>
      <Navbar theme={themeColor} />
      <DescriptionContainer theme={themes[themeColor]}>
        <ImagemDiv>
          <ImageMovie src={image} alt={title} />
        </ImagemDiv>

        <Informations>
          <TitleMovie theme={themes[themeColor]}>{title}</TitleMovie>
          <OriginalTitleMovie theme={themes[themeColor]}>
            {original_title}
          </OriginalTitleMovie>
          <DescriptionMovie theme={themes[themeColor]}>
            {description}
          </DescriptionMovie>

          <Link to={`/${themeColor}`}>
            <BackButton theme={themes[themeColor]}>
              <IoReturnDownBackOutline />
            </BackButton>
          </Link>
          <LikeButton theme={themes[themeColor]}>
            <MdOutlineFavoriteBorder />
            {/* <MdOutlineFavorite /> */}
          </LikeButton>
        </Informations>
      </DescriptionContainer>
    </ContentDescription>
  );
};

export default Description;
