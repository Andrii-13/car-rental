import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { MainTheme } from 'globalStyles';
import { GlobalStyle } from 'globalStyles/GlobalStyle';
import { App } from 'components';
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}> 
    <BrowserRouter basename="/car-rental">
    <PersistGate persistor={persistor}>
      <ThemeProvider theme={MainTheme}>
        <App />
      </ThemeProvider>
      <GlobalStyle />
      </PersistGate>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
