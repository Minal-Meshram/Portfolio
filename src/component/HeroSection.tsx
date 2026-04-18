"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Mail, Github, Linkedin, Download, Eye } from "lucide-react";

const HeroSection = () => {
  const [textIndex, setTextIndex] = useState(0);

  const roles = [
    "Real-Time App Developer",
    "MERN Stack Engineer",
    "Scalable Backend Builder",
    "Creative UI Developer",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Preview Resume - Opens in new tab
  const handlePreviewResume = () => {
    const resumeUrl = "/resume.pdf"; // Path to your resume in public folder
    window.open(resumeUrl, "_blank");
  };

  // Download Resume - Downloads the file
  const handleDownloadResume = () => {
    const resumeUrl = "/resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Minal_Meshram_Resume.pdf"; // This forces download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden 
    bg-white dark:bg-[#0b0f1a] text-black dark:text-white">

      {/* 🔵 Background Glow */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-indigo-400 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl w-full px-6 py-16 lg:py-24 flex flex-col lg:flex-row items-center gap-16">

        {/* LEFT CONTENT */}
        <div className="flex-1 text-center lg:text-left">

          {/* NAME */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
            <span className="text-gray-800 dark:text-gray-300">Hi, I'm </span>
            <span className="text-gray-900 dark:text-white animate-pulse">
              Minal
            </span>
          </h1>

          {/* ROLE */}
          <div className="flex justify-center lg:justify-start items-center gap-2 mb-6">
            <span className="text-gray-700 dark:text-gray-400 text-2xl">
              I build
            </span>
            <span className="text-3xl font-bold text-purple-600 dark:text-purple-400">
              {roles[textIndex]}
            </span>
          </div>

          {/* DESCRIPTION */}
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-4 max-w-lg mx-auto lg:mx-0">
            I build high-performance MERN applications with real-time features
            like video calling, chat systems, and live data syncing. Focused on
            clean UI and scalable backend architecture.
          </p>

          {/* TECH STACK */}
          <div className="flex flex-wrap gap-2 mb-6 justify-center lg:justify-start">
            {["React", "Node.js", "MongoDB", "Express", "Java"].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm bg-gray-100 dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/20 transition"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-6">

            {/* PREVIEW RESUME BUTTON */}
            <button
              onClick={handlePreviewResume}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 via-purple-600 to-indigo-600 text-white font-semibold 
              hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 flex items-center gap-2"
            >
              <Eye className="w-4 h-4" />
              Preview Resume
            </button>

            {/* DOWNLOAD RESUME BUTTON */}
            <button
              onClick={handleDownloadResume}
              className="px-6 py-3 rounded-full bg-gray-200 dark:bg-white/10 text-gray-800 dark:text-white font-semibold 
              hover:scale-105 hover:bg-gray-300 dark:hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </button>

          </div>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-4 justify-center lg:justify-start mt-4">
            <a
              href="https://github.com/Minal-Meshram"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 hover:scale-110 transition"
            >
              <Github className="w-5 h-5 text-gray-700 dark:text-gray-300 hover:text-purple-500" />
            </a>

            <a
              href="https://www.linkedin.com/in/minal-meshram-34ba5b21a/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 hover:scale-110 transition"
            >
              <Linkedin className="w-5 h-5 text-gray-700 dark:text-gray-300 hover:text-purple-500" />
            </a>

            <a
              href="mailto:your-email@gmail.com"
              className="p-2 rounded-full bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 hover:scale-110 transition"
            >
              <Mail className="w-5 h-5 text-gray-700 dark:text-gray-300 hover:text-purple-500" />
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex-1 flex justify-center"
        >
          <div className="relative group">
            {/* Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-indigo-500 blur-2xl opacity-20 rounded-full"></div>

            {/* Rotating Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-6 rounded-full border border-purple-400/30"
            />

            {/* IMAGE */}
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-purple-400 
            group-hover:scale-105 transition duration-300 hover:shadow-xl hover:shadow-purple-500/20">
              <img
                src="/profile.jpg"
                alt="profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;