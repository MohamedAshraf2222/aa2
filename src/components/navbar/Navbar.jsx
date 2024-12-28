import React, { useState } from "react";
import Header from "./Header";
import { NavLink } from "react-router-dom";
import { MenuIcon, X } from "lucide-react";

import "./navbar.css";
import Logo from "../utilities/Logo";
import { useTranslation } from "react-i18next";
const Navbar = () => {
  const [t, i18n] = useTranslation("global");
  const [isOpen, setIsOpen] = useState(false);
  const [slide, setSlide] = useState(true);
  const toggleNavbar = () => {
    setSlide(!slide);
    isOpen
      ? setTimeout(() => {
          setIsOpen(!isOpen);
        }, 400)
      : setIsOpen(!isOpen);
  };

  const Menu = () => (
    <>
      <NavLink className="hover:text-red-500" to={"home"}>
        {t("navbar.home")}
      </NavLink>
      <div className="items-center justify-center hidden md:flex">
        <div className="w-[1px] h-4/5 bg-secondary"></div>
      </div>
      <NavLink className="hover:text-red-500" to={"services"}>
        {t("navbar.services")}
      </NavLink>
      <div className="items-center justify-center hidden md:flex">
        <div className="w-[1px] h-4/5 bg-secondary"></div>
      </div>
      <NavLink className="hover:text-red-500" to={"/about"}>
        {t("navbar.about")}
      </NavLink>
      <div className="items-center justify-center hidden md:flex">
        <div className="w-[1px] h-4/5 bg-secondary"></div>
      </div>
      <NavLink className="hover:text-red-500" to={"contact"}>
        {t("navbar.contact")}
      </NavLink>
    </>
  );
  const MobileMenu = () => (
    <>
      <NavLink onClick={() => toggleNavbar()} to={"home"}>
        {t("navbar.home")}
      </NavLink>
      <div className="items-center justify-center hidden md:flex">
        <div className="w-[1px] h-4/5 bg-secondary"></div>
      </div>
      <NavLink onClick={() => toggleNavbar()} to={"services"}>
        {t("navbar.services")}
      </NavLink>
      <div className="items-center justify-center hidden md:flex">
        <div className="w-[1px] h-4/5 bg-secondary"></div>
      </div>
      <NavLink onClick={() => toggleNavbar()} to={"/about"}>
        {t("navbar.about")}
      </NavLink>
      <div className="items-center justify-center hidden md:flex">
        <div className="w-[1px] h-4/5 bg-secondary"></div>
      </div>
      <NavLink onClick={() => toggleNavbar()} to={"contact"}>
        {t("navbar.contact")}
      </NavLink>
    </>
  );
  return (
    <div>
      <Header />
      <div className="flex flex-wrap items-center justify-around py-4 text-primary">
        <div className="">
          <Logo />
        </div>
        <div className="hidden gap-3 font-semibold md:flex">
          <Menu />
        </div>
        <div className="md:hidden">
          <button onClick={() => toggleNavbar()}>
            {isOpen ? <X /> : <MenuIcon />}
          </button>
        </div>
      </div>
      {isOpen && (
        <>
          <div
            className={`flex flex-col items-center justify-center w-full gap-4 h-[90vh] absolute z-10 bg-white font-semibold ${
              slide ? "slide-up" : "slide-bottom"
            }`}
          >
            <MobileMenu />
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
