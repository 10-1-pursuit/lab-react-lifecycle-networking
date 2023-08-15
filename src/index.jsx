import React from "react";
import ReactDOM from "react-dom";
import {createRoot} from 'react-dom/client';
import "./index.css";

import App from "./App";
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
// ReactDOM.createRoot(document.getElementById('root')).render(
    root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
