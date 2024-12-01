import React from 'react';
import { Globe, Box, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white p-4 md:p-6">
      {/* Navigation */}
      <nav className="flex justify-between items-center mb-8 md:mb-16">
        <div className="flex items-center gap-2">
          <Box className="w-6 h-6 md:w-8 md:h-8 text-blue-500" />
          <div>
            <h1 className="text-xl md:text-2xl font-bold">DITA</h1>
            <p className="text-xs md:text-sm text-slate-400">Smart Shipping Solutions</p>
          </div>
        </div>
        <button className="text-white p-2 bg-blue-600 rounded-lg">
          <div className="w-5 h-5 md:w-6 md:h-6 flex flex-col gap-1">
            <span className="w-full h-0.5 bg-white"></span>
            <span className="w-full h-0.5 bg-white"></span>
            <span className="w-full h-0.5 bg-white"></span>
          </div>
        </button>
      </nav>

      {/* Hero Content */}
      <div className="max-w-4xl mx-auto px-2">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-gradient-to-r from-blue-600/20 to-blue-400/10 border border-blue-500/20 text-blue-400 mb-6 md:mb-8 backdrop-blur-sm">
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-400 animate-pulse"></div>
          <span className="text-xs md:text-sm font-medium tracking-wide">NEXT GENERATION SHIPPING</span>
        </div>

        <h2 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight">
          Next-Gen<br />
          Shipping<br />
          Intelligence
        </h2>

        <p className="text-lg md:text-2xl text-slate-400 mb-8 md:mb-12 max-w-2xl">
          Optimize your logistics with AI-powered shipping solutions and real-time tracking
        </p>

        <div className="flex flex-col gap-3 md:flex-row md:gap-4">
          <button className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-semibold hover:bg-blue-700 transition-colors w-full md:w-auto">
            <Box className="w-5 h-5 md:w-6 md:h-6" />
            Get Started
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
          </button>

          <button className="flex items-center justify-center gap-2 bg-slate-800 text-white px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-semibold hover:bg-slate-700 transition-colors w-full md:w-auto">
            Track Shipment
          </button>
        </div>

        {/* Stats - Hidden on smallest screens */}
        <div className="hidden sm:grid grid-cols-3 gap-4 md:gap-8 mt-16 md:mt-24">
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-1 md:mb-2">10K+</h3>
            <p className="text-sm md:text-base text-slate-400">Daily Shipments</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-1 md:mb-2">50+</h3>
            <p className="text-sm md:text-base text-slate-400">Countries</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-1 md:mb-2">1M+</h3>
            <p className="text-sm md:text-base text-slate-400">Happy Customers</p>
          </div>
        </div>
      </div>

      {/* Background Elements - Adjusted for mobile */}
      <div className="fixed top-0 right-0 -z-10">
        <Globe className="w-32 h-32 md:w-64 md:h-64 text-slate-800 opacity-20" />
      </div>
      <div className="fixed bottom-0 left-0 -z-10">
        <Box className="w-24 h-24 md:w-48 md:h-48 text-slate-800 opacity-20" />
      </div>
    </div>
  );
};

export default Hero;