import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import QrScanPage from "./QrScanPage";
import "./index.css";

const pathname = window.location.pathname.replace(/\/+$/, "") || "/";
const isQrScanRoute = pathname === "/qr-scan";
const RootComponent = isQrScanRoute ? QrScanPage : App;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RootComponent />
  </React.StrictMode>
);
