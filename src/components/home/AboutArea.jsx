import React from "react";
import aboutImg from "../../assets/aboutImg.jpg";
import { useTranslation } from "react-i18next";
const AboutArea = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <div className=" flex lg:flex-row flex-col items-center justify-center gap-8 px-8">
        <div className="flex flex-col flex-1 h-full gap-8 mr-8 text-xl font-medium leading-8 ">
          <div className="text-3xl font-medium text-primary">
            {t("aboutArea.header")}
          </div>
          {t("aboutArea.desc")}
        </div>
        <div className="flex-1">
          <img
            className="filter brightness-[0.9] rounded drop-shadow-xl"
            src={aboutImg}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AboutArea;
