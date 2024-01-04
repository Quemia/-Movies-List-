import styled from "styled-components";

export const NavbarContainer = styled.div`
  background-color: #47a3ff9c;
  width: 100%;
  height: 100px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ImageLogo = styled.div`
  background-image:url("logo_St.png") ;
  margin: 7px 34px; 
  width : 167px ;
  height: 87px;

  @media (max-width: 523px) {
    font-size: 30px;
    font-weight: bold;
    margin: 0 15px;
  }
`;

export const ModeText = styled.h3`
  margin: 0 25px;
  font-size: 30px;
  color: #000;
  cursor: pointer;

  @media (max-width: 523px) {
    font-size: 25px;
    margin: 0 15px;
  }
`;
