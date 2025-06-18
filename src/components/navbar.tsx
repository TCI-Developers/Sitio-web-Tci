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
    <header className="bg-primary shadow-md fixed top-0 left-0 w-full z-50 h-20">
      <div className="max-w-full mx-auto px-12 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold">
          <img src="/LOGO-TCI.svg" className="h-12"/>
        </Link>

        <div className="flex items-center gap-10 md:gap-4 md:flex-row-reverse">
          <div>
            <p className="font-bebas font-bold tracking-tighter rounded-3xl text-text px-8 py-1.5 bg-gradient-to-l from-[#0f245f] ">CONTACTO</p>
          </div>
          <div className="text-xs md:text-[14px] lg:text-[16px] leading-none flex justify-end">
            {/* Icono hamburguesa */}
            <button
              onClick={toggleMenu}
              className="md:hidden"
              aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isOpen ? <X className="w-12 h-12 text-text" /> : <Menu className="w-12 h-12 text-text" />}
            </button>

            {/* Navegación escritorio */}
            <nav className="hidden md:flex space-x-6 text-text max-w-4/5 ">
              <Link to="/" className=" hover:text-blue-600">Inicio</Link>
              <Link to="/Servicios" className="hover:text-blue-600">Servicios</Link>
              <Link to="/NuestrosClientes" className=" hover:text-blue-600">Nuestros Clientes</Link>
              <Link to="/AcercadeNosotros" className=" hover:text-blue-600">Acerca de Nosotros</Link>
              <Link to="/AccesoClientes" className=" hover:text-blue-600">Acceso Clientes</Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      {isOpen && (
        <nav className="md:hidden text-white bg-primary px-4 pb-4">
          <Link
            to="/"
            onClick={closeMenu}
            className="block py-2 hover:text-blue-600"
          >
            Inicio
          </Link>
          <Link
            to="/Servicios"
            onClick={closeMenu}
            className="block py-2 hover:text-blue-600"
          >
            Servicios
          </Link>
          <Link
            to="/contact"
            onClick={closeMenu}
            className="block py-2 hover:text-blue-600"
          >
            NuestrosClientes
          </Link>
          <Link
            to="/NuestrosClientes"
            onClick={closeMenu}
            className="block py-2 hover:text-blue-600"
          >
            Nuestros Clientes
          </Link>
          <Link
            to="/AccesoClientes"
            onClick={closeMenu}
            className="block py-2 hover:text-blue-600"
          >
            Acceso Clientes
          </Link>

        </nav>
      )}
    </header>
  );
};

export default Navbar;
