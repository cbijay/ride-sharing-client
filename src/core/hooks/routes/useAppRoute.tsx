import { AuthContext } from "features/auth/context/authContext";
import Login from "features/auth/pages/Login";
import Signup from "features/auth/pages/Signup";
import SearchRider from "features/dashboard/pages/SearchRider";
import UserDashboard from "features/dashboard/pages/UserDashboard";
import { useContext } from "react";
import { useRoutes } from "react-router-dom";

const useAppRoute = () => {
  const {
    user: { isLoggedIn },
  } = useContext(AuthContext);

  return useRoutes([
    {
      path: "/",
      element: isLoggedIn ? <UserDashboard /> : <Login />,
    },
    {
      path: "/signup",
      element: isLoggedIn ? <UserDashboard /> : <Signup />,
    },
    {
      path: "/search-ride",
      element: isLoggedIn ? <SearchRider /> : <Login />,
    },
    {
      path: "/dashboard",
      element: <UserDashboard />,
    },
  ]);
};

export default useAppRoute;
