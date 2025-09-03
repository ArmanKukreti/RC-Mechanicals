import React, { useEffect, useRef, useState } from "react";
import { clientLogos } from "../Constants";
import gsap from "gsap";

const OurClients = () => {
  const getLogosPerPage = () => {
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 768) return 2;
    if (window.innerWidth < 1024) return 3;
    return 4;
  };

  const [logosPerPage, setLogosPerPage] = useState(getLogosPerPage());
  const totalPages = Math.ceil(clientLogos.length / logosPerPage);
  const [pageIndex, setPageIndex] = useState(0);
  const [direction, setDirection] = useState("next");
  const logoGroupRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const newCount = getLogosPerPage();
      if (newCount !== logosPerPage) {
        setLogosPerPage(newCount);
        setPageIndex(0);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [logosPerPage]);

  useEffect(() => {
    if (!logoGroupRef.current) return;
    const fromX = direction === "next" ? 100 : -100;
    gsap.fromTo(
      logoGroupRef.current,
      { x: fromX, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
    );
  }, [pageIndex, direction]);

  const showNextGroup = () => {
    setDirection("next");
    setPageIndex((prev) => (prev + 1) % totalPages);
  };

  const showPrevGroup = () => {
    setDirection("prev");
    setPageIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const visibleLogos = clientLogos.slice(
    pageIndex * logosPerPage,
    pageIndex * logosPerPage + logosPerPage
  );

  if (visibleLogos.length < logosPerPage) {
    visibleLogos.push(
      ...clientLogos.slice(0, logosPerPage - visibleLogos.length)
    );
  }

  const logoWrapperWidthClass = {
    1: "w-full",
    2: "w-1/2",
    3: "w-1/3",
    4: "w-1/4",
  }[logosPerPage];

  return (
    <div
      className="flex flex-col items-center justify-center text-center"
      style={{ padding: "60px 20px", marginTop: "50px" }}
    >
      <h2 className="text-3xl md:text-5xl font-bold text-black" style={{marginBottom: '8px'}}>
        Our Clients
      </h2>
      <div className="bg-indigo-600 w-full max-w-xl h-[3px] rounded-xl" style={{marginBottom: '48px'}}/>

      <div className="relative w-full max-w-5xl">
        {/* Carousel Container */}
        <div className="flex items-center justify-between">
          {/* Left Arrow */}
          <button
            onClick={showPrevGroup}
            className="flex items-center justify-center bg-white shadow-lg hover:bg-gray-100 text-indigo-600 rounded-full cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
            style={{
              padding: "12px",
              width: "45px",
              height: "45px",
              fontSize: "22px",
            }}
          >
            &lt;
          </button>

          <div className="w-full overflow-hidden">
            <div
              className="flex justify-center items-center gap-x-4 sm:gap-x-6 md:gap-x-8 lg:gap-x-12 py-4"
              style={{ minHeight: "120px" }}
              ref={logoGroupRef}
            >
              {visibleLogos.map((logo, index) => (
                <div
                  key={index}
                  className={`${logoWrapperWidthClass} flex justify-center items-center px-2 py-2`}
                  style={{ padding: "0 16px" }}
                >
                  <img
                    src={logo.image}
                    alt={logo.name}
                    className="w-full max-h-24 object-contain hover:scale-105 transition-transform duration-300 rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={showNextGroup}
            className="flex items-center justify-center bg-white shadow-lg hover:bg-gray-100 text-indigo-600 rounded-full cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
            style={{
              padding: "12px",
              width: "45px",
              height: "45px",
              fontSize: "22px",
            }}
          >
            &gt;
          </button>
        </div>
      </div>

      {/* Dots */}
      <div className="flex gap-2" style={{marginTop: '24px'}}>
        {Array.from({ length: totalPages }).map((_, i) => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === pageIndex ? "bg-indigo-600" : "bg-gray-400"
            } cursor-pointer transition-all duration-300`}
            onClick={() => {
              setDirection(i > pageIndex ? "next" : "prev");
              setPageIndex(i);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default OurClients;
