import { createGlobalStyle, css } from 'styled-components';

const ResetStyles = createGlobalStyle`
  * {
    box-sizing: border-box;

    margin: 0;
    padding: 0;
    border: 0;

    scrollbar-width: thin;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 95%;
    }
  }

  html {
    overflow-x: hidden;
  }

  body {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
    background-attachment: fixed;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 700;
  }

  h1 {
    font-size: 60px;
  }

  h2 {
    font-size: 36px;
  }

  h3, h4, h5, h6 {
    font-size: 24px;
  }

  button {
    cursor: pointer;
  }

  ul,
  ol,
  li {
    margin: 0;
    padding: 0;

    list-style: none;
  }

  a {
    text-decoration: none;
    outline: none;
    color: inherit;
    cursor: pointer;
  }

  button {
    cursor: pointer;
    outline: none;
    background: none;
  }

  hr {
    border: none;
    background: none;
  }

  textarea {
    resize: none;

    border: 0;
    resize: none;
    outline: none;
  }

  &::-webkit-scrollbar {
    width: 9px;
    background-color: #333;
  }

  &::-webkit-scrollbar-track {
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 5px;

    background-color: white;
  }
`;

export default ResetStyles;
