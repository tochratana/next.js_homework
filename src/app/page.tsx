"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  ChevronRight,
  Play,
  Sparkles,
  TrendingUp,
  Shield,
  Users,
} from "lucide-react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${
              mousePosition.y * 0.02
            }px)`,
            transition: "transform 0.3s ease-out",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(-${mousePosition.x * 0.015}px, -${
              mousePosition.y * 0.015
            }px)`,
            transition: "transform 0.3s ease-out",
          }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-bounce"
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 12}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i * 0.5}s`,
            }}
          >
            <Sparkles className="text-white/20 w-4 h-4" />
          </div>
        ))}
      </div>

      {/* Main Content */}
      <section className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div
              className={`transition-all duration-1000 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-20 opacity-0"
              }`}
            >
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 backdrop-blur-sm mb-6">
                <TrendingUp className="w-4 h-4 text-blue-400 mr-2" />
                <span className="text-sm text-blue-300 font-medium">
                  Trusted by 10,000+ businesses
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent">
                  Transform Your
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Financial Future
                </span>
              </h1>

              {/* Khmer Text */}
              <h2 className="text-2xl lg:text-3xl font-medium text-purple-300 mb-6">
                និយាយជាភាសាខ្មែរ
              </h2>

              {/* Description */}
              <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-lg">
                Experience next-generation financial planning with AI-powered
                insights. We&apos;re not just planners—we&apos;re your partners
                in building wealth that lasts.
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  { icon: Shield, text: "Bank-level Security" },
                  { icon: Users, text: "Expert Support" },
                  { icon: TrendingUp, text: "Smart Analytics" },
                ].map(({ icon: Icon, text }, index) => (
                  <div
                    key={index}
                    className="flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
                  >
                    <Icon className="w-4 h-4 text-blue-400 mr-2" />
                    <span className="text-sm text-gray-200">{text}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold text-white transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105">
                  <span className="flex items-center justify-center">
                    Get Started Free
                    <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                </button>

                <button className="group flex items-center justify-center px-8 py-4 rounded-xl border border-white/30 text-white font-semibold backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  <Play className="mr-2 w-5 h-5" />
                  Watch Demo
                </button>
              </div>
            </div>

            {/* Right Content - Image */}
            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-20 opacity-0"
              }`}
            >
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-3xl blur-3xl scale-110" />

                {/* Main Image Container */}
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
                  <Image
                    width={600}
                    height={600}
                    unoptimized
                    className="w-full h-auto drop-shadow-2xl transition-transform duration-700 hover:scale-105 hover:rotate-2"
                    src="https://bootstrapmade.com/demo/templates/FlexStart/assets/img/hero-img.png"
                    alt="Financial Dashboard Interface"
                  />

                  {/* Floating Cards */}
                  <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-4 shadow-xl animate-bounce">
                    <div className="text-white font-bold text-sm">+$2,450</div>
                    <div className="text-green-100 text-xs">This Month</div>
                  </div>

                  <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-4 shadow-xl animate-pulse">
                    <div className="text-white font-bold text-sm">
                      94% Growth
                    </div>
                    <div className="text-orange-100 text-xs">Portfolio</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Stats */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div
          className={`flex gap-8 transition-all duration-1000 delay-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {[
            { number: "50K+", label: "Active Users" },
            { number: "$2.5B", label: "Assets Managed" },
            { number: "99.9%", label: "Uptime" },
          ].map(({ number, label }, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold text-white">{number}</div>
              <div className="text-sm text-gray-400">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
