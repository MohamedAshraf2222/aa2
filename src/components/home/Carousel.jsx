import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import slider1 from "../../assets/slider_1.jpg";
import slider2 from "../../assets/slider_2.jpg";
import slider3 from "../../assets/slider_3.jpg";
import "../../components/home/slider.css";
import { useTranslation } from "react-i18next";
const CarouselSlider = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div className="px-8 py-4">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        interval={3000}
        showIndicators={false}
        showArrows={false}
        showStatus={false}
      >
        <div className="">
          <img
            className="max-h-[80vh] object-cover object-center filter brightness-[0.4]"
            src={slider1}
          />
          <div className="bg-transparent legend">
            {t("carousel.ac.header")}
            <div className="hidden text-sm md:block md:text-lg lg:text-xl font-light max-w-[80%] mt-4 text-secondary ">
              {t("carousel.ac.desc")}
            </div>
            <div className="text-sm md:hidden font-light max-w-[80%] mt-4 text-secondary ">
              {t("carousel.ac.mobileDesc")}
            </div>
          </div>
        </div>
        <div className="">
          <img
            className="max-h-[80vh] object-cover object-center filter brightness-[0.4]"
            src={slider2}
          />
          <div className="bg-transparent legend">
            {t("carousel.commercialKitchen.header")}
            <div className="hidden text-sm md:block md:text-lg lg:text-xl font-light max-w-[80%] mt-4 text-secondary ">
              {t("carousel.commercialKitchen.desc")}
            </div>
            <div className="text-sm md:hidden font-light max-w-[80%] mt-4 text-secondary ">
              {t("carousel.commercialKitchen.mobileDesc")}
            </div>
          </div>
        </div>
        <div className="">
          <img
            className="max-h-[80vh] object-cover object-center filter brightness-[0.4]"
            src={slider3}
          />
          <div className="bg-transparent legend">
            {t("carousel.medicalEquipment.header")}
            <div className="hidden text-sm md:block md:text-lg lg:text-xl font-light max-w-[80%] mt-4 text-secondary ">
              {t("carousel.medicalEquipment.desc")}
            </div>
            <div className="text-sm md:hidden font-light max-w-[80%] mt-4 text-secondary ">
              {t("carousel.medicalEquipment.mobileDesc")}

            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselSlider;
