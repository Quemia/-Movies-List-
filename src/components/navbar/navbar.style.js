import styled from "styled-components";

export const NavbarContainer = styled.div`
  background-color: ${({ theme }) => theme.color.backgroundNavbar};
  width: 100%;
  height: 100px;

  display: flex;
  justify-content: space-between;
  align-items: center;
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
