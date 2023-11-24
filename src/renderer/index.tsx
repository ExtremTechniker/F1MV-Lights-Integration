import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline, Grow, ThemeProvider } from "@mui/material";
import * as Sentry from "@sentry/electron/renderer";
import { SnackbarProvider } from "notistack";
import { HashRouter, Route, Routes } from "react-router-dom";
import packageJson from "../../package.json";
import { Main } from "./pages/Main";
import { HomePage } from "./pages/Home";
import { theme } from "./lib/theme";
import { ConfigProvider } from "./hooks/useConfig";
import { MinimalScrollbars } from "./components/shared/MinimalScrollbars";
import { BaseStyle } from "./components/shared/BaseStyle";
import { SettingsPage } from "./pages/Settings";
import { EventEditorPage } from "./pages/EventEditor";

Sentry.init({
  dsn: "https://e64c3ec745124566b849043192e58711@o4504289317879808.ingest.sentry.io/4504289338392576",
  //enabled: process.env.NODE_ENV === "production",
  release: "F1MV-Lights-Integration@" + packageJson.version,
  environment: process.env.VITE_DEV_SERVER_URL ? "development" : "production",
  integrations: [
    new Sentry.BrowserTracing({
      traceFetch: true,
      tracePropagationTargets: ["localhost", "api.jstt.me"],
    }),
    new Sentry.Replay({
      maskAllText: false,
      maskAllInputs: false,
      blockAllMedia: false,
    }),
  ],
  replaysSessionSampleRate: 0.2,
  replaysOnErrorSampleRate: 1.0,
  tracesSampleRate: 1.0,
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <ConfigProvider>
      <SnackbarProvider
        autoHideDuration={3000}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        maxSnack={2}
        TransitionComponent={Grow}
      >
        <ThemeProvider theme={theme}>
          {window.f1mvli.platform !== "darwin" && <MinimalScrollbars />}
          <BaseStyle />
          <CssBaseline />
          <HashRouter>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/event-editor" element={<EventEditorPage />} />
            </Routes>
          </HashRouter>
        </ThemeProvider>
      </SnackbarProvider>
    </ConfigProvider>
  </React.StrictMode>,
);
