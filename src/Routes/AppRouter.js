import React, {
  lazy
} from "react";
import UsersLayout from "../Layout";
import Loadable from "../Components/Loadable";

const Home = Loadable(lazy(() =>
  import( /*webpackChunkName:'HomePage'*/ "../Pages/Home")
))
const Profile = Loadable(lazy(() =>
  import( /*webpackChunkName:'ProfilePage'*/ "../Pages/Profile")
))

const AppRouter = {
  path: '/',
  element: <UsersLayout />,
  children: [{
      path: '/',
      element: <Home />
    },
    {
      path: 'profile',
      element: <Profile />
    },
  ]
};

export default AppRouter;