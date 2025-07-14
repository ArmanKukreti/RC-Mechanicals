import React, { useEffect, useRef, useState } from "react";
import { testimonialsData } from "../Constants";
import gsap from "gsap";

const Testimonials = () => {
    const [pageIndex, setPageIndex] = useState(0);
    const [direction, setDirection] = useState("next");

  const reviewGroupRef = useRef(null);

  // Function to determine the number of testimonials to display per page based on screen width
  const getTestimonialsPerPage = () => {
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2; 
    return 3;
  };

  const [dynamicTestimonialsPerPage, setDynamicTestimonialsPerPage] = useState(getTestimonialsPerPage());

  useEffect(() => {
    const handleResize = () => {
      const newCount = getTestimonialsPerPage();

      if (newCount !== dynamicTestimonialsPerPage) {
        setDynamicTestimonialsPerPage(newCount);
        setPageIndex(0); 
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [dynamicTestimonialsPerPage]);


  useEffect(() => {
    // Animate slide-in on page change
    if (!reviewGroupRef.current) return;

    const fromX = direction === "next" ? 100 : -100;
    const toX = 0;

    gsap.fromTo(
      reviewGroupRef.current,
      { x: fromX, opacity: 0 },
      { x: toX, opacity: 1, duration: 0.6, ease: "power2.out" }
    );
  }, [pageIndex, direction]);


  // Calculate total pages based on the dynamic testimonials per page
  const totalPages = Math.ceil(testimonialsData.length / dynamicTestimonialsPerPage);

  // Function to show the next group of testimonials
  const showNextGroup = () => {
    setDirection("next");
    setPageIndex((prev) => (prev + 1) % totalPages); 
  };

  // Function to show the previous group of testimonials
  const showPrevGroup = () => {
    setDirection("prev");
    setPageIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  // Determine which testimonials are currently visible based on the pageIndex and dynamicTestimonialsPerPage
  let visibleTestimonials = testimonialsData.slice(
    pageIndex * dynamicTestimonialsPerPage,
    pageIndex * dynamicTestimonialsPerPage + dynamicTestimonialsPerPage
  );

  // If the current slice doesn't fill a full page, loop back to the beginning to fill
  if (visibleTestimonials.length < dynamicTestimonialsPerPage && testimonialsData.length > dynamicTestimonialsPerPage) {
    visibleTestimonials.push(
      ...testimonialsData.slice(0, dynamicTestimonialsPerPage - visibleTestimonials.length)
    );
  } 

  // Determine the Tailwind CSS class for individual testimonial card width
  const cardWidthClass = {
    1: "w-full",  
    2: "w-1/2",   
    3: "w-1/3",   
  }[dynamicTestimonialsPerPage];

  return (
    <div
      className="flex flex-col items-center justify-center text-center bg-gray-50"
      style={{ padding: "60px 20px", marginTop: "50px" }}
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

      {/* Testimonials Carousel */}
      <div className="relative w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12">
        {totalPages > 1 && (
          <button
            onClick={showPrevGroup}
            className="absolute left-0 sm:-left-4 md:-left-8 lg:-left-12 inset-y-0 flex items-center bg-white shadow-lg z-10 hover:bg-gray-100 transition-all font-bold text-3xl text-indigo-600 rounded-full cursor-pointer select-none p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            style={{ padding: "8px" }} 
          >
            &lt;
          </button>
        )}

        {/* Testimonials Display Area */}
        <div className="w-full overflow-hidden">
          <div
            className="flex justify-center items-stretch gap-x-4 sm:gap-x-6 md:gap-x-8 lg:gap-x-10 py-4"
            style={{ minHeight: "300px", paddingTop: "16px", paddingBottom: "16px" }}
            ref={reviewGroupRef}
          >
            {visibleTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className={`${cardWidthClass} flex-shrink-0`} style={{padding: "16px"}}
              >
                <div className="bg-white rounded-xl shadow-lg flex flex-col justify-between items-center h-full transform transition-transform hover:scale-105 duration-300" style={{padding: "24px"}}>
                  <p className="text-gray-700 text-lg italic" style={{ marginBottom: "16px"}}>
                    "{testimonial.quote}"
                  </p>
                  <div className="flex flex-col items-center mt-auto">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-indigo-300" style={{marginBottom: "8px"}}
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

        {/* Next Button - Only show if more than one page */}
        {totalPages > 1 && (
          <button
            onClick={showNextGroup}
            className="absolute right-0 sm:-right-4 md:-right-8 lg:-right-12 inset-y-0 flex items-center bg-white shadow-lg z-10 hover:bg-gray-100 transition-all font-bold text-3xl text-indigo-600 rounded-full cursor-pointer select-none p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            style={{ padding: "8px" }} 
          >
            &gt;
          </button>
        )}
      </div>

      {/* Pagination Dots - Only show if more than one page */}
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
