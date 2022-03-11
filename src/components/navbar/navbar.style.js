import styled from "styled-components";

export const NavbarContainer = styled.div`
  background-color: rgb(26 140 255);
  background: linear-gradient(to top left, #0f2998, #000000);

  width: 100%;
  height: 100px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TitlePage = styled.h3`
  margin: 0 25px;

  font-family: "Amaranth";
  font-weight: normal;
  font-size: 50px;
  color: #fff;

  cursor: pointer;

  @media (max-width: 523px) {
    font-size: 30px;
    margin: 0 15px;
  }
`;

export const ModeText = styled.h1`
  margin: 0 25px;

  font-family: "Amaranth";
  font-weight: normal;
  font-size: 30px;
  color: #fff;

  cursor: pointer;

  @media (max-width: 523px) {
    font-size: 20px;
    margin: 0 15px;
  }
`;
