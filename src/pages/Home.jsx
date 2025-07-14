import React, { useEffect } from "react";
import OurServices from "../components/OurServices";
import OurClients from "../components/OurClients";
import Testimonials from "../components/Testimonials";
import Hero from "../components/Hero";

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="w-full flex flex-col">
      <Hero />
      <OurServices />
      <OurClients />
      <Testimonials />
    </div>
  );
};

export default Home;
