import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";
import Loader from "./components/Loader.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense
      fallback={
        <div
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#000000",
          }}
        >
          <Loader />
        </div>
      }
    >
      <App />
    </Suspense>
  </StrictMode>
);
