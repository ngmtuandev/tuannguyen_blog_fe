import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routing/routes.tsx";
import "react-toastify/dist/ReactToastify.css";
import "./config/i18n.ts";
import { RecoilRoot } from "recoil";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RecoilRoot>
    <RouterProvider router={router}></RouterProvider>
  </RecoilRoot>
);
