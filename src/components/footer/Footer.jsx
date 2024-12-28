import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import Logo from "../utilities/WhiteLogo";
import SocialLinks from "../utilities/SocialLinks";
import { useTranslation } from "react-i18next";

const Footer = () => {
    const [t, i18n] = useTranslation("global");

  return (
    <footer className="bottom-0 left-0 w-full py-2 pt-8 text-white bg-darkBg">
      <div className="flex flex-col">
        <div className="flex flex-col flex-wrap items-start justify-center gap-4 px-8 mb-4 sm:px-0 sm:items-center sm:justify-evenly sm:flex-row">
          <div className="">
            <Logo />
          </div>
          <div className="">
            <Header header={"Quick Links"} />
            <div className="flex flex-col text-base">
              <Link className="hover:text-secondary" to={"home"}>
                {t("navbar.home")}
              </Link>
              <Link className="hover:text-secondary" to={"services"}>
                {t("navbar.services")}
              </Link>
              <Link className="hover:text-secondary" to={"/about"}>
                {t("navbar.about")}
              </Link>
              <Link className="hover:text-secondary" to={"contact"}>
                {t("navbar.contact")}
              </Link>
            </div>
          </div>

          <div className="self-auto sm:self-start">
            <Header header={"Keep In Touch"} />
            <div className="flex flex-col text-base">
              <div>+966543777271</div>
              <div>info@gcf.com</div>
              <div className="mt-2">
                <SocialLinks />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mt-4 text-sm text-secondary">
          &copy; {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
