// src/layouts/MainLayout.tsx
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function MainLayout() {
  useEffect(() => {
    AOS.init({ duration: 700, once: false });
  }, []);
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen bg-gradient-to-r from-[#0f245f] to-[#00c0f4] m-0 w-screen">
        <Outlet /> 
      </main>
      <Footer />
    </>
  );
}
