import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  UserCheck,
  CheckCircle,
  ArrowRight,
  Shield,
  Clock,
  Award,
} from "lucide-react";
import { projects } from "../Constants";

const ManpowerSupply = () => {
  const services = [
    "Skilled Technicians",
    "Project Teams",
    "Temporary Staffing",
    "Specialized Personnel",
    "Safety Trained Staff",
    "Quality Supervisors",
    "Equipment Operators",
    "Support Staff",
  ];

  const specializations = [
    {
      title: "Welders & Fabricators",
      description:
        "Certified welders with expertise in various welding processes",
      count: "50+",
    },
    {
      title: "Structural Engineers",
      description: "Licensed engineers for complex structural projects",
      count: "15+",
    },
    {
      title: "Equipment Operators",
      description: "Experienced operators for heavy machinery and equipment",
      count: "30+",
    },
    {
      title: "Safety Supervisors",
      description: "OSHA certified safety professionals for site management",
      count: "10+",
    },
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="bg-white" style={{ paddingTop: "5rem" }}>
      {/* Hero Section */}
      <section
        className="bg-gradient-to-br from-indigo-600 to-blue-600 text-white"
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
                  <UserCheck className="h-8 w-8 text-white" />
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold">
                  Manpower Supply
                </h1>
              </div>
              <p
                className="text-xl text-white/90 leading-relaxed"
                style={{ marginBottom: "2rem" }}
              >
                Skilled workforce solutions for industrial projects with
                experienced professionals. Quality personnel for temporary and
                long-term assignments.
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
                  to="/about"
                  className="border-2 border-white text-white rounded-lg hover:bg-white hover:text-indigo-600 transition-colors text-center"
                  style={{ padding: "12px 32px" }}
                >
                  Our Team
                </Link>
              </div>
            </div>
            <div className="hidden lg:block animate-fade-in">
              <img
                src="./assets/manpower-supply/manpower-supply home.jpg"
                alt="Manpower Supply"
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
              Workforce <span className="text-indigo-600">Solutions</span>
            </h2>
            <p
              className="text-lg text-neutral/70 max-w-3xl"
              style={{ marginLeft: "auto", marginRight: "auto" }}
            >
              Professional manpower supply services for all your industrial
              project needs.
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
                    className="h-5 w-5 text-indigo-600 flex-shrink-0"
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
              Our <span className="text-indigo-600">Specialists</span>
            </h2>
            <p className="text-lg text-neutral/70">
              Experienced professionals across various industrial
              specializations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specializations.map((spec, index) => (
              <div
                key={index}
                className="bg-gray-50 shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg"
                style={{ padding: "2rem" }}
              >
                <div className="text-center">
                  <div
                    className="text-3xl font-bold text-indigo-600"
                    style={{ marginBottom: "0.5rem" }}
                  >
                    {spec.count}
                  </div>
                  <h3
                    className="text-xl font-bold text-neutral"
                    style={{ marginBottom: "1rem" }}
                  >
                    {spec.title}
                  </h3>
                  <p className="text-neutral/70 text-sm">{spec.description}</p>
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
                icon: Shield,
                title: "Certified Personnel",
                description:
                  "All staff are properly certified and trained for their respective roles.",
              },
              {
                icon: Clock,
                title: "Flexible Scheduling",
                description:
                  "Adaptable workforce solutions to meet your project timelines.",
              },
              {
                icon: Award,
                title: "Quality Assurance",
                description:
                  "Rigorous screening and quality control for all personnel.",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div
                  className="bg-indigo-600/10 w-20 h-20 rounded-full flex items-center justify-center"
                  style={{
                    marginBottom: "1.5rem",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  <feature.icon className="h-10 w-10 text-indigo-600" />
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
              Recent <span className="text-indigo-600">Projects</span>
            </h2>
            <p className="text-lg text-neutral/70">
              Showcasing our expertise in custom metal fabrication across
              various applications.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map(
              (project, index) =>
                project.category.includes("Manpower") && (
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
              className="bg-indigo-600 text-white rounded-lg hover:bg-indigo-600/90 transition-colors inline-flex items-center"
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

export default ManpowerSupply;
