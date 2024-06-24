import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Header } from "../components";
import { Outlet, useLocation } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import path from "../utils/path";
import { ToastContainer } from "react-toastify";

const Layout = () => {
  const queryClient = new QueryClient();
  const location = useLocation();
  return (
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
  );
};

export default Layout;
