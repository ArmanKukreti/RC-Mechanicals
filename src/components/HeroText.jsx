import React from 'react'

const HeroText = () => {
  return (
    <div className='text-center text-white font-bold drop-shadow-lg px-4 md:px-12 lg:px-24'>
      <div className="flex flex-col gap-3 items-center">
        <p className='text-xl sm:text-2xl md:text-3xl lg:text-4xl drop-shadow-md'>
          Welcome to
        </p>
        <p className='text-4xl sm:text-5xl md:text-7xl lg:text-8xl drop-shadow-md leading-tight'>
          RC Mechanicals
        </p>
        <p className='text-xl sm:text-2xl md:text-3xl lg:text-4xl drop-shadow-md'>
          Fabrication & Erection Specialists
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { number: '500+', label: 'Projects Completed' },
                { number: '15+', label: 'Years Experience' },
                { number: '100%', label: 'Client Satisfaction' },
              ].map((stat, index) => (
                <div key={index} className="text-center sm:text-left">
                  <div className="text-2xl font-bold text-accent">{stat.number}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
    </div>
  )
}

export default HeroText
