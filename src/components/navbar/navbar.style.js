import styled from "styled-components";

export const NavbarContainer = styled.div`
  background-color: ${({ theme }) => theme.color.backgroundNavbar};
  width: 100%;
  height: 100px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ImageLogo = styled.div`
  background-image: url("${({ theme }) => theme.image.logoNav}");
  background-repeat: no-repeat;
  margin: 7px 34px;
  width: ${({ theme }) => theme.width.logoWidth};
  height: 87px;

  @media (max-width: 523px) {
    font-size: 30px;
    font-weight: bold;
    margin: 0 15px;
  }
`;

export const ModeText = styled.button`
  background-color: transparent;
  border: transparent;
  margin: 0 25px;
  font-size: 30px;
  color: ${({ theme }) => theme.color.colorNavbar};
  cursor: pointer;

  @media (max-width: 523px) {
    font-size: 25px;
    margin: 0 15px;
  }
`;
