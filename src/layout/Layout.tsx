import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Header } from "../components";
import { Outlet, useLocation } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import path from "../utils/path";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import {
  handleGetLocalStorage,
  handleSetLocalStorage,
} from "../helper/Xfunction";
import { I18nextProvider } from "react-i18next";
import i18n from "../config/i18n";
import { DARK_MODE, LANGUAGE } from "../utils/constant";

const Layout = () => {
  const queryClient = new QueryClient();
  const location = useLocation();
  const dark = handleGetLocalStorage(DARK_MODE.KEY);
  useEffect(() => {
    const language = handleGetLocalStorage(LANGUAGE.KEY);
    if (!language) {
      handleSetLocalStorage(LANGUAGE.KEY, LANGUAGE.VI);
    }
    if (!dark) {
      handleSetLocalStorage(DARK_MODE.KEY, DARK_MODE.LIGHT);
    }
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <QueryClientProvider client={queryClient}>
        <>
          <NextUIProvider>
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
            {location.pathname.slice(1, location.pathname.length) !==
              path.LOGIN &&
              location.pathname.slice(1, location.pathname.length) !==
                path.REGISTER && <Header />}
            <Outlet></Outlet>
          </NextUIProvider>
        </>
      </QueryClientProvider>
    </I18nextProvider>
  );
};

export default Layout;
