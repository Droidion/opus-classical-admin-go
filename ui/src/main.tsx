import React from "react";
import ReactDOM from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";
import "./index.scss";
import { QueryClient, QueryClientProvider } from "react-query";
import { router } from "./router";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <GoogleOAuthProvider clientId={import.meta.env.VITE_OAUTH_CLIENT_ID}>
    <QueryClientProvider client={queryClient}>
      <React.StrictMode>
        <RecoilRoot>
          <RouterProvider router={router} />
        </RecoilRoot>
      </React.StrictMode>
    </QueryClientProvider>
  </GoogleOAuthProvider>
);
