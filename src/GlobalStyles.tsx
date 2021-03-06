import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body, div, span, a, h1, h2, h3, h4, h5, h6, p, blockquote, img, 
  ol, ul, li, input, label, select, table, tbody, tfoot, thead, tr, th, 
  td, footer, header, menu, nav, section, video{
    margin: 0; padding: 0; font-size: 100%; list-style: none; border: 0;
  }
  body {
    margin: 0;
    padding: 0;
    background: #F4F8FA;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

export default GlobalStyle;
