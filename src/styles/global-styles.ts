import { createGlobalStyle } from 'styled-components';

//IMPORTAMOS NO INDEX.JSX MAIN!
export const GlobalStyles = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin:0;
    padding:0;
  }

  html {
    //colocamos isso para usar rem
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body{
    //2.4rem = 24 px
    font-size: 1.6rem;
    font-family: 'Open Sans', sans-serif;
  }

  h1, h2, h3, h4, h5 , h6 {
    font-family: 'Montserrat', sans-serif;
    margin: ${({ theme }) => theme.spacings.large} 0;

  }

  p{
    margin: ${({ theme }) => theme.spacings.medium} 0;
  }

  ul, ol{
    margin: ${({ theme }) => theme.spacings.medium};
    padding: ${({ theme }) => theme.spacings.medium};
  }

  a{
    color: ${({ theme }) => theme.colors.secondaryColor}
  }

  .table {
    width: 100%;
    overflow-y: auto;
  }
`;
