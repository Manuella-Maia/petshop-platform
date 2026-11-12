import { useEffect, useState } from "react";
import { FaPaw } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function Header({ links = [], action }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      document.getElementById(location.hash.slice(1))?.scrollIntoView();
    }
  }, [location]);

  function renderLinks(mobile = false) {
    return links.map(({ label, pathname, hash = "" }) => {
      const active =
        location.pathname.toLowerCase() === pathname.toLowerCase() &&
        location.hash === hash;

      return (
        <NavLink
          key={label}
          to={{ pathname, hash }}
          end
          aria-current={active ? (hash ? "location" : "page") : "false"}
          onClick={() => setMenuOpen(false)}
          className={() =>
            `border-b-2 py-2 transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-verde-escuro ${mobile ? "px-3" : ""} ${active ? "border-laranja font-bold text-verde-escuro" : "border-transparent hover:border-verde-claro hover:text-verde-escuro"}`
          }
        >
          {label}
        </NavLink>
      );
    });
  }

  return (
    <header className="border-b border-verde-claro/40 bg-white font-sans text-texto">
      <div className="mx-auto flex min-h-20 w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-12">
        <Link
          to="/homePage"
          onClick={() => setMenuOpen(false)}
          aria-label="Patinhas Verdes — início"
          className="flex items-center gap-2 text-lg font-black tracking-tight text-verde-escuro focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-verde-escuro"
        >
          <span className="flex size-10 items-center justify-center rounded-xl bg-verde-escuro text-xl text-white">
            <FaPaw aria-hidden="true" />
          </span>
          Patinhas Verdes
        </Link>
        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-5 text-sm font-medium md:flex"
        >
          {renderLinks()}
        </nav>
        {action && (
          <Link
            to={action.to}
            onClick={() => setMenuOpen(false)}
            className="hidden items-center justify-center rounded-full bg-verde-escuro px-6 py-3 text-sm font-bold text-white transition hover:bg-verde focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-verde-escuro xl:inline-flex"
          >
            {action.label}
          </Link>
        )}
        <button
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="menu-mobile"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex size-11 cursor-pointer items-center justify-center rounded-lg text-2xl text-verde-escuro hover:bg-fundo focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-verde-escuro md:hidden"
        >
          {menuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
        </button>
        <nav
          id="menu-mobile"
          aria-label="Navegação móvel"
          className={`${menuOpen ? "flex" : "hidden"} w-full flex-col gap-1 border-t border-verde-claro pt-3 text-sm font-semibold md:hidden`}
        >
          {renderLinks(true)}
        </nav>
      </div>
    </header>
  );
}
