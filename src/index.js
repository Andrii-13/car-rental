import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { MainTheme } from 'globalStyles';
import { GlobalStyle } from 'globalStyles/GlobalStyle';
import { App } from 'components';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/car-rental">
      <ThemeProvider theme={MainTheme}>
        <App />
      </ThemeProvider>
      <GlobalStyle />
    </BrowserRouter>
  </React.StrictMode>
);
