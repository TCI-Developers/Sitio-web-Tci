import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import Contacto from "../pages/Contact";
import BlogDetail from "../pages/BlogDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, // Layout base
    children: [
      { index: true, element: <Home /> }, // Ruta "/"
      { path: "contacto", element: <Contacto /> }, // Ruta "/contacto"
      { path: "blog/:id", element: <BlogDetail/> }, // Ruta "/blog"
    ],
  },
  {
    path: "*",
    element: <Home />, // Opcional: página de error o redirección
  },
],{basename:"/home/"});

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
