import React from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  
  const [t, i18n] = useTranslation("global");
  return (
    <div>
      <h2 className=" mt-20 lg:mt-0 mb-20 text-4xl sm:text-5xl font-medium text-center ubuntu">
        {t("contact.header")}
      </h2>
      <div
        className={`my-20 flex flex-col gap-4 text-lg lg:text-xl leading-9 px-8 md:px-24 lg:px-36 ${
          i18n.language == "en" ? "text-left" : "text-right"
        }`}
      >
        <p className="">{t("contact.p1")}</p>
        <p className="">{t("contact.p2")}</p>
        <p className="">{t("contact.p3")}</p>
        <p className="">{t("contact.p4")}</p>
        <p className="">{t("contact.p5")}</p>
      </div>
    </div>
  );
};

export default Contact;
