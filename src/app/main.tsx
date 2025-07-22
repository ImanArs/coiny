import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "./providers/ErrorBoundary.tsx";
import WebApp from "@twa-dev/sdk";
import { BackgroundLines } from "@/shared/ui/background-lines.tsx";
import { MainPage } from "@/pages/main-page.tsx";

WebApp.ready();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BackgroundLines>
      <ErrorBoundary>
        <BrowserRouter>
          <MainPage />
        </BrowserRouter>
      </ErrorBoundary>
    </BackgroundLines>
  </StrictMode>
);
