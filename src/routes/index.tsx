// src/routes/index.tsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import MainLayout from "../layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, // Layout base
    children: [
      { index: true, element: <Home /> }, // Ruta "/"
      { path: "about", element: <About /> }, // Ruta "/about"
    ],
  },
  {
    path: "*",
    element: <Home />, // Opcional: página de error o redirección
  },
],{basename:"/home"});

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
