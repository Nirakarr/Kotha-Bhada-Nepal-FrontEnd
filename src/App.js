import "./App.css";
import { Navigate, Route, Outlet, Routes, useLocation } from "react-router-dom";
import RouteController from "./Components/RouteHandeler/RouteController.jsx";
import AboutUs from "./Components/Header/AboutUs";
import LoginForm from "./Components/AdminLogin/LoginForm";
import RegisterForm from "./Components/AdminLogin/RegisterForm";
import CardDetailsBreak1 from "./Components/CardDetails/CardDetailsBreak1";
import AdminViewInfo from "./Components/AdminDashBoard/AdminViewInfo";
import UpdateInfoTable from "./Components/AdminDashBoard/UpdateInfoTable";
import DeleteInfoTable from "./Components/AdminDashBoard/DeleteInfoTable";
import UserLogin from "./Components/UserLogin/UserLogin";
import { useState } from "react";
import AllPostTable from "./Components/AdminDashBoard/AllPostTable";
import AddPost from "./Components/AdminDashBoard/AddPost";
import { useEffect } from "react";
import UserPostRoom from "./Components/UserPostForm/UserPostRoom";
import {
  PrivateRoute,
  PrivateRouteUser,
} from "./Components/RouteHandeler/PrivateRoute";
import UserRegistration from "./Components/UserLogin/UserRegistration";
import Post2 from "./Components/Cards/Pagination/Post2";

const routeConfig = [
  { path: "/", element: <RouteController /> },
  { path: "/home", element: <RouteController /> },
  { path: "/single", element: <RouteController /> },
  { path: "/double", element: <RouteController /> },
  { path: "/onebhk", element: <RouteController /> },
  { path: "/twobhk", element: <RouteController /> },
  { path: "/others", element: <RouteController /> },
  { path: "/aboutus", element: <AboutUs /> },
  { path: "/home/cards/:id", element: <CardDetailsBreak1 /> },
  { path: "/userRegister", element: <UserRegistration /> },
  { path: "/post2", element: <Post2 /> },
];

function App() {
  const [isAuthenticated, setIsAdminAuthenticated] = useState(false);

  useEffect(() => {
    // Check if the user has an authentication token in sessionStorage
    const token = sessionStorage.getItem("accessToken");
    if (token) {
      setIsAdminAuthenticated(true);
    }
  }, []);

  return (
    <div>
      <Routes>
        {routeConfig.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
        <Route path="/admin" element={<LoginForm />} />
        <Route
          path="/addCard"
          element={<PrivateRoute isAuthenticated={isAuthenticated} />}
        >
          <Route path="/addCard" element={<AddPost />}></Route>
        </Route>
        <Route
          path="/registeradmin"
          element={<PrivateRoute isAuthenticated={isAuthenticated} />}
        >
          <Route path="/registeradmin" element={<RegisterForm />}></Route>
        </Route>
        <Route
          path="/viewallpost"
          element={<PrivateRoute isAuthenticated={isAuthenticated} />}
        >
          <Route path="/viewallpost" element={<AllPostTable />}></Route>
        </Route>
        <Route
          path="/viewinfo/:id"
          element={<PrivateRoute isAuthenticated={isAuthenticated} />}
        >
          <Route path="/viewinfo/:id" element={<AdminViewInfo />}></Route>
        </Route>
        <Route
          path="/updateinfo/:id"
          element={<PrivateRoute isAuthenticated={isAuthenticated} />}
        >
          <Route path="/updateinfo/:id" element={<UpdateInfoTable />}></Route>
        </Route>
        <Route
          path="/deleteinfo/:id"
          element={<PrivateRoute isAuthenticated={isAuthenticated} />}
        >
          <Route path="/deleteinfo/:id" element={<DeleteInfoTable />}></Route>
        </Route>
        <Route path="/userLogin" element={<UserLogin />} />
        <Route
          path="userpost"
          element={<PrivateRouteUser isAuthenticated={isAuthenticated} />}
        >
          <Route path="/userpost" element={<UserPostRoom />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
