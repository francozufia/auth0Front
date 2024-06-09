import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Auth0ProviderWithNavigate } from "./components/auth0/Auth0ProviderWithNavigate";
import { BrowserRouter } from "react-router-dom";

//const domain = import.meta.env.VITE_AUTH0_DOMAIN;
//const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
//const audience = import.meta.env.VITE_AUTH0_AUDIENCE;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0ProviderWithNavigate>
        <App />
      </Auth0ProviderWithNavigate>
    </BrowserRouter>
  </React.StrictMode>
);
