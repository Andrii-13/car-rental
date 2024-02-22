import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`

body {
    font-family: 'Manrope', sans-serif;
    font-weight: 400;
    background: #FFFFFF;

  }


h1, h2, h3{
margin: 0;
padding: 0;
}
button{
  padding: 0;
  border: none;
  
}

  img {
    display: block;
    
    max-width: 100%;
    object-fit: cover;
  }

  ul{
    list-style: none;
  }
  a{
    text-decoration: none;    
    /* color: white; */
  }
   
  input, select{
    border-radius: 14px;
  }
 
  p{
    margin: 0;
    padding: 0;
  }
`;
