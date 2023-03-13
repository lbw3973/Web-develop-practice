import { createGlobalStyle } from "styled-components";
import NotoSansBold from "@/assets/fonts/NotoSansKR-Bold.otf";

export default createGlobalStyle`
  @font-face {
    font-family: 'NotoSansBold';
    src: url(${NotoSansBold}) format('opentype');
  }
`;
