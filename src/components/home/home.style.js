import styled from "styled-components";

export const ContainerCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const TitlePage = styled.h1`
  margin: 0 auto;
  padding-top: 30px;
  font: normal 400 50px/40px "Amaranth";
  text-align: center;
  color: #fff;
`;

// ////////////////////////
// ////////////////////////
// ////////////////////////
// ////////////////////////

export const Content = styled.div`
  display: flex;
  align-items: baseline;
`;

export const InputContent = styled.input`
  width: 400px;
  height: 35px;
  margin: 60px 30px 20px;
  padding-left: 10px;

  border: 1px solid #d0d0d0;
  border-radius: 5px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);

  text-align: left;
  font: normal 400 15px/21px "Roboto", "Open Sans";
  color: #000;

  &:active {
    border-color: transparent;
  }

  @media (max-width: 523px) {
    width: 200px;
    height: 35px;
    margin: 60px 10px 0;
  }
`;

export const ButtonSearch = styled.button`
  border-radius: 8px;
  border: transparent;

  margin-right: 2px;

  width: 100px;
  height: 38px;
  justify-content: center;
  align-items: center;
  display: flex;

  color: #000;
  background-color: #47a3ff9c;
  font: normal 400 16px/5px "Roboto";

  @media (max-width: 523px) {
    color: transparent;
    width: 50px;
    height: 38px;
    justify-content: right;
    align-items: center;
  }
`;

export const Icon = styled.i`
  margin-left: 3px;
  font-size: 23px;

  @media (max-width: 523px) {
    font-size: 20px;
    color: #000;
    margin-left: -3px;
  }
`;
