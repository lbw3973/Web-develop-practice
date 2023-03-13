import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
`;

export const Button = styled.button`
  outline: none;
  border: none;

  ${(props) => props.theme.common};

  /* background-color: ${(props) => props.theme.palette.orange || "blue"}; */
  background-color: ${(props) => (props.isClicked ? "orange" : "violet")};
  border-radius: 10px;
  color: white;
  width: 100px;

  margin: 10px;

  ${(props) => props.theme.fontSizes};

  animation-name: ${fadeIn};
  animation-duration: 1s;
  animation-timing-function: ease-out;

  font-family: "NotoSansBold";
`;
