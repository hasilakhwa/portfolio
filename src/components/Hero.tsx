"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const Hero = () => {
  const [imageError, setImageError] = useState(false);
  const [imageSrc, setImageSrc] = useState("/profile.jpg");

  useEffect(() => {
    // Try to load the image
    const img = new window.Image();
    img.src = "/profile.jpg";
    img.onload = () => {
      setImageSrc("/profile.jpg");
      setImageError(false);
    };
    img.onerror = () => {
      // Try PNG if JPG fails
      const pngImg = new window.Image();
      pngImg.src = "/profile.png";
      pngImg.onload = () => {
        setImageSrc("/profile.png");
        setImageError(false);
      };
      pngImg.onerror = () => {
        setImageError(true);
      };
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center pt-20 pb-16">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-blue-600">Muhammad</span> Hasnain Ali
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
            I build modern, responsive web applications with cutting-edge
            technologies. Specializing in React, Next.js, and responsive design
            to create exceptional user experiences.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#projects"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-colors"
            >
              View My Work
            </Link>
            <Link
              href="#contact"
              className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-full font-medium transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-600 shadow-xl">
            {imageError ? (
              <div className="w-full h-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <svg
                  className="w-24 h-24 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
            ) : (
              <Image
                src={imageSrc}
                alt="Developer Profile"
                fill
                style={{ objectFit: "cover" }}
                priority
                className="rounded-full"
                onError={() => setImageError(true)}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
