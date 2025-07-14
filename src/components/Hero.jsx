import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen relative overflow-hidden" >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-blue-600 to-secondary"></div>
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(./assets/Hero.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div
        className="relative w-full max-w-7xl flex items-center"
        style={{
          paddingTop: '8rem',
          paddingBottom: '4rem',
          paddingLeft: '1rem',
          paddingRight: '1rem',
          minHeight: '100vh',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left */}
          <div className="text-white animate-slide-up">
            <div style={{ marginBottom: '1.5rem' }}>
              <span
                className="bg-accent text-white rounded-full text-sm font-medium inline-block"
                style={{ marginBottom: '1rem', padding: '8px 16px' }}
              >
                Industrial Excellence Since 2015
              </span>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
                style={{ marginBottom: '1.5rem' }}
              >
                Professional <span className="text-accent">Fabrication</span>
                <br />
                & Erection Services
              </h1>
              <p
                className="text-lg sm:text-xl text-white/90 leading-relaxed"
                style={{ marginBottom: '2rem' }}
              >
                Delivering precision engineering solutions with unmatched quality and reliability. From concept to
                completion, we bring your industrial projects to life.
              </p>
            </div>

            {/* Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4"
              style={{ marginBottom: '2rem' }}
            >
              <button
                className="bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors flex items-center justify-center group"
                style={{ padding: '12px 32px' }}
                onClick={() => scrollToSection('services')}
              >
                Our Services
                <ArrowRight
                  className="h-5 w-5 group-hover:translate-x-1 transition-transform"
                  style={{ marginLeft: '8px' }}
                />
              </button>
              
                <button 
                className="border-2 border-white text-white rounded-lg hover:bg-white hover:text-primary transition-colors"
                style={{ padding: '12px 32px' }}
              >
                <Link to={'/contact'}>
                Get Quote
                </Link>
              </button>
              
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { number: '150+', label: 'Projects Completed' },
                { number: '10+', label: 'Years Experience' },
                { number: '100%', label: 'Client Satisfaction' },
              ].map((stat, index) => (
                <div key={index} className="text-center sm:text-left">
                  <div className="text-2xl font-bold text-accent">{stat.number}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="hidden lg:block animate-fade-in">
            <div className="relative">
              <div
                className="bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl rounded-lg"
                style={{ padding: '2rem' }}
              >
                <h3
                  className="text-xl font-bold text-white"
                  style={{ marginBottom: '1rem' }}
                >
                  Why Choose RC MECHANICALS?
                </h3>
                <ul className="flex flex-col" style={{ gap: '0.75rem' }}>
                  {[
                    'Expert Certified Quality',
                    'State-of-the-art Equipment',
                    'Experienced Engineering Team',
                    'On-time Project Delivery',
                    '24/7 Customer Support',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-white/90">
                      <CheckCircle
                        className="h-5 w-5 text-accent flex-shrink-0"
                        style={{ marginRight: '0.75rem' }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div
            className="w-1 h-3 bg-white/70 rounded-full animate-pulse"
            style={{ marginTop: '0.5rem' }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
