import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import path from "../utils/path";
import {
  AboutMe,
  EditProfile,
  Home,
  LayoutManage,
  Login,
  Post,
  PostItemDetail,
  PostManage,
  Register,
  SocialMedia,
  UserManage,
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
      { path: path.EDIT_PROFILE, element: <EditProfile /> },
    ],
  },
  {
    path: path.ADMIN,
    element: <LayoutManage></LayoutManage>,
    children: [
      { path: path.ADMIN_USER, element: <UserManage /> },
      { path: path.ADMIN_POST, element: <PostManage /> },
    ],
  },
]);

export default router;
