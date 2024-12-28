import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";
import { useTranslation } from "react-i18next";

const ServiceCard = ({ img, title, desc, link }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [t, i18n] = useTranslation("global");

  return (
    <div className="flex-1 bg-white shadow-2xl lg:max-w-[310px] sm:w-[30%] min-w-[250px] sm:min-w-[300px] rounded-md">
      <div className="flex flex-1 h-full flex-col items-center justify-center w-full  bg-white rounded-md ">
        <div className="relative h-[230px] p-4 w-full ">
          {isLoading && (
            <div className="absolute w-full h-full flex justify-center items-center">
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
            </div>
          )}
          <img
            className="h-full w-full rounded-md object-cover object-center"
            src={img}
            onLoad={() => setIsLoading(false)}
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-6 px-5 py-8">
          <h3 className="text-2xl ubuntu">{title}</h3>
          <h4 className="px-4 text-sm font-light leading-7 text-secondary">
            {desc.length == 0 ? "" : desc.slice(0, 110) + "..."}
          </h4>
          <Link to={link}>
            <button className="px-4 py-2 mt-8 border rounded-md text-primary border-primary hover:text-red-500 hover:border-red-500">
              {t("serviceArea.detailsBtn")}
              {" >"}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
