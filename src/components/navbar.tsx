import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";


const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header className="bg-primary shadow-md fixed top-0 left-0 w-full z-50 h-20 tracking-normal">
        <div className="max-w-full mx-auto px-4 md:px-12 py-3 flex justify-between items-center ">
          
          <Link to="/" className="text-xl font-bold hover:scale-105">
            <img src="/home/LOGO-TCI.svg" className="h-8 md:h-12" />
          </Link>
          

          <div className="flex items-center gap-4 md:gap-4 md:flex-row-reverse">
            <div>
              <p className="font-bebas font-bold  rounded-3xl text-text text-base sm:text-base px-8 sm:px-6 md:px-8 py-1.5 bg-gradient-to-l from-[#0f245f] cursor-pointer hover:scale-x-105">
                <Link to="/contacto">CONTACTO</Link>
              </p>
            </div>

            <div className="text-xs md:text-[14px] lg:text-[16px] leading-none flex justify-end">
              <button
                onClick={toggleMenu}
                className="md:hidden relative w-10 h-10 sm:w-12 sm:h-12"
                aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
              >
                <Menu
                  className={`absolute top-0 left-0 w-10 h-10 sm:w-12 sm:h-12 text-text transition-all duration-1000 ease-in-out ${
                    isOpen
                      ? "opacity-0 pointer-events-none rotate-90"
                      : "opacity-100 rotate-0"
                  }`}
                />
                <X
                  className={`absolute top-0 left-0 w-10 h-10 sm:w-12 sm:h-12 text-text transition-all duration-1000 ease-in-out ${
                    isOpen
                      ? "opacity-100 rotate-0"
                      : "opacity-0 pointer-events-none -rotate-90"
                  }`}
                />
              </button>

              <nav className="hidden md:flex space-x-6 text-text max-w-4/5 font-wix">
                <Link to="/#inicio" className="hover:text-blue-500">Inicio</Link>
                <Link to="/#servicios" className="hover:text-blue-500">Servicios</Link>
                <Link to="/#clientes" className="hover:text-blue-500">Nuestros Clientes</Link>
                <Link to="/#nosotros" className="hover:text-blue-500">Acerca de Nosotros</Link>
                <Link to="/" className="hover:text-blue-500">Acceso Clientes</Link>
              </nav>
            </div>
          </div>
        </div>

        {/* Menú móvil con clase dinámica */}
        <div className={`mobile-menu md:hidden bg-primary text-white font-wix mt-2 ${isOpen ? 'open' : ''}`}>
          <Link to="/#inicio" onClick={closeMenu} className="block p-4 hover:bg-blue-200/55 cursor-pointer">Inicio</Link>
          <Link to="/#servicios" onClick={closeMenu} className="block p-4 hover:bg-blue-200/55 cursor-pointer">Servicios</Link>
          <Link to="/#clientes" onClick={closeMenu} className="block p-4 hover:bg-blue-200/55 cursor-pointer">Nuestros Clientes</Link>
          <Link to="/#nosotros" onClick={closeMenu} className="block p-4 hover:bg-blue-200/55 cursor-pointer">Acerca de Nosotros</Link>
          <Link to="/" onClick={closeMenu} className="block p-4 hover:bg-blue-200/55 cursor-pointer">Acceso Clientes</Link>
        </div>
      </header>

      {/* CSS Para animar el menu */}
      <style>
      {`
        .mobile-menu {
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          transform: translateY(0px);
          transition:
            max-height 1s cubic-bezier(0.68, -0.55, 0.27, 1.55),
            opacity .6s ease,
            transform .8s ease;
        }

        .mobile-menu.open {
          max-height: 500px;
          opacity: 1;
          transform: translateY(0);
        }

        
      `}
      </style>
    </>
  );
};

export default Navbar;
