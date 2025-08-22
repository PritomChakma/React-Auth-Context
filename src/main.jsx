import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Products from "./Components/Products/Products";
import Register from "./Components/Register/Register";
import AuthProvider from "./Components/Shared/AuthProvider";
import "./index.css";
import Root from "./Root";
import PrivateRoute from "./Router/PrivateRoute";
import Profile from "./Pages/Profile/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/products",
        element: <PrivateRoute><Products></Products></PrivateRoute>,
      },
      {
      path:"/profile",
      element: <PrivateRoute><Profile></Profile></PrivateRoute>
      }
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      {" "}
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
