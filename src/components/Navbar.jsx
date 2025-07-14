import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import gsap from "gsap";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [mobileShowServices, setMobileShowServices] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef(null);
  const mobileNavRef = useRef(null);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowServices(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileNavRef.current) return;
    if (isMenuOpen) {
      gsap.to(mobileNavRef.current, {
        x: 0,
        duration: 0.4,
        ease: "power3.out",
        display: "flex",
      });
    } else {
      gsap.to(mobileNavRef.current, {
        x: "100%",
        duration: 0.4,
        ease: "power3.in",
        onComplete: () => {
          gsap.set(mobileNavRef.current, { display: "none" });
        },
      });
    }
  }, [isMenuOpen]);

  const navTextColor = isHome
    ? isScrolled
      ? "text-slate-800"
      : "text-white"
    : "text-slate-800";

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isHome
            ? isScrolled
              ? "bg-white/95 shadow-md backdrop-blur"
              : "bg-transparent"
            : "bg-white/95 shadow-md"
        }`}
        style={{ padding: "10px 4px 4px" }}
      >
        <div
          className="max-w-7xl"
          style={{
            paddingLeft: "16px",
            paddingRight: "16px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <div
            className="flex items-center justify-between"
            style={{ height: "80px" }}
          >
            <div>
              <Link
                to="/"
                className={`text-3xl font-bold ${
                  isHome && !isScrolled ? "text-white" : "text-red-700"
                }`}
              >
                RC <span className={`${navTextColor}`}>Mechanicals</span>
              </Link>
              <p
                className={`text-sm ${
                  isHome && !isScrolled ? "text-white/70" : "text-slate-700/80"
                }`}
              >
                Engineering Excellence
              </p>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center gap-2">
              {[
                { path: "/", label: "Home" },
                { path: "/about", label: "About Us" },
                { path: "/gallery", label: "Gallery" },
                { path: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path}>
                    <button
                      className={`rounded-lg transition ${
                        location.pathname === link.path
                          ? "bg-sky-500 text-white"
                          : `hover:bg-sky-500 hover:text-white ${navTextColor}`
                      }`}
                      style={{ padding: "8px 16px" }}
                    >
                      {link.label}
                    </button>
                  </Link>
                </li>
              ))}

              {/* Dropdown */}
              <li ref={dropdownRef} className="relative">
                <button
                  onClick={() => setShowServices(!showServices)}
                  className={`flex items-center gap-1 rounded-lg hover:bg-sky-500 hover:text-white transition ${navTextColor}`}
                  style={{ padding: "8px 16px" }}
                >
                  Services{" "}
                  <i
                    className={`fas fa-caret-${showServices ? "up" : "down"}`}
                  ></i>
                </button>
                {showServices && (
                  <div
                    className="absolute top-full left-0 min-w-[230px] bg-white text-black shadow-md rounded-md z-50 flex flex-col"
                    style={{ marginTop: "4px", padding: "8px 0" }}
                  >
                    {[
                      { to: "/erection", icon: "fa-building", label: "Erection" },
                      { to: "/fabrication", icon: "fa-wrench", label: "Fabrication" },
                      { to: "/piping", icon: "fa-tools", label: "Piping Services" },
                      { to: "/equipment", icon: "fa-cogs", label: "Equipment Installation" },
                      { to: "/painting", icon: "fa-paint-roller", label: "Industrial Painting" },
                      { to: "/manpower", icon: "fa-users", label: "Manpower Supply" },
                      { to: "/hiring", icon: "fa-truck", label: "Equipment Hiring" },
                      { to: "/cell-element", icon: "fa-solid fa-bolt", label: "Cell Element work" },
                    ].map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        onClick={() => setShowServices(false)}
                        className={`block hover:bg-blue-50 ${
                          location.pathname === item.to ? "bg-blue-50 font-semibold" : ""
                        }`}
                        style={{ padding: "8px 16px" }}
                      >
                        <i
                          className={`fas ${item.icon} text-blue-600`}
                          style={{ marginRight: "8px" }}
                        ></i>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>

              <Link to="/contact">
                <button
                  className={`bg-sky-500 text-white hover:bg-sky-600 transition rounded-lg ${
                    location.pathname === "/contact" ? "shadow-lg" : ""
                  }`}
                  style={{ padding: "8px 20px", marginLeft: "16px" }}
                >
                  Get Quote
                </button>
              </Link>
            </ul>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden rounded-lg ${navTextColor}`}
              style={{ padding: "8px" }}
            >
              {isMenuOpen ? (
                <X className="h-12 w-12" />
              ) : (
                <Menu className="h-10 w-10" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          ref={mobileNavRef}
          className="fixed top-0 right-0 h-full w-72 bg-white z-60 shadow-lg hidden flex-col text-gray-800 font-semibold text-lg"
          style={{ padding: "40px 24px", lineHeight: "1.8" }}
        >
          <button
            onClick={() => setIsMenuOpen(false)}
            className="self-end text-gray-600 hover:text-black transition"
            style={{ marginBottom: "24px" }}
          >
            <X className="h-8 w-8" />
          </button>

          {/* Main Links */}
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About Us" },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setIsMenuOpen(false)}
              className={`block transition ${
                location.pathname === item.to ? "text-sky-600 font-bold" : "hover:text-sky-600"
              }`}
              style={{ marginBottom: "20px" }}
            >
              {item.label}
            </Link>
          ))}

          {/* Services Dropdown */}
          <div
            onClick={() => setMobileShowServices(!mobileShowServices)}
            className="flex justify-between items-center cursor-pointer hover:text-sky-600 transition"
            style={{ marginBottom: "16px" }}
          >
            <span>Services</span>
            <i
              className={`fas fa-chevron-${mobileShowServices ? "up" : "down"}`}
            ></i>
          </div>

          {mobileShowServices && (
            <div
              style={{ paddingLeft: "16px", marginBottom: "20px" }}
              className="space-y-3"
            >
              {[
                { to: "/erection", icon: "fa-building", label: "Erection" },
                { to: "/fabrication", icon: "fa-wrench", label: "Fabrication" },
                { to: "/piping", icon: "fa-tools", label: "Piping Services" },
                { to: "/equipment", icon: "fa-cogs", label: "Equipment Installation" },
                { to: "/painting", icon: "fa-paint-roller", label: "Industrial Painting" },
                { to: "/manpower", icon: "fa-users", label: "Manpower Supply" },
                { to: "/hiring", icon: "fa-truck", label: "Equipment Hiring" },
                { to: "/cell-element", icon: "fa-solid fa-bolt", label: "Cell Element work" },
              ].map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block transition ${
                    location.pathname === item.to ? "text-sky-600 font-bold" : "hover:text-sky-600"
                  }`}
                  style={{ marginTop: "10px" }}
                >
                  <i
                    className={`fas ${item.icon} text-blue-600`}
                    style={{ marginRight: "8px" }}
                  ></i>
                  {item.label}
                </Link>
              ))}
            </div>
          )}

          <Link
            to="/gallery"
            onClick={() => setIsMenuOpen(false)}
            className={`block transition ${
              location.pathname === "/gallery"
                ? "text-sky-600 font-bold"
                : "hover:text-sky-600"
            }`}
            style={{ marginBottom: "20px" }}
          >
            Gallery
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
            className={`block transition ${
              location.pathname === "/contact"
                ? "text-sky-600 font-bold"
                : "hover:text-sky-600"
            }`}
          >
            Contact Us
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
