// src/layouts/MainLayout.tsx
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen bg-gradient-to-r from-[#0f245f] to-[#00c0f4] m-0 w-full">
        <Outlet /> 
      </main>
      <Footer />
    </>
  );
}
