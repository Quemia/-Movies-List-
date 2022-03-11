import styled from "styled-components";

export const NavbarContainer = styled.div`
  background-color: rgb(26 140 255);
  background: linear-gradient(to top left, #8ec6ff, #0f2998);

  width: 100%;
  height: 100px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TitlePage = styled.h1`
  margin: 0 25px;

  font-family: "Amatic SC", "Arima Madurai", "Amaranth";
  font-weight: normal;
  font-size: 50px;
  color: #fff;

  cursor: pointer;

  @media (max-width: 523px) {
    font-size: 30px;
    font-weight: bold;
    margin: 0 15px;
  }
`;

export const ModeText = styled.h3`
  margin: 0 25px;

  font-family: "Amatic SC", "Arima Madurai", "Amaranth";
  font-weight: 600;
  font-size: 30px;
  color: #fff;

  cursor: pointer;

  @media (max-width: 523px) {
    font-size: 25px;

    margin: 0 15px;
  }
`;
