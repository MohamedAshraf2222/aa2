import React from "react";
import ServiceCard from "./ServiceCard";
// import worker1 from "../../assets/pexels-photo-by-twelfth-night-1105439946-29491360.jpg";
// import worker12 from "../../assets/";
import { servicesData } from "../utilities/Data";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ServicesArea = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div className="pt-4 pb-12 px-12 sm:px-36">
      <h4 className="text-sm lg:text-lg font-medium text-primary">
        {t("serviceArea.what")}
      </h4>
      <div className="flex items-start sm:items-center justify-between flex-col sm:flex-row w-full">
        <h3 className="my-4 text-2xl lg:text-4xl capitalize ubuntu">
          {t("serviceArea.header").split(" ").slice(0, -1).join(" ")}
          <div className="">
            {t("serviceArea.header").split(" ").slice(-1).join(" ")}
          </div>
        </h3>
        <Link to={"/services"}>
          <button className="px-4 py-2 border rounded-md text-primary border-primary hover:text-red-500 hover:border-red-500">
            {t("serviceArea.allServicesBtn")} {">"}
          </button>
        </Link>
      </div>
      <div className="flex items-center justify-center gap-8 mt-12 flex-wrap">
        {servicesData.slice(0, 3).map((service, index) => {
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

export default ServicesArea;
