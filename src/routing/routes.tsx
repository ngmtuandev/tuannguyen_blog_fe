import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import path from "../utils/path";
import { Home, Login, PostDetail, Register } from "../components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      { path: path.HOME, element: <Home></Home> },
      { path: path.LOGIN, element: <Login></Login> },
      { path: path.POST_DETAIL__SLUG, element: <PostDetail></PostDetail> },
      { path: path.REGISTER, element: <Register></Register> },
    ],
  },
]);

export default router;
