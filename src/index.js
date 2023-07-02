import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./Theme/theme.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
<<<<<<< HEAD
import'./Theme/Theme.css';
=======
import { UserProvider } from "./Contexts/users";
>>>>>>> 260ad69ab8cd174639900da372d109b30046f877

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
