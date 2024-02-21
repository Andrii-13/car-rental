import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`

body {
    font-family: 'Manrope', sans-serif;
    font-weight: 400;
    background: #FFFFFF;
  }


h1, h2{
  /* margin-top: 50px;
text-align: center;
color: gray; */
}
button{
  /* padding: 0; */
}

  img {
    /* display: block;
    max-width: 100%;
    object-fit: cover; */
  }

  ul{
    list-style: none;
  }
  a{
    text-decoration: none;    
    /* color: white; */
  }
   

`;
