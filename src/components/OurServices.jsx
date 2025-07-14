import React from "react";
import {
  Wrench,
  Building,
  Shield,
  Clock,
  Award,
  Users,
  ArrowRight,
  Droplets,
  Settings,
  Palette,
  UserCheck,
  Zap,
  Truck,
} from "lucide-react";
import { Link } from "react-router-dom";

const OurServices = () => {
  const services = [
    {
      icon: Building,
      title: "Structural Erection",
      description:
        "Professional structural steel erection services for industrial buildings, warehouses, and commercial structures.",
      features: [
        "Steel Frame Assembly",
        "Pre-engineered Buildings",
        "Industrial Structures",
        "Safety Compliance",
      ],
      image: "./assets/erection/structural erection home.jpg",
      link: "/erection",
      color: "indigo",
    },
    {
      icon: Wrench,
      title: "Metal Fabrication",
      description:
        "Custom metal fabrication services using advanced equipment and precision engineering techniques.",
      features: [
        "Custom Steel Work",
        "Precision Cutting",
        "Welding Services",
        "Quality Control",
      ],
      image: "./assets/fabrication/Metal Fabrication home.webp",
      link: "/fabrication",
      color: "orange",
    },
    {
      icon: Droplets,
      title: "Piping Services",
      description:
        "Complete piping solutions including installation, maintenance, and repair for industrial applications.",
      features: [
        "Pipeline Installation",
        "Pipe Welding",
        "System Testing",
        "Maintenance",
      ],
      image: "./assets/piping-service/Piping Services home.jpg",
      link: "/piping",
      color: "blue",
    },
    {
      icon: Settings,
      title: "Equipment Installation",
      description:
        "Professional installation and commissioning of industrial equipment and machinery.",
      features: [
        "Machinery Setup",
        "System Integration",
        "Testing & Commissioning",
        "Technical Support",
      ],
      image: "./assets/equipment-installation/Equipment Installation home.jpg",
      link: "/equipment",
      color: "green",
    },
    {
      icon: Palette,
      title: "Industrial Painting",
      description:
        "Specialized industrial painting and coating services for protection and aesthetics.",
      features: [
        "Surface Preparation",
        "Protective Coatings",
        "Anti-corrosion Treatment",
        "Quality Finish",
      ],
      image: "./assets/industrial-painting/Industrial Painting home.jpg",
      link: "/painting",
      color: "purple",
    },
    {
      icon: UserCheck,
      title: "Manpower Supply",
      description:
        "Skilled workforce solutions for industrial projects with experienced professionals.",
      features: [
        "Skilled Technicians",
        "Project Teams",
        "Temporary Staffing",
        "Quality Personnel",
      ],
      image: "./assets/manpower-supply/manpower-supply home.jpg",
      link: "/manpower",
      color: "indigo",
    },
    {
      icon: Truck,
      title: "Equipment Hiring",
      description:
        "Rental services for construction and industrial equipment with maintenance support.",
      features: [
        "All Type of Cranes",
        "Construction Equipments",
        "Welding Equipments",
        "Power Tools",
      ],
      image: "./assets/equipment-hiring/Equipment hiring home.jpg",
      link: "/hiring",
      color: "red",
    },
    {
      icon: Zap,
      title: "Cell Element Work",
      description:
        "Specialized cell element services including TKIS/AKCC rem membraning, dismantling, and assembly.",
      features: [
        "TKIS/AKCC Membraning",
        "Dismantling Services",
        "Assembly & Testing",
        "Quality Assurance",
      ],
      image:
        "./assets/cell-element/cell-element.jpg",
      link: "/cell-element",
      color: "#ca8a04",
    },
  ];

  const features = [
    {
      icon: Shield,
      title: "Safety First",
      description: "Adhering to highest safety standards in all our operations",
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "Committed to meeting project deadlines without compromise",
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "ISO certified processes ensuring consistent quality",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Highly skilled professionals with years of experience",
    },
  ];

  return (
    <div
      id="services"
      style={{
        padding: "60px 20px",
        marginTop: "50px",
        textAlign: "center",
      }}
    >
      <h2
        className="text-3xl md:text-5xl font-bold text-black"
        style={{ marginBottom: "10px" }}
      >
        Our Services
      </h2>

      <div
        style={{
          backgroundColor: "#4f46e5",
          height: "3px",
          borderRadius: "8px",
          margin: "0 auto 30px",
          maxWidth: "640px",
        }}
      />

      <p
        className="text-lg md:text-xl text-gray-700"
        style={{
          maxWidth: "800px",
          marginBottom: "40px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        We offer a comprehensive range of mechanical services, from custom
        fabrication to industrial maintenance and repair.
      </p>

      <section
        style={{
          padding: "0 16px",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {/* Services Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "32px",
            marginBottom: "80px",
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                background: "#fff",
                boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                borderRadius: "12px",
                overflow: "hidden",
                transition: "0.3s",
              }}
            >
              <figure style={{ height: "200px", overflow: "hidden" }}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </figure>
              <div style={{ padding: "24px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "16px",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: `${service.color}10`,
                      padding: "8px",
                      borderRadius: "8px",
                      marginRight: "12px",
                    }}
                  >
                    <service.icon
                      style={{
                        width: "24px",
                        height: "24px",
                        color: service.color,
                      }}
                    />
                  </div>
                  <h3
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: "bold",
                      color: "#1f2937",
                    }}
                  >
                    {service.title}
                  </h3>
                </div>
                <p
                  style={{
                    color: "#6b7280",
                    fontSize: "0.9rem",
                    marginBottom: "16px",
                  }}
                >
                  {service.description}
                </p>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "4px",
                    marginBottom: "16px",
                  }}
                >
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <div
                        style={{
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          backgroundColor: service.color,
                          marginRight: "8px",
                        }}
                      ></div>
                      <span style={{ fontSize: "12px", color: "#6b7280" }}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Link
                    to={service.link}
                    style={{
                      backgroundColor: service.color,
                      color: "#fff",
                      padding: "8px 16px",
                      borderRadius: "8px",
                      fontSize: "0.85rem",
                      display: "flex",
                      alignItems: "center",
                      textDecoration: "none",
                      transition: "0.3s",
                    }}
                  >
                    Learn More
                    <ArrowRight
                      style={{
                        width: "12px",
                        height: "12px",
                        marginLeft: "6px",
                      }}
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "24px",
          }}
        >
          {features.map((item, index) => (
            <div
              key={index}
              style={{
                background: "#fff",
                borderRadius: "12px",
                boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
                padding: "32px 24px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  backgroundColor: "#4f46e510",
                  width: "64px",
                  height: "64px",
                  margin: "0 auto 16px",
                  borderRadius: "999px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <item.icon
                  style={{ width: "32px", height: "32px", color: "#4f46e5" }}
                />
              </div>
              <h4
                style={{
                  fontWeight: "bold",
                  marginBottom: "8px",
                  color: "#1f2937",
                }}
              >
                {item.title}
              </h4>
              <p style={{ fontSize: "14px", color: "#6b7280" }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OurServices;
