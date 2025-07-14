import React, { useEffect } from "react";
import {
  Wrench,
  CheckCircle,
  ArrowRight,
  Zap,
  Target,
  Cog,
} from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "../Constants";

const Fabrication = () => {
  const services = [
    "Custom Steel Work",
    "Precision Cutting",
    "MIG/TIG Welding",
    "Structural Components",
    "Architectural Metalwork",
    "Heavy Fabrication",
    "Quality Control",
    "Surface Treatment",
  ];

  const capabilities = [
    {
      title: "Plasma Cutting",
      description: "High-precision plasma cutting up to 6 inches thick",
      specs: "Max Size: 20' x 40'",
    },
    {
      title: "CNC Machining",
      description: "Computer-controlled machining for precise components",
      specs: 'Tolerance: ±0.005"',
    },
    {
      title: "Welding Services",
      description: "Certified welders for all types of welding processes",
      specs: "AWS D1.1 Certified",
    },
    {
      title: "Assembly",
      description: "Complete assembly services for complex structures",
      specs: "Up to 100 tons",
    },
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="bg-white" style={{ paddingTop: "5rem" }}>
      {/* Hero Section */}
      <section
        className="bg-gradient-to-br from-accent to-orange-600 text-white"
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
                  <Wrench className="h-8 w-8 text-white" />
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold">
                  Metal Fabrication
                </h1>
              </div>
              <p
                className="text-xl text-white/90 leading-relaxed"
                style={{ marginBottom: "2rem" }}
              >
                Custom metal fabrication services using advanced equipment and
                precision engineering techniques. From concept to completion, we
                deliver exceptional quality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center"
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
                  className="border-2 border-white text-white rounded-lg hover:bg-white hover:text-accent transition-colors text-center"
                  style={{ padding: "12px 32px" }}
                >
                  View Projects
                </Link>
              </div>
            </div>
            <div className="hidden lg:block animate-fade-in">
              <img
                src="./assets/fabrication/Metal Fabrication home.webp"
                alt="Metal Fabrication"
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
              Fabrication <span className="text-accent">Services</span>
            </h2>
            <p
              className="text-lg text-neutral/70 max-w-3xl"
              style={{ marginLeft: "auto", marginRight: "auto" }}
            >
              Comprehensive metal fabrication services with state-of-the-art
              equipment and skilled craftsmen.
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
                    className="h-5 w-5 text-accent flex-shrink-0"
                    style={{ marginRight: "0.75rem" }}
                  />
                  <h4 className="font-bold text-neutral">{service}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="bg-white" style={{ padding: "5rem 0" }}>
        <div
          className="container"
          style={{ padding: "0 1rem", marginLeft: "auto", marginRight: "auto" }}
        >
          <div className="text-center" style={{ marginBottom: "4rem" }}>
            <h2
              className="text-3xl lg:text-4xl font-bold text-neutral"
              style={{ marginBottom: "1.5rem" }}
            >
              Our <span className="text-accent">Capabilities</span>
            </h2>
            <p className="text-lg text-neutral/70">
              Advanced equipment and skilled technicians for all your
              fabrication needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="bg-gray-50 shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg"
                style={{ padding: "2rem" }}
              >
                <div
                  className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center"
                  style={{
                    marginBottom: "1.5rem",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  <Cog className="h-8 w-8 text-accent" />
                </div>
                <h3
                  className="text-xl font-bold text-neutral text-center"
                  style={{ marginBottom: "1rem" }}
                >
                  {capability.title}
                </h3>
                <p
                  className="text-neutral/70 text-center"
                  style={{ marginBottom: "1rem" }}
                >
                  {capability.description}
                </p>
                <div
                  className="bg-accent/5 rounded-lg text-center"
                  style={{ padding: "0.5rem" }}
                >
                  <span className="text-sm font-medium text-accent">
                    {capability.specs}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50" style={{ padding: "5rem 0" }}>
        <div
          className="container"
          style={{ padding: "0 1rem", marginLeft: "auto", marginRight: "auto" }}
        >
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Advanced Technology",
                description:
                  "State-of-the-art CNC machines and automated systems for precision fabrication.",
              },
              {
                icon: Target,
                title: "Precision Engineering",
                description:
                  "Tight tolerances and quality control ensuring perfect fit and finish.",
              },
              {
                icon: CheckCircle,
                title: "Quality Assurance",
                description:
                  "Comprehensive testing and inspection processes for every fabricated component.",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div
                  className="bg-accent/10 w-20 h-20 rounded-full flex items-center justify-center"
                  style={{
                    marginBottom: "1.5rem",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  <feature.icon className="h-10 w-10 text-accent" />
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
      <section className="bg-white" style={{ padding: "5rem 0" }}>
        <div
          className="container"
          style={{ padding: "0 1rem", marginLeft: "auto", marginRight: "auto" }}
        >
          <div className="text-center" style={{ marginBottom: "4rem" }}>
            <h2
              className="text-3xl lg:text-4xl font-bold text-neutral"
              style={{ marginBottom: "1.5rem" }}
            >
              Recent <span className="text-accent">Projects</span>
            </h2>
            <p className="text-lg text-neutral/70">
              Showcasing our expertise in custom metal fabrication across
              various applications.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              project.category.includes("Fabrication") && (<div
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
              className="bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors inline-flex items-center"
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

export default Fabrication;
