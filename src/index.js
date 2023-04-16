import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import store from "./store/store";
import { Provider } from "react-redux";
import { GoogleOAuthProvider } from "@react-oauth/google";

// 620750395368-1m1an9map9a75b68dsv5dgt33dun5jan.apps.googleusercontent.com (for server)

// 620750395368 - vh70dum47l5k3me48s9n2mnfnfut2m1q.apps.googleusercontent.com; (for local)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="620750395368-1m1an9map9a75b68dsv5dgt33dun5jan.apps.googleusercontent.com">
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </GoogleOAuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
