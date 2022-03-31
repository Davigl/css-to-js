import { createGlobalStyle } from "styled-components";

const BaseStyles = createGlobalStyle`
  :root {
    --primary: #5822b4;
    --secondary: #991eeb;
  }

  * {
    font-family: Montserrat, sans-serif;
  }

  textarea {
    font-family: 'IBM Plex Mono', monospace;
  }
`;

export default BaseStyles;
