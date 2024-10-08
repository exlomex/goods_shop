import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import {StoreProvider} from "@/components/Providers/StoreProvider";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "@mui/material";
import {MUITheme} from "@/consts/MUITheme";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <StoreProvider>
            <ThemeProvider theme={MUITheme}>
                <App />
            </ThemeProvider>
        </StoreProvider>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
