import React, { useEffect } from "react";
import { servicesData } from "../components/utilities/Data";
import ServiceCard from "../components/home/ServiceCard";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { pathname } = useLocation();
  const [t, i18n] = useTranslation("global");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="px-12 sm:px-36">
      <h2 className="text-5xl font-medium text-center ubuntu">
        {t("service.header")}
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-8 my-12">
        {servicesData.map((service, index) => {
          return (
            <ServiceCard
              key={index}
              img={service.img}
              title={
                i18n.language == "en" ? service.en_title : service.ar_title
              }
              desc={i18n.language == "en" ? service.en_desc : service.ar_desc}
              link={`/services/${service.id}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Services;
