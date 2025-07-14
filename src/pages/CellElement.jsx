import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Zap,
  CheckCircle,
  ArrowRight,
  Shield,
  Clock,
  Award,
  Wrench,
  Settings,
} from "lucide-react";
import { projects } from "../Constants";

const CellElement = () => {
  const services = [
    "Cell Element Rem Membraning (TKIS/AKCC)",
    "Cell Element Dismantling",
    "Cell Element Erection",
    "Assembly & Alignment",
    "Performance Testing",
    "Quality Inspection",
    "Safety Compliance",
    "Technical Documentation",
  ];

  const specializations = [
    {
      title: "TKIS/AKCC Membraning",
      description:
        "Specialized rem membraning services for TKIS and AKCC cell elements",
      features: [
        "Precision Installation",
        "Quality Materials",
        "Expert Technicians",
        "Safety Protocols",
      ],
      icon: Wrench,
    },
    {
      title: "Dismantling Services",
      description:
        "Safe and efficient dismantling of cell elements with proper handling",
      features: [
        "Safe Removal",
        "Environmental Care",
        "Proper Disposal",
        "Documentation",
      ],
      icon: Settings,
    },
    {
      title: "Erection & Assembly",
      description:
        "Complete erection, assembly, alignment, and testing of cell elements",
      features: [
        "Precise Assembly",
        "Alignment Testing",
        "Performance Validation",
        "Quality Assurance",
      ],
      icon: Zap,
    },
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="bg-white" style={{ paddingTop: "5rem" }}>
      {/* Hero Section */}
      <section
        className="bg-gradient-to-br from-yellow-500 to-amber-600 text-white"
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
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold">
                  Cell Element Work
                </h1>
              </div>
              <p
                className="text-xl text-white/90 leading-relaxed"
                style={{ marginBottom: "2rem" }}
              >
                Specialized cell element services including TKIS/AKCC rem
                membraning, dismantling, erection, assembly, alignment, and
                comprehensive testing solutions.
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
                  className="border-2 border-white text-white rounded-lg hover:bg-white hover:text-yellow-500 transition-colors text-center"
                  style={{ padding: "12px 32px" }}
                >
                  View Projects
                </Link>
              </div>
            </div>
            <div className="hidden lg:block animate-fade-in">
              <img
                src="./assets/cell-element/cell-element.jpg"
                alt="Cell Element Work"
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
              Cell Element <span className="text-yellow-600">Services</span>
            </h2>
            <p
              className="text-lg text-neutral/70 max-w-3xl"
              style={{ marginLeft: "auto", marginRight: "auto" }}
            >
              Comprehensive cell element solutions with specialized expertise in
              TKIS/AKCC systems.
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
                    className="h-5 w-5 text-yellow-600 flex-shrink-0"
                    style={{ marginRight: "0.75rem" }}
                  />
                  <h4 className="font-bold text-neutral">{service}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specializations Section */}
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
              Our <span className="text-yellow-600">Specializations</span>
            </h2>
            <p className="text-lg text-neutral/70">
              Expert services across all aspects of cell element work and
              maintenance.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {specializations.map((spec, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-yellow-50 to-amber-50 shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg"
                style={{ padding: "2rem" }}
              >
                <div className="text-center" style={{ marginBottom: "1.5rem" }}>
                  <spec.icon
                    className="text-4xl text-[orange]"
                    style={{
                      marginBottom: "1rem",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  />
                  <h3
                    className="text-xl font-bold text-neutral"
                    style={{ marginBottom: "0.75rem" }}
                  >
                    {spec.title}
                  </h3>
                  <p className="text-neutral/70">{spec.description}</p>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {spec.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div
                        className="w-2 h-2 bg-yellow-600 rounded-full"
                        style={{ marginRight: "0.5rem" }}
                      ></div>
                      <span className="text-sm text-neutral/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Details Section */}
      <section className="bg-gray-50" style={{ padding: "5rem 0" }}>
        <div
          className="container"
          style={{ padding: "0 1rem", marginLeft: "auto", marginRight: "auto" }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="text-3xl lg:text-4xl font-bold text-neutral"
                style={{ marginBottom: "1.5rem" }}
              >
                Technical <span className="text-yellow-600">Expertise</span>
              </h2>
              <p
                className="text-lg text-neutral/70 leading-relaxed"
                style={{ marginBottom: "2rem" }}
              >
                Our specialized team brings years of experience in cell element
                work, with particular expertise in TKIS (Thyristor-based) and
                AKCC (Advanced Control) systems. We ensure precision in every
                aspect of the process.
              </p>

              <div className="flex flex-col gap-4">
                <div
                  className="bg-white rounded-lg shadow-md"
                  style={{ padding: "1.5rem" }}
                >
                  <h4
                    className="font-bold text-neutral"
                    style={{ marginBottom: "0.5rem" }}
                  >
                    TKIS/AKCC Rem Membraning
                  </h4>
                  <p className="text-neutral/70 text-sm">
                    Specialized membrane replacement and installation services
                    for TKIS and AKCC cell elements with precision engineering
                    and quality materials.
                  </p>
                </div>

                <div
                  className="bg-white rounded-lg shadow-md"
                  style={{ padding: "1.5rem" }}
                >
                  <h4
                    className="font-bold text-neutral"
                    style={{ marginBottom: "0.5rem" }}
                  >
                    Assembly & Testing
                  </h4>
                  <p className="text-neutral/70 text-sm">
                    Complete assembly, precise alignment, and comprehensive
                    testing to ensure optimal performance and reliability of
                    cell element systems.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="bg-gradient-to-br from-yellow-500 to-amber-600 rounded-lg text-white"
              style={{ padding: "2rem" }}
            >
              <h3
                className="text-2xl font-bold"
                style={{ marginBottom: "1.5rem" }}
              >
                Process Overview
              </h3>
              <div className="space-y-4">
                {[
                  {
                    step: "01",
                    title: "Assessment & Planning",
                    desc: "Detailed evaluation and project planning",
                  },
                  {
                    step: "02",
                    title: "Safe Dismantling",
                    desc: "Careful removal of existing components",
                  },
                  {
                    step: "03",
                    title: "Rem Membraning",
                    desc: "TKIS/AKCC membrane installation",
                  },
                  {
                    step: "04",
                    title: "Erection & Assembly",
                    desc: "Precise assembly and alignment",
                  },
                  {
                    step: "05",
                    title: "Testing & Validation",
                    desc: "Comprehensive performance testing",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div
                      className="bg-white/20 rounded-lg text-center"
                      style={{
                        padding: "0.5rem",
                        marginRight: "1rem",
                        minWidth: "3rem",
                      }}
                    >
                      <span className="font-bold text-sm">{item.step}</span>
                    </div>
                    <div style={{ paddingBottom: "25px" }}>
                      <h5 className="font-bold">{item.title}</h5>
                      <p className="text-white/80 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
                title: "Safety Standards",
                description:
                  "Strict adherence to safety protocols during all cell element operations.",
              },
              {
                icon: Clock,
                title: "Minimal Downtime",
                description:
                  "Efficient processes designed to minimize operational disruption.",
              },
              {
                icon: Award,
                title: "Quality Assurance",
                description:
                  "Rigorous testing and validation for all cell element installations.",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div
                  className="bg-yellow-600/10 w-20 h-20 rounded-full flex items-center justify-center"
                  style={{
                    marginBottom: "1.5rem",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  <feature.icon className="h-10 w-10 text-yellow-600" />
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
              Recent <span className="text-yellow-600">Projects</span>
            </h2>
            <p className="text-lg text-neutral/70">
              Showcasing our expertise in cell element work across various
              industrial applications.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map(
              (project, index) =>
                project.category.includes("Cell Element Work") && (
                  <div
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
                  </div>
                )
            )}
          </div>

          <div className="text-center" style={{ marginTop: "3rem" }}>
            <Link
              to="/gallery"
              className="bg-yellow-600 text-white rounded-lg hover:bg-yellow-600/90 transition-colors inline-flex items-center"
              style={{ padding: "12px 32px" }}
            >
              View All Projects
              <ArrowRight className="h-5 w-5" style={{ marginLeft: "8px" }} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="bg-gradient-to-r from-yellow-500 to-amber-600 text-white"
        style={{ padding: "4rem 0", marginBottom: "50px" }}
      >
        <div
          className="container text-center"
          style={{ padding: "0 1rem", marginLeft: "auto", marginRight: "auto" }}
        >
          <h3 className="text-3xl font-bold" style={{ marginBottom: "1rem" }}>
            Need Cell Element Services?
          </h3>
          <p className="text-xl text-white/90" style={{ marginBottom: "2rem" }}>
            Contact us for specialized TKIS/AKCC solutions and expert cell
            element work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors inline-flex items-center justify-center"
              style={{ padding: "12px 32px" }}
            >
              Get Started
              <ArrowRight className="h-5 w-5" style={{ marginLeft: "8px" }} />
            </Link>
            <Link
              to="/services"
              className="border-2 border-white text-white rounded-lg hover:bg-white hover:text-yellow-500 transition-colors text-center"
              style={{ padding: "12px 32px" }}
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CellElement;
