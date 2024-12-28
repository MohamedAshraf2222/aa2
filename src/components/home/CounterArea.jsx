import React from "react";
import factory from "../../assets/factory.jpg";
import CountUp from "react-countup";
import { useTranslation } from "react-i18next";

const CounterArea = () => {
  const [t,i18n] = useTranslation("global")
  return (
    <div className="py-4">
      <div className="relative">
        <img
          className="h-[450px] w-full object-cover object-center"
          src={factory}
          alt=""
        />
        <div className="absolute top-0 z-10 w-full h-full">
          <div className="flex flex-col items-center justify-center h-full gap-12 counter-area-gradient">
            <h3 className="text-2xl px-4 lg:px-0 lg:text-4xl font-medium text-white">
              {t("counterArea.header")}
            </h3>
            <div className="flex flex-wrap items-center justify-center w-full gap-12">
              <div className="bg-white w-[300px] p-4 py-8 rounded-lg text-center">
                <div className="flex flex-col items-center justify-center text-xl lg:text-3xl font-bold text-black">
                  <CountUp
                    prefix="+ "
                    scrollSpyOnce
                    enableScrollSpy
                    end={150}
                  />
                  <div className="mt-1 ml-1 text-base font-semibold">
                    {t("counterArea.projects")}
                  </div>
                </div>
              </div>
              <div className="bg-white w-[300px] p-4 py-8 rounded-lg text-center">
                <div className="flex flex-col items-center justify-center text-xl lg:text-3xl font-bold text-black">
                  <CountUp prefix="+ " scrollSpyOnce enableScrollSpy end={15} />
                  <div className="mt-1 ml-1 text-base font-semibold">
                    {t("counterArea.workers")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterArea;
