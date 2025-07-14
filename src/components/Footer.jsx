import React from 'react';
import { contactInfo, quickLinks } from '../Constants';
import { Settings, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer
      className="bg-gray-900 text-gray-300 font-sans rounded-t-xl shadow-lg"
      style={{
        paddingTop: '32px',
        paddingBottom: '32px',
        paddingLeft: '16px',
        paddingRight: '16px',
      }}
    >
      <div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4"
        style={{
          gap: '24px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        {/* Company Info Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3
            className="text-xl sm:text-2xl font-bold text-white"
            style={{ marginBottom: '12px' }}
          >
            RC Mechanicals
          </h3>
          <p
            className="text-gray-400 text-sm"
            style={{ marginBottom: '12px' }}
          >
            Fabrication & Erection Specialists
          </p>

          {/* Social Media Links */}
          <div className="flex text-2xl" style={{ gap: '12px' }}>
            <a href="https://wa.me/918601941900" className="text-gray-400 hover:text-white transition-colors duration-300">
              <i className="fab fa-facebook-f"></i>
              <span className="sr-only">Facebook</span>
            </a>
            <a href="https://wa.me/918601941900" className="text-gray-400 hover:text-white transition-colors duration-300">
              <i className="fab fa-whatsapp"></i>
              <span className="sr-only">Whatsapp</span>
            </a>
            <a href="https://wa.me/918601941900" className="text-gray-400 hover:text-white transition-colors duration-300">
              <i className="fab fa-linkedin-in"></i>
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="https://wa.me/918601941900" className="text-gray-400 hover:text-white transition-colors duration-300">
              <i className="fab fa-instagram"></i>
              <span className="sr-only">Instagram</span>
            </a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="flex items-center md:flex-col md:items-start text-center md:text-left" style={{ gap: '12px' }}>
          <h4 className="text-lg sm:text-xl font-semibold text-white">
            Quick Links
          </h4>
          <ul className="flex md:flex-col" style={{ gap: '8px' }}>
            {quickLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-gray-400 text-sm hover:text-white hover:underline transition-colors duration-300"
                >
                  | {link.name} |
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact + Map Section */}
        <div
          className="md:col-span-1 lg:col-span-2 flex flex-col md:flex-row items-center justify-center w-full"
          style={{ gap: '24px' }}
        >
          {/* Contact Info */}
          <div
            className="flex flex-col justify-between text-left text-sm text-gray-300"
            style={{
              gap: '12px',
              flex: 1,
              height: '100%',
              minWidth: '260px',
            }}
          >
            <p>
              <strong className="text-white">Address:</strong> {contactInfo.address}
            </p>
            <p>
              <strong className="text-white">Phone:</strong>{' '}
              <a
                href={`tel:${contactInfo.phone}`}
                className="hover:text-white hover:underline transition-colors duration-300"
              >
                {contactInfo.phone}
              </a>
            </p>
            <p>
              <strong className="text-white">Email:</strong>{' '}
              <a
                href={`mailto:${contactInfo.email}`}
                className="hover:text-white hover:underline transition-colors duration-300"
              >
                {contactInfo.email}
              </a>
            </p>
          </div>

          {/* Map */}
          <div
            className="rounded-lg overflow-hidden shadow-md w-full"
            style={{ flex: 1, minHeight: '180px', height: '100%' }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d473694.3358040232!2d72.76440665566737!3d21.944659962602362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be020a881152601%3A0x312ca552efdc97f3!2sGolden%20Square!5e0!3m2!1sen!2sin!4v1750167753678!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '180px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Company Location Map"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div
        className="border-t border-gray-700 text-center text-gray-500 text-xs"
        style={{ marginTop: '24px', paddingTop: '16px' }}
      >
        <p>&copy; {new Date().getFullYear()} RC Mechanicals. All rights reserved.</p>
        <p style={{ marginTop: '2px' }}>
          Designed and Developed by ARM Technologies
        </p>
      </div>
    </footer>
  );
};

export default Footer;
