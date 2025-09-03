import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Target, Eye, Users, Trophy, ArrowRight } from "lucide-react";
import CoreValues from "../components/CoreValues";

const About = () => {
  const stats = [
    { number: "150+", label: "Projects Completed", icon: Trophy },
    { number: "10+", label: "Years Experience", icon: Target },
    { number: "50+", label: "Expert Engineers", icon: Users },
    { number: "20+", label: "Industry Awards", icon: Trophy },
  ];

  const team = [
    {
      name: "Mr. Harigendra Singh",
      position: "Director / Proprietor",
      experience: "10+ years in this field",
      image: "./assets/Harigendra Singh1.jpg",
    },
    {
      name: "Mr. Sagarkanti Lenka",
      position: "G.M. Projects & Technical Lead",
      experience: "10+ years in this field",
      image: "./assets/Sagar Lenka.jpg",
    },
    {
      name: "Mr. Hitendra Singh",
      position: "Site Coordinator",
      experience: "10+ years in this field",
      image: "./assets/General.png",
    },
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="bg-white" style={{ paddingTop: "6rem" }}>
      {/* Hero Section */}
      <section
        className="bg-gradient-to-br from-primary to-blue-600 text-white"
        style={{ padding: "5rem 0" }}
      >
        <div
          className="container"
          style={{ padding: "0 1rem", marginLeft: "auto", marginRight: "auto" }}
        >
          <div className="text-center">
            <h1
              className="text-4xl sm:text-5xl font-bold leading-tight"
              style={{ marginBottom: "24px" }}
            >
              About{" "}
              <span style={{ whiteSpace: "nowrap" }}>
                <span style={{ color: "#e3342f" }}>RC</span>&nbsp;
                <span style={{ color: "#1e3a8a" }}>Mechanicals</span>
              </span>
            </h1>
            <p
              className="text-xl text-white/90 max-w-3xl leading-relaxed"
              style={{ marginLeft: "auto", marginRight: "auto" }}
            >
              RC MECHANICALS has grown to become a leading
              provider of industrial fabrication and erection services,
              committed to excellence and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white" style={{ padding: "5rem 0" }}>
        <div
          className="container"
          style={{ padding: "0 1rem", marginLeft: "auto", marginRight: "auto" }}
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up">
              <h2
                className="text-3xl lg:text-4xl font-bold text-neutral"
                style={{ marginBottom: "1.5rem" }}
              >
                Our Story
              </h2>
              <p
                className="text-lg text-neutral/70 leading-relaxed"
                style={{ marginBottom: "2rem" }}
              >
                Founded with a vision to revolutionize industrial construction,
                RC MECHANICALS has consistently delivered exceptional results
                across diverse sectors. Our journey began with a small team of
                dedicated engineers and has evolved into a comprehensive
                industrial solutions provider.
              </p>

              <div
                className="flex flex-col gap-6 space-y-6"
                style={{ marginBottom: "2rem" }}
              >
                <div className="flex items-start ">
                  <div
                    className="bg-primary/10 rounded-lg"
                    style={{
                      padding: "0.5rem",
                      marginRight: "1rem",
                      marginTop: "0.25rem",
                    }}
                  >
                    <Target className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4
                      className="font-bold text-neutral"
                      style={{ marginBottom: "0.5rem" }}
                    >
                      Our Mission
                    </h4>
                    <p className="text-neutral/70">
                      To deliver superior engineering solutions that exceed
                      client expectations while maintaining the highest
                      standards of safety and quality.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div
                    className="bg-primary/10 rounded-lg"
                    style={{
                      padding: "0.5rem",
                      marginRight: "1rem",
                      marginTop: "0.25rem",
                    }}
                  >
                    <Eye className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4
                      className="font-bold text-neutral"
                      style={{ marginBottom: "0.5rem" }}
                    >
                      Our Vision
                    </h4>
                    <p className="text-neutral/70">
                      To be the most trusted partner for industrial fabrication
                      and erection services, setting new benchmarks in the
                      industry.
                    </p>
                  </div>
                </div>
              </div>

              <Link
                to="/contact"
                className="bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors inline-flex items-center"
                style={{ padding: "12px 32px" }}
              >
                Work With Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-6 animate-fade-in">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-primary to-blue-600 text-white shadow-xl rounded-lg"
                >
                  <div className="text-center" style={{ padding: "2rem" }}>
                    <stat.icon
                      className="h-12 w-12 opacity-80"
                      style={{
                        marginBottom: "1rem",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    />
                    <div
                      className="text-3xl font-bold"
                      style={{ marginBottom: "0.5rem" }}
                    >
                      {stat.number}
                    </div>
                    <div className="text-sm opacity-90">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <CoreValues />

      {/* Team Section */}
      <section className="bg-white" style={{ padding: "5rem 0" }}>
        <div
          className="container"
          style={{ padding: "0 1rem", marginLeft: "auto", marginRight: "auto" }}
        >
          <div className="text-center" style={{ marginBottom: "4rem" }}>
            <h2
              className="text-3xl md:text-5xl font-bold text-black"
              style={{ marginBottom: "10px" }}
            >
              Higher Management
            </h2>
            {/* Underline */}
            <div
              className="bg-indigo-600 w-full max-w-xl h-[3px] rounded-xl"
              style={{
                marginBottom: "30px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            />
            <p className="text-lg text-neutral/70">
              Meet the experienced professionals leading RC MECHANICALS to new
              heights.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg overflow-hidden"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-contain"
                />
                <div style={{ padding: "1.5rem" }}>
                  <h4
                    className="font-bold text-neutral"
                    style={{ marginBottom: "0.5rem" }}
                  >
                    {member.name}
                  </h4>
                  <p
                    className="text-primary font-medium"
                    style={{ marginBottom: "0.5rem" }}
                  >
                    {member.position}
                  </p>
                  <p className="text-neutral/70 text-sm">{member.experience}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
          <Link
            to="/contact"
            className="inline-block bg-white text-blue-700 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105"
            style={{ padding: "12px 32px" }}
          >
            Get a Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
