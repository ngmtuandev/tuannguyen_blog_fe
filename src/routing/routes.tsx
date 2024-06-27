import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import path from "../utils/path";
import {
  AboutMe,
  Home,
  Login,
  Post,
  PostItemDetail,
  Register,
  SocialMedia,
} from "../components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      { path: path.HOME, element: <Home /> },
      { path: path.LOGIN, element: <Login /> },
      {
        path: path.POST_DETAIL__SLUG,
        element: <PostItemDetail></PostItemDetail>,
      },
      { path: path.REGISTER, element: <Register /> },
      { path: path.SOCIAL_MEDIA, element: <SocialMedia /> },
      { path: path.ABOUT_ME, element: <AboutMe /> },
      { path: path.BLOG, element: <Post /> },
    ],
  },
]);

export default router;
