import styled from "styled-components";

export const Container = styled.div`
  margin: 30px 10px;
  width: 220px;
  padding: 5px;
  /* background-color: #000; */
  background-color: ${({ theme }) => theme.color.CardColor};
  border: none;
  border-radius: 8px;
`;

export const CardBaner = styled.img`
  /* width: 300px; */
  /* height: 400px; */
  width: 200px;
  height: 300px;
  border-radius: 8px;
  margin: 5px 10px;
  cursor: pointer;
`;

export const CardTitle = styled.h2`
  margin: 3px 10px;
  color: ${({ theme }) => theme.color.CardColorText};
  font: normal 400 1.5em/30px "Amaranth";
`;

export const CardOriginalTitleRomanised = styled.h3`
  margin: 10px 10px 2px;
  color: ${({ theme }) => theme.color.CardColorText};
  font: normal 400 1.17em/20px "Amaranth";
`;

export const CardOriginalTitle = styled.h5`
  margin: 10px 10px 5px;
  color:  ${({ theme }) => theme.color.CardColorText};
  font: normal 400 .83em/10px "Amaranth";
`;
