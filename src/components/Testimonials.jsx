import React, { useEffect, useRef, useState } from "react";
import { testimonialsData } from "../Constants";
import gsap from "gsap";

const Testimonials = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const [direction, setDirection] = useState("next");
  const reviewGroupRef = useRef(null);

  const getTestimonialsPerPage = () => {
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  const [dynamicTestimonialsPerPage, setDynamicTestimonialsPerPage] = useState(
    getTestimonialsPerPage()
  );

  useEffect(() => {
    const handleResize = () => {
      const newCount = getTestimonialsPerPage();
      if (newCount !== dynamicTestimonialsPerPage) {
        setDynamicTestimonialsPerPage(newCount);
        setPageIndex(0);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [dynamicTestimonialsPerPage]);

  useEffect(() => {
    if (!reviewGroupRef.current) return;
    const fromX = direction === "next" ? 100 : -100;
    gsap.fromTo(
      reviewGroupRef.current,
      { x: fromX, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
    );
  }, [pageIndex, direction]);

  const totalPages = Math.ceil(
    testimonialsData.length / dynamicTestimonialsPerPage
  );

  const showNextGroup = () => {
    setDirection("next");
    setPageIndex((prev) => (prev + 1) % totalPages);
  };

  const showPrevGroup = () => {
    setDirection("prev");
    setPageIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  let visibleTestimonials = testimonialsData.slice(
    pageIndex * dynamicTestimonialsPerPage,
    pageIndex * dynamicTestimonialsPerPage + dynamicTestimonialsPerPage
  );

  if (
    visibleTestimonials.length < dynamicTestimonialsPerPage &&
    testimonialsData.length > dynamicTestimonialsPerPage
  ) {
    visibleTestimonials.push(
      ...testimonialsData.slice(
        0,
        dynamicTestimonialsPerPage - visibleTestimonials.length
      )
    );
  }

  const cardWidthClass = {
    1: "w-full",
    2: "w-1/2",
    3: "w-1/3",
  }[dynamicTestimonialsPerPage];

  return (
    <div
      className="flex flex-col items-center justify-center text-center bg-gray-50"
      style={{
        paddingTop: "60px",
        paddingBottom: "60px",
        paddingLeft: "20px",
        paddingRight: "20px",
        marginTop: "50px",
      }}
    >
      <h2
        className="text-3xl md:text-5xl font-bold text-black"
        style={{ marginBottom: "10px" }}
      >
        What Our Clients Say
      </h2>

      <div
        className="bg-indigo-600 w-full max-w-xl h-[3px] rounded-xl"
        style={{ marginBottom: "50px" }}
      />

      <div
        className="relative w-full max-w-7xl"
        style={{ paddingLeft: "16px", paddingRight: "16px" }}
      >
        {/* Left Arrow */}
        {totalPages > 1 && (
          <button
            onClick={showPrevGroup}
            className="absolute flex items-center justify-center left-0 inset-y-1/2 transform -translate-y-1/2 bg-white shadow-lg z-10 hover:bg-gray-100 transition-all text-indigo-600 rounded-full cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
            style={{
              padding: "12px",
              width: "50px",
              height: "50px",
              fontSize: "24px",
            }}
          >
            &lt;
          </button>
        )}

        {/* Testimonials */}
        <div className="w-full overflow-hidden">
          <div
            className="flex justify-center items-stretch gap-x-4 sm:gap-x-6 md:gap-x-8 lg:gap-x-10"
            style={{
              paddingTop: "16px",
              paddingBottom: "16px",
              minHeight: "300px",
            }}
            ref={reviewGroupRef}
          >
            {visibleTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className={`${cardWidthClass} flex-shrink-0`}
                style={{ padding: "16px" }}
              >
                <div
                  className="bg-white rounded-xl shadow-lg flex flex-col justify-between items-center h-full transform transition-transform hover:scale-105 duration-300"
                  style={{ padding: "24px" }}
                >
                  <p
                    className="text-gray-700 text-lg italic"
                    style={{ marginBottom: "16px" }}
                  >
                    "{testimonial.quote}"
                  </p>
                  <div className="flex flex-col items-center mt-auto">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-indigo-300"
                      style={{ marginBottom: "8px" }}
                    />
                    <p className="font-semibold text-gray-900 text-base">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-500 text-sm">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        {totalPages > 1 && (
          <button
            onClick={showNextGroup}
            className="absolute flex items-center justify-center right-0 inset-y-1/2 transform -translate-y-1/2 bg-white shadow-lg z-10 hover:bg-gray-100 transition-all text-indigo-600 rounded-full cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
            style={{
              padding: "12px",
              width: "50px",
              height: "50px",
              fontSize: "24px",
            }}
          >
            &gt;
          </button>
        )}
      </div>

      {/* Pagination Dots */}
      {totalPages > 1 && (
        <div
          className="flex gap-2"
          style={{ marginTop: "24px" }}
        >
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
      )}
    </div>
  );
};

export default Testimonials;
