"use client";
import React, { useState, useEffect } from "react";
import { Info, Rocket } from "lucide-react";
import { FaRocket } from "react-icons/fa";
export default function Hero() {
  return (
    <>
      {/* Hero */}
      <section
        id="home"
        className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: "url('/hero/1.jpg')",
        }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-block mb-4">
            <span className="inline-flex items-center px-2 py-[2px] text-[11px] font-medium text-white rounded-full bg-blue-500/15 border border-blue-500/30 whitespace-nowrap">
              <FaRocket className="w-3.5 h-3.5 mr-1 text-yellow-400" /> Your
              Polling Revolution Starts Here
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent leading-tight">
            Create Powerful Polls
            <br />
            in Real-Time
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            The modern polling platform built for speed, reliability, and
            stunning visualizations. Get instant insights from your audience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/login"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl font-bold text-lg shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/70 transform hover:scale-105 transition-all"
            >
              <Rocket className="w-6 h-6" />
              Start Creating Now
            </a>

            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 rounded-xl font-bold text-lg border border-white/20 transition-all"
            >
              <Info className="w-6 h-6" />
              Learn More
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
