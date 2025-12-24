
"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

import {
  SiJira,
  SiGithub,
  SiCypress,
  SiK6,
} from "react-icons/si";

import {
  FaBug,
  FaClipboardCheck,
  FaTools,
} from "react-icons/fa";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-gray-50">

      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* Logo / Name */}
          <h1 className="text-xl font-bold">
            Dinusha
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 text-gray-600 font-medium">
            <li><a href="#home" className="hover:text-blue-600">Home</a></li>
            <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
            <li><a href="#skills" className="hover:text-blue-600">Skills</a></li>
            <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
          </ul>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-2xl text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t shadow">
            <ul className="flex flex-col px-6 py-4 space-y-4 text-gray-700 font-medium">
              <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
              <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
              <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
              <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
            </ul>
          </div>
        )}
      </nav>

      {/* ================= HERO ================= */}
      <section id="home" className="scroll-mt-20 pt-24">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            QA Automation Engineer
          </h2>

          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            I specialize in Cypress, Playwright, API testing, and performance testing
            with k6, building reliable and scalable test automation solutions.
          </p>

          <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
            View My Projects
          </button>
        </div>
      </section>

      {/* ================= EXPERIENCE ================= */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-12">

          <h2 className="text-2xl font-bold mb-6">
            Experience & Education
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="bg-white rounded-lg shadow p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Experience</h3>
              <p className="text-3xl font-bold text-blue-600 mb-2">5+ Years</p>
              <p className="text-gray-600 text-sm">Software Testing & Automation</p>
            </div>

            <div className="bg-white rounded-lg shadow p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Education</h3>
              <p className="font-medium">Bachelor’s Degree</p>
              <p className="text-gray-600 text-sm mt-1">Computer Science / IT</p>
            </div>

            <div className="bg-white rounded-lg shadow p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Certifications</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>ISTQB Certified Tester</li>
                <li>Playwright Automation</li>
                <li>Cypress Automation</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6 py-12">

          <h2 className="text-2xl font-bold mb-4">My Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Cypress UI Automation",
              "Playwright UI Automation",
              "Playwright API Testing",
              "k6 Performance Testing",
            ].map((title) => (
              <div
                key={title}
                className="bg-white rounded-lg shadow p-6 hover:shadow-lg"
              >
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">
                  Automation project showcasing best practices and tools.
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section id="skills" className="bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-bold mb-6">My Skills</h2>
          <p className="text-gray-600">
            Cypress, Playwright, API Testing, k6, JavaScript, TypeScript, GitHub, Jira
          </p>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6 py-12">

          <h2 className="text-2xl font-bold mb-8">Contact</h2>

          <div className="bg-white rounded-lg shadow p-6 max-w-md space-y-4">
            <div>
              <p className="font-medium">Email</p>
              <a href="mailto:dinusha@email.com" className="text-blue-600 hover:underline">
                dinusha@email.com
              </a>
            </div>

            <div>
              <p className="font-medium">LinkedIn</p>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                linkedin.com/in/your-profile
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-white border-t">
        <div className="max-w-6xl mx-auto px-6 py-6 text-center text-gray-500">
          © {new Date().getFullYear()} Dinusha. All rights reserved.
        </div>
      </footer>

    </main>
  );
}
