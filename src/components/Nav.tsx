import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/images/coonfresh-logo.png";
import { CloseIcon, MenuIcon } from "./ui";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/coonvita", label: "Coonvita" },
  { to: "/blog", label: "Blog" },
  { to: "/gallery", label: "Gallery" },
  { to: "/shop", label: "Shop" },
  { to: "/farm-setting", label: "Farm Setting" },
  { to: "/category/recipe", label: "Recipe" },
  { to: "/e-brochure", label: "E-Brochure" },
  { to: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Close the mobile menu whenever the route changes (e.g. a link was tapped).
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Esc closes the menu and hands focus back to the toggle.
  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const desktopLink = ({ isActive }: { isActive: boolean }) =>
    `inline-flex min-h-11 items-center rounded-full px-3.5 text-[0.9375rem] font-semibold transition-colors duration-150 ${
      isActive ? "bg-sand text-ink" : "text-ink hover:bg-cream"
    }`;

  const mobileLink = ({ isActive }: { isActive: boolean }) =>
    `flex min-h-12 items-center rounded-2xl px-4 text-base font-semibold transition-colors duration-150 ${
      isActive ? "bg-sand text-ink" : "text-ink hover:bg-cream"
    }`;

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between gap-4 rounded-full bg-white py-2 pl-5 pr-2 shadow-float sm:pl-6">
          <NavLink to="/" className="shrink-0" aria-label="Coonfresh home">
            <img
              src={logo}
              alt="Coonfresh — an organic way to healthy living"
              width={402}
              height={129}
              className="h-11 w-auto sm:h-12"
            />
          </NavLink>

          <nav aria-label="Main" className="hidden items-center gap-0.5 xl:flex">
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} className={desktopLink} end={link.to === "/"}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-sand text-ink transition-[background-color,transform] duration-150 hover:bg-brand-peach active:scale-95 xl:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {open && (
          <nav
            id="mobile-menu"
            aria-label="Main"
            className="mt-2 grid gap-1 rounded-card bg-white p-3 shadow-float sm:grid-cols-2 xl:hidden"
          >
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} className={mobileLink} end={link.to === "/"}>
                {link.label}
              </NavLink>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
