import styled from "styled-components";

export const DescriptionContainer = styled.div`
  padding: 50px 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${({ theme }) => theme.color.backgroundPage};

  /* backgroundPage */

  @media (max-width: 900px) {
    display: block;
  }
`;

export const ImagemDiv = styled.div`
  display: block;
  width: 70%;
  margin: 20px 0px 20px 100px;

  @media (max-width: 900px) {
    margin: 30px 50px;
  }

  @media (max-width: 523px) {
    display: flex;
    justify-content: center;
  }
`;

export const ImageMovie = styled.img`
  width: 300px;
  height: 450px;
  border-radius: 15px;
`;

export const Informations = styled.div`
  display: block;
  width: 70%;
  margin: 20px 50px;

  @media (max-width: 523px) {
    display: block;
  }
`;

export const TitleMovie = styled.h2`
  color: ${({ theme }) => theme.color.CardColorText};
  font: normal 700 30px/40px "Roboto";

  @media (max-width: 523px) {
    font: normal 700 25px/15px "Roboto";
  }
`;

export const OriginalTitleMovie = styled.h3`
  color: ${({ theme }) => theme.color.CardColorText};
  font: normal 400 25px/15px "Roboto";
`;

export const DescriptionMovie = styled.p`
  color: ${({ theme }) => theme.color.CardColorText};
  font: normal 400 20px/30px "Roboto";
`;

export const BackButton = styled.button`
  background-color: transparent;
  border: transparent;

  color: ${({ theme }) => theme.color.CardColorText};
  cursor: pointer;
  font-size: 35px;
`;

export const LikeButton = styled.button`
  font-size: 35px;
  margin-left: 15px;
  color: #47a3ff9c;
  cursor: pointer;

  background-color: transparent;
  border: transparent;
`;
