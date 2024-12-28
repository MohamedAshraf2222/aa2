import React from "react";
import factory from "../assets/factory.jpg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const About = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <div className="">
      <h2 className=" mt-20 lg:mt-0 mb-20 text-4xl sm:text-5xl font-medium text-center ubuntu">
        {t("about.header")}
      </h2>
      <div className="text-lg lg:text-xl font-light leading-8 px-8 md:px-24 lg:px-36">
        <div
          className={`text-3xl py-4 font-medium text-primary ${
            i18n.language == "en" ? "text-left" : "text-right"
          }`}
        >
          {t("about.glowing")}
        </div>
        <div
          className={`flex flex-col pt-4 gap-4 ${
            i18n.language == "en" ? "text-left" : "text-right"
          }`}
        >
          <p className="">{t("about.p1")}</p>
          <p className="">{t("about.p2")}</p>
          <p className="">{t("about.p3")}</p>
          <p className="">{t("about.p4")}</p>
          <p className="">{t("about.p5")}</p>
          <p className="">{t("about.p6")}</p>
        </div>
      </div>
      <div className="relative my-12">
        <img
          className="h-[450px] w-full object-cover object-center"
          src={factory}
          alt=""
        />
        <div className="absolute top-0 z-10 w-full h-full">
          <div className="flex flex-col items-center justify-center h-full gap-12 counter-area-gradient">
            <h3 className="text-base px-4 sm:px-0 sm:text-lg md:text-2xl font-medium text-white lg:text-4xl">
              {t("about.box.header")}
            </h3>
            <div className="flex flex-wrap items-center justify-center w-full gap-12 leading-5 lg:leading-8 text-center text-white text-xs md:text-sm lg:text-lg px-4 sm:px-8 md:px-24 lg:px-36">
              {t("about.box.p")}
            </div>
            <Link to={"/contact"}>
              <button className="px-4 py-2 mt-8 text-white border border-white rounded-md hover:text-darkBg hover:border-darkBg">
                {t("about.box.btn")} {">"}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
