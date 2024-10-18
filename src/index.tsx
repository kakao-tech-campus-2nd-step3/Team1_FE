import { ChakraProvider } from "@chakra-ui/react";
import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";

import { queryClient } from "./api/instance";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

async function deferRender() {
  if (process.env.REACT_APP_RUN_MSW === "true") {
    const { worker } = await import("./mocks/browser");
    await worker.start();
  }

  return;
}

deferRender().then(() => {
  root.render(
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ChakraProvider>
    </QueryClientProvider>,
  );
});
