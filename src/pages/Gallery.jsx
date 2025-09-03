import { ChevronLeft, ChevronRight, Filter, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { projects } from "../Constants";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState("All");
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);


  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Auto-play functionality for the hero carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIndex(
        (prevIndex) => (prevIndex === 2 - 1 ? 0 : prevIndex + 1) //2 is the no.of images in the carousel
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [currentHeroIndex]);

  const categories = [
    "All",
    "Erection",
    "Fabrication",
    "Piping Services",
    "Equipment Installation",
    "Painting",
    "Manpower",
    "Cell Element Work"
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category.includes(filter));

  const openModal = (index) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredProjects.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === 0 ? filteredProjects.length - 1 : selectedImage - 1
      );
    }
  };

  return (
    <div
      className="font-sans text-gray-800 bg-gray-50 min-h-screen"
      style={{ padding: "8rem 0 5rem" }}
    >
      <section
        className="relative flex flex-col items-center justify-center text-center py-16 overflow-hidden"
        style={{
          minHeight: "400px",
          padding: "64px 24px",
          marginBottom: "50px",
        }}
      >
        {/* Carousel Images */}
        <div
          className="absolute inset-0 flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentHeroIndex * 100}%)` }}
        >
          <img
            src="./assets/gallery/image1.png"
            alt="fabrication image"
            className="flex-shrink-0 w-full h-full object-cover"
          />
          <img
            src="./assets/gallery/image2.png"
            alt="erection image"
            className="flex-shrink-0 w-full h-full object-cover"
          />
        </div>

        {/* Bluish Gradient Overlay */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(to right, rgba(76, 102, 147, 0.7), rgba(106, 133, 179, 0.7))", // Bluish gradient with opacity
          }}
        ></div>

        {/* Text Content Overlay */}
        <div className="relative z-20 text-white flex flex-col items-center">
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight"
            style={{ marginBottom: "16px" }}
          >
            Our Featured Projects
          </h1>
          <p
            className="text-lg sm:text-xl font-light max-w-2xl"
            style={{ marginBottom: "40px" }}
          >
            Explore a showcase of our expertise in fabrication and erection,
            delivering excellence in every structure.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-gray-50" style={{ padding: "2rem 0" }}>
        <div
          className="container"
          style={{ padding: "0 1rem", marginLeft: "auto", marginRight: "auto" }}
        >
          <div className="flex flex-wrap justify-center gap-1">
            <div className="flex items-center" style={{ marginRight: "1rem" }}>
              <Filter
                className="h-5 w-5 text-neutral"
                style={{ marginRight: "0.5rem" }}
              />
              <span className="font-medium text-neutral">Filter by:</span>
            </div>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`rounded-lg transition-colors ${
                  filter === category
                    ? "bg-primary text-white"
                    : "bg-white text-neutral hover:bg-primary hover:text-white"
                }`}
                style={{ padding: "8px 24px" }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="bg-gray-50" style={{ padding: "3rem 0 5rem" }}>
        <div
          className="container"
          style={{ padding: "0 1rem", marginLeft: "auto", marginRight: "auto" }}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="group cursor-pointer animate-fade-in"
                onClick={() => openModal(index)}
              >
                <div className="bg-white shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden rounded-lg">
                  <figure className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                      <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="text-center">
                          <div className="text-lg font-bold">View Details</div>
                          <div className="text-sm">Click to expand</div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="absolute"
                      style={{ top: "1rem", left: "1rem" }}
                    >
                      <span
                        className={`rounded-full text-sm text-white ${
                          filter === "Erection"
                            ? "bg-primary"
                            : filter === "Fabrication"
                            ? "bg-accent"
                            : filter === "Piping Services"
                            ? "bg-blue-600"
                            : filter === "Equipment Installation"
                            ? "bg-green-600"
                            : filter === "Painting"
                            ? "bg-purple-600"
                            : filter === "Manpower"
                            ? "bg-indigo-600"
                            : filter === "Cell Element Work" ? "bg-[#ca8a04]" : "bg-gray-600"
                        }`}
                        style={{ padding: "4px 12px" }}
                      >
                        {filter}
                      </span>
                    </div>
                  </figure>
                  <div style={{ padding: "1.5rem" }}>
                    <h3
                      className="text-xl font-bold text-neutral"
                      style={{ marginBottom: "0.5rem" }}
                    >
                      {project.title}
                    </h3>
                    <p className="text-neutral/70 text-sm">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          style={{ padding: "1rem" }}
        >
          <div className="relative max-w-4xl w-full bg-white rounded-lg overflow-hidden">
            <button
              onClick={closeModal}
              className="absolute z-10 bg-black/50 text-white border-none hover:bg-black/70 w-8 h-8 rounded-full flex items-center justify-center"
              style={{ top: "1rem", right: "1rem" }}
            >
              <X className="h-4 w-4" />
            </button>

            <button
              onClick={prevImage}
              className="absolute z-10 bg-black/50 text-white border-none hover:bg-black/70 w-8 h-8 rounded-full flex items-center justify-center"
              style={{
                left: "1rem",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <button
              onClick={nextImage}
              className="absolute z-10 bg-black/50 text-white border-none hover:bg-black/70 w-8 h-8 rounded-full flex items-center justify-center"
              style={{
                right: "1rem",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              <ChevronRight className="h-4 w-4" />
            </button>

            <div className="aspect-video">
              <img
                src={filteredProjects[selectedImage].image}
                alt={filteredProjects[selectedImage].title}
                className="w-full h-full object-cover"
              />
            </div>

            <div style={{ padding: "1.5rem" }}>
              <div
                style={{ marginBottom: "0.2rem" }}
              >
                <h3 className="text-2xl font-bold text-neutral">
                  {filteredProjects[selectedImage].title}
                </h3>
              </div>
              <div className="flex flex-wrap justify-start gap-2" style={{ marginBottom: "0.5rem" }}>
                  {filteredProjects[selectedImage].category.map((cat) => (
                    <span
                      className={`px-3 py-1 rounded-full text-sm text-white ${
                        cat === "Erection"
                          ? "bg-primary"
                          : cat === "Fabrication"
                          ? "bg-accent"
                          : cat === "Piping Service"
                          ? "bg-blue-600"
                          : cat === "Equipment Installation"
                          ? "bg-green-600"
                          : cat === "Painting"
                          ? "bg-purple-600"
                          : cat === "Manpower"
                          ? "bg-indigo-600"
                          : cat === "Cell Element Work" ? "#ca8a04" : "bg-gray-600"
                      }`}
                      style={{ padding: "4px 12px" }}
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              <p className="text-neutral/70">
                {filteredProjects[selectedImage].description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action Section (Optional) */}
      <section
        className="bg-blue-700 text-white text-center rounded-t-xl"
        style={{
          paddingLeft: "24px",
          paddingRight: "24px",
          paddingTop: "64px",
          paddingBottom: "64px",
          marginBottom: "50px",
        }}
      >
        <div
          className="max-w-4xl"
          style={{ marginLeft: "auto", marginRight: "auto" }}
        >
          <h2
            className="text-3xl sm:text-4xl font-bold"
            style={{ marginBottom: "24px" }}
          >
            Ready to Build Your Future?
          </h2>
          <p
            className="text-lg leading-relaxed"
            style={{ marginBottom: "32px" }}
          >
            Contact us today to discuss your next fabrication or erection
            project.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-700 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105"
            style={{ padding: "12px 32px" }}
          >
            Get a Quote
          </a>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
