import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}
  
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: NotoSansR;
    
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
  
  @font-face {
    font-family: NotoSansL;
    src: url('/fonts/NotoSansKR-Light.otf') format('truetype');
  }

  @font-face {
    font-family: NotoSansR;
    src: url('/fonts/NotoSansKR-Regular.otf') format('truetype');
  }
  
  @font-face {
    font-family: NotoSansB;
    src: url('/fonts/NotoSansKR-Bold.otf') format('truetype');
  }
`;
