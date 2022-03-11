import styled from "styled-components";

export const InputContent = styled.input`
  width: 400px;
  height: 35px;
  margin: 60px 30px 20px;
  padding-left: 10px;

  border: 1px solid #d0d0d0;
  border-radius: 5px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);

  text-align: left;
  font-family: "Roboto", "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 21px;
  color: #000;

  &:focus {
    border: transparent;
  }

  @media (max-width: 523px) {
    width: 200px;
    height: 35px;
    margin: 60px 10px 0;
  }
`;
