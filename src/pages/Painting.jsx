import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Palette,
  CheckCircle,
  ArrowRight,
  Shield,
  Clock,
  Award,
} from "lucide-react";
import { projects } from "../Constants";

const Painting = () => {
  const services = [
    "Surface Preparation",
    "Protective Coatings",
    "Anti-corrosion Treatment",
    "Epoxy Floor Coatings",
    "Fireproof Coatings",
    "Structural Steel Painting",
    "Tank & Vessel Coating",
    "Quality Inspection",
  ];


  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="bg-white" style={{ paddingTop: "5rem" }}>
      {/* Hero Section */}
      <section
        className="bg-gradient-to-br from-purple-600 to-pink-600 text-white"
        style={{ padding: "5rem 0" }}
      >
        <div
          className="container"
          style={{ padding: "0 1rem", marginLeft: "auto", marginRight: "auto" }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <div
                className="flex items-center"
                style={{ marginBottom: "1.5rem" }}
              >
                <div
                  className="bg-white/20 rounded-lg"
                  style={{ padding: "0.75rem", marginRight: "1rem" }}
                >
                  <Palette className="h-8 w-8 text-white" />
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold">
                  Industrial Painting
                </h1>
              </div>
              <p
                className="text-xl text-white/90 leading-relaxed"
                style={{ marginBottom: "2rem" }}
              >
                Specialized industrial painting and coating services for
                protection and aesthetics. Professional surface preparation and
                high-quality finishes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors flex items-center justify-center"
                  style={{ padding: "12px 32px" }}
                >
                  Get Quote
                  <ArrowRight
                    className="h-5 w-5"
                    style={{ marginLeft: "8px" }}
                  />
                </Link>
                <Link
                  to="/gallery"
                  className="border-2 border-white text-white rounded-lg hover:bg-white hover:text-purple-600 transition-colors text-center"
                  style={{ padding: "12px 32px" }}
                >
                  View Projects
                </Link>
              </div>
            </div>
            <div className="hidden lg:block animate-fade-in">
              <img
                src="./assets/industrial-painting/Industrial Painting home.jpg"
                alt="Industrial Painting"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50" style={{ padding: "5rem 0" }}>
        <div
          className="container"
          style={{ padding: "0 1rem", marginLeft: "auto", marginRight: "auto" }}
        >
          <div className="text-center" style={{ marginBottom: "4rem" }}>
            <h2
              className="text-3xl lg:text-4xl font-bold text-neutral"
              style={{ marginBottom: "1.5rem" }}
            >
              Painting <span className="text-purple-600">Services</span>
            </h2>
            <p
              className="text-lg text-neutral/70 max-w-3xl"
              style={{ marginLeft: "auto", marginRight: "auto" }}
            >
              Comprehensive painting and coating solutions for industrial
              applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg"
                style={{ padding: "1.5rem" }}
              >
                <div
                  className="flex items-center"
                  style={{ marginBottom: "0.75rem" }}
                >
                  <CheckCircle
                    className="h-5 w-5 text-purple-600 flex-shrink-0"
                    style={{ marginRight: "0.75rem" }}
                  />
                  <h4 className="font-bold text-neutral">{service}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white" style={{ padding: "5rem 0" }}>
        <div
          className="container"
          style={{ padding: "0 1rem", marginLeft: "auto", marginRight: "auto" }}
        >
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Protective Coatings",
                description:
                  "Advanced protective coatings for corrosion resistance and durability.",
              },
              {
                icon: Clock,
                title: "Weather Resistant",
                description:
                  "All-weather application capabilities with long-lasting finishes.",
              },
              {
                icon: Award,
                title: "Quality Materials",
                description:
                  "Premium paints and coatings from leading industrial suppliers.",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div
                  className="bg-purple-600/10 w-20 h-20 rounded-full flex items-center justify-center"
                  style={{
                    marginBottom: "1.5rem",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  <feature.icon className="h-10 w-10 text-purple-600" />
                </div>
                <h3
                  className="text-xl font-bold text-neutral"
                  style={{ marginBottom: "1rem" }}
                >
                  {feature.title}
                </h3>
                <p className="text-neutral/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-gray-50" style={{ padding: "5rem 0" }}>
        <div
          className="container"
          style={{ padding: "0 1rem", marginLeft: "auto", marginRight: "auto" }}
        >
          <div className="text-center" style={{ marginBottom: "4rem" }}>
            <h2
              className="text-3xl lg:text-4xl font-bold text-neutral"
              style={{ marginBottom: "1.5rem" }}
            >
              Recent <span className="text-purple-600">Projects</span>
            </h2>
            <p className="text-lg text-neutral/70">
              Showcasing our expertise in industrial painting and coating
              services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              project.category.includes("Painting") && (<div
                key={index}
                className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div style={{ padding: "1.5rem" }}>
                  <h4
                    className="font-bold text-neutral"
                    style={{ marginBottom: "0.5rem" }}
                  >
                    {project.title}
                  </h4>
                  <p className="text-neutral/70 text-sm">
                    {project.description}
                  </p>
                </div>
              </div>)
            ))}
          </div>

          <div className="text-center" style={{ marginTop: "3rem" }}>
            <Link
              to="/gallery"
              className="bg-purple-600 text-white rounded-lg hover:bg-purple-600/90 transition-colors inline-flex items-center"
              style={{ padding: "12px 32px" }}
            >
              View All Projects
              <ArrowRight className="h-5 w-5" style={{ marginLeft: "8px" }} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Painting;
