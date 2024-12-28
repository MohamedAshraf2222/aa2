import React from "react";
import Carousel from "../components/home/Carousel";
import CounterArea from "../components/home/CounterArea";
import AboutArea from "../components/home/AboutArea";
import ServicesArea from "../components/home/ServicesArea";

const Home = () => {
  return (
    <>
      <Carousel />
      <div className="my-[100px]">
        <AboutArea/>
      </div>
        <CounterArea />
        <ServicesArea />
    </>
  );
};

export default Home;
