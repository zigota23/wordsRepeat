import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import GlobalContextProvider from "./globalContext";
import "./index.css";
import WrapperJoyTheme from "./wrappers/joyTheme";

const client = new QueryClient({
  defaultOptions: {
    mutations: {
      retry: false,
    },
    queries: {
      retry: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <QueryClientProvider client={client}>
      <GlobalContextProvider>
        <WrapperJoyTheme>
          <App />
        </WrapperJoyTheme>
      </GlobalContextProvider>
    </QueryClientProvider>
  </BrowserRouter>
);
