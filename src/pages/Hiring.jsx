import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Truck,
  CheckCircle,
  ArrowRight,
  Shield,
  Clock,
  Award,
} from "lucide-react";

const Hiring = () => {
  const services = [
    "Heavy Machinery Rental",
    "Construction Equipment",
    "All Types of Cranes - Hydra, Farana & All Terrain Cranes",
    "Welding Equipment",
    "Power Tools",
    "Safety Equipment",
    "Transport Vehicles",
    "Maintenance Support",
  ];

  const equipment = [
    {
      title: "Crane Hiring Services - Farana, Hydra & All Terrain Cranes",
      description: "Mobile cranes, tower cranes, and lifting equipment",
      image:
        "./assets/equipment-hiring/crane.jpeg",
      capacity: "Up to 500 tons",
    },
    {
      title: "Excavators & Loaders",
      description: "Heavy earthmoving and material handling equipment",
      image:
        "./assets/equipment-hiring/excavator.jpg",
      capacity: "Various sizes",
    },
    {
      title: "Welding Equipment",
      description: "Professional welding machines and accessories",
      image:
        "./assets/equipment-hiring/welding.jpg",
      capacity: "All processes",
    },
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="bg-white" style={{ paddingTop: "5rem" }}>
      {/* Hero Section */}
      <section
        className="bg-gradient-to-br from-red-600 to-orange-600 text-white"
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
                  <Truck className="h-8 w-8 text-white" />
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold">
                  Equipment Hiring
                </h1>
              </div>
              <p
                className="text-xl text-white/90 leading-relaxed"
                style={{ marginBottom: "2rem" }}
              >
                Rental services for construction and industrial equipment with
                maintenance support. Flexible terms and reliable equipment for
                your projects.
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
                  className="border-2 border-white text-white rounded-lg hover:bg-white hover:text-red-600 transition-colors text-center"
                  style={{ padding: "12px 32px" }}
                >
                  View Equipment
                </Link>
              </div>
            </div>
            <div className="hidden lg:block animate-fade-in">
              <img
                src="./assets/equipment-hiring/Equipment hiring home.jpg"
                alt="Equipment Hiring"
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
              Equipment <span className="text-red-600">Rental</span>
            </h2>
            <p
              className="text-lg text-neutral/70 max-w-3xl"
              style={{ marginLeft: "auto", marginRight: "auto" }}
            >
              Comprehensive equipment rental services for all your industrial
              and construction needs.
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
                    className="h-5 w-5 text-red-600 flex-shrink-0"
                    style={{ marginRight: "0.75rem" }}
                  />
                  <h4 className="font-bold text-neutral">{service}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
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
              Available <span className="text-red-600">Equipment</span>
            </h2>
            <p className="text-lg text-neutral/70">
              Wide range of equipment available for rent with flexible terms.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {equipment.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div style={{ padding: "1.5rem" }}>
                  <h4
                    className="font-bold text-neutral"
                    style={{ marginBottom: "0.5rem" }}
                  >
                    {item.title}
                  </h4>
                  <p
                    className="text-neutral/70 text-sm"
                    style={{ marginBottom: "0.75rem" }}
                  >
                    {item.description}
                  </p>
                  <div
                    className="bg-red-600/10 rounded-lg text-center"
                    style={{ padding: "0.5rem" }}
                  >
                    <span className="text-sm font-medium text-red-600">
                      {item.capacity}
                    </span>
                  </div>
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
                title: "Well-Maintained",
                description:
                  "All equipment is regularly serviced and maintained to highest standards.",
              },
              {
                icon: Clock,
                title: "Flexible Terms",
                description:
                  "Daily, weekly, monthly, and long-term rental options available.",
              },
              {
                icon: Award,
                title: "Support Included",
                description:
                  "Technical support and maintenance services included with rentals.",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div
                  className="bg-red-600/10 w-20 h-20 rounded-full flex items-center justify-center"
                  style={{
                    marginBottom: "1.5rem",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  <feature.icon className="h-10 w-10 text-red-600" />
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
    </div>
  );
};

export default Hiring;
