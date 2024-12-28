import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { servicesData } from "../components/utilities/Data";
import { TailSpin } from "react-loader-spinner";
import { useTranslation } from "react-i18next";

const ServiceDetails = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const { pathname } = useLocation();
  const [t, i18n] = useTranslation("global");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className=" px-36">
      <h2 className="mb-20 text-5xl font-medium text-center ubuntu">
        {t("serviceDetails.header")}
      </h2>
      <div className="flex justify-between w-full ">
        <div className=" w-[40%] px-4 h-full">
          <div className="flex flex-col items-center justify-center w-full py-12 rounded-xl bg-darkBg">
            <p className="text-2xl font-medium text-center text-white ubuntu max-w-[80%]">
              {t("serviceDetails.contactBox.p1")}
              <p className="mt-2">{t("serviceDetails.contactBox.p2")}</p>
              <p className="mt-2">+966543777271</p>
            </p>
            <Link to={"/contact"}>
              <button className="px-4 py-2 mt-8 text-white border border-white rounded-md hover:text-red-500 hover:border-red-500">
                {t("serviceDetails.contactBtn")} {">"}
              </button>
            </Link>
          </div>
        </div>
        <div
          className={`flex flex-wrap items-center  w-[60%] gap-8 mb-20 ${
            i18n.language == "en"
              ? "text-left justify-start"
              : "text-right justify-end"
          }`}
        >
          {servicesData
            .filter((item) => {
              return item.id == id;
            })
            .map((service) => {
              return (
                <div key={service.id}>
                  <div className="mb-4 text-3xl font-medium ubuntu">
                    {service.title}
                    {i18n.language == "en"
                      ? service.en_title
                      : service.ar_title}
                  </div>
                  <div className="relative">
                    <div className="absolute flex justify-center items-center w-full h-full">
                      {isLoading && (
                        <TailSpin
                          visible={true}
                          height="230"
                          width="80"
                          color="#A42B2B"
                          ariaLabel="tail-spin-loading"
                          radius="1"
                          wrapperStyle={{}}
                          wrapperClass=""
                        />
                      )}
                    </div>
                    <img
                      className={`h-[330px]  rounded-md object-cover object-center my-8 ${
                        i18n.language == "en"
                          ? "justify-self-start"
                          : "justify-self-end"
                      }`}
                      src={service.img}
                      onLoad={() => setIsLoading(false)}
                    />
                  </div>
                  <div className="text-xl font-light leading-8 text-gray-500">
                    {i18n.language == "en" ? service.en_desc : service.ar_desc}
                  </div>
                </div>
              );
            })}
          <Link to={"/contact"}>
            <button className="px-8 py-3 mt-8 text-primary border border-primary rounded-md hover:text-red-500 hover:border-red-500">
              {t("serviceDetails.contactBtn")} {">"}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
