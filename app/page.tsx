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
  return (
    <main className="min-h-screen bg-gray-50">

      {/* Navbar */}
<nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
  <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
    <h1 className="text-xl font-bold"></h1>

    <ul className="flex gap-6 text-gray-600 font-medium">
      <li>
        <a href="#home" className="hover:text-blue-600">
          Home
        </a>
      </li>
      <li>
        <a href="#projects" className="hover:text-blue-600">
          Projects
        </a>
      </li>
      <li>
        <a href="#skills" className="hover:text-blue-600">
          Skills
        </a>
      </li>
      <li>
        <a href="#contact" className="hover:text-blue-600">
          Contact
        </a>
      </li>
    </ul>
  </div>
</nav>


      {/* Hero Section */}
      <section id="home" className="scroll-mt-20">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">

          <h2 className="text-4xl font-bold mb-4">
            Hi, I’m Dinusha!
          </h2>

          <p className="text-gray-600 mb-6">
            I’m a software tester specializing in manual and automated testing.
          </p>

          <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
            View My Projects
          </button>

        </div>
      </section>

      {/* Experience, Education & Certifications Section */}
<section className="bg-gray-50">
  <div className="max-w-6xl mx-auto px-6 py-12">

    <h2 className="text-2xl font-bold mb-6">
      Experience & Education
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      {/* Experience */}
      <div className="bg-white rounded-lg shadow p-6 text-center
                      transition transform hover:-translate-y-1 hover:shadow-lg">
        <h3 className="text-lg font-semibold mb-2">
          Experience
        </h3>
        <p className="text-3xl font-bold text-blue-600 mb-2">
          5+ Years
        </p>
        <p className="text-gray-600 text-sm">
          Software Testing & Automation
        </p>
      </div>

      {/* Education */}
      <div className="bg-white rounded-lg shadow p-6 text-center
                      transition transform hover:-translate-y-1 hover:shadow-lg">
        <h3 className="text-lg font-semibold mb-2">
          Education
        </h3>
        <p className="font-medium">
          Bachelor’s Degree
        </p>
        <p className="text-gray-600 text-sm mt-1">
          Computer Science / IT
        </p>
      </div>

      {/* Certifications */}
      <div className="bg-white rounded-lg shadow p-6 text-center
                      transition transform hover:-translate-y-1 hover:shadow-lg">
        <h3 className="text-lg font-semibold mb-2">
          Certifications
        </h3>
        <ul className="text-gray-600 text-sm space-y-1">
          <li>ISTQB Certified Tester</li>
          <li>Playwright Automation</li>
          <li>Cypress Automation</li>
        </ul>
      </div>

    </div>

  </div>
</section>


  
{/* Projects Section */}
<section id="projects" className="scroll-mt-20">
  <div className="max-w-6xl mx-auto px-6 py-12">

    <h2 className="text-2xl font-bold mb-4">
      My Projects
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      {/* Cypress Project */}
      <div className="bg-white rounded-lg shadow p-6
                      transition transform hover:-translate-y-1 hover:shadow-lg">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-semibold">
            Cypress UI Automation
          </h3>

          <a
            href="https://github.com/your-username/cypress-project"
            target="_blank"
            className="text-xs border border-gray-300 rounded px-3 py-1
                       text-gray-700 hover:bg-gray-100 transition"
          >
            GitHub
          </a>
        </div>

        <p className="text-gray-600 text-sm mb-4">
          End-to-end UI automation framework using Cypress with Page Object Model.
        </p>

        <div className="flex flex-wrap gap-2">
          <span className="badge-ui">UI</span>
          <span className="badge-tool">Cypress</span>
          <span className="badge-lang">JavaScript</span>
        </div>
      </div>

      {/* Playwright UI Project */}
      <div className="bg-white rounded-lg shadow p-6
                      transition transform hover:-translate-y-1 hover:shadow-lg">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-semibold">
            Playwright UI Automation
          </h3>

          <a
            href="https://github.com/your-username/playwright-ui"
            target="_blank"
            className="text-xs border border-gray-300 rounded px-3 py-1
                       text-gray-700 hover:bg-gray-100 transition"
          >
            GitHub
          </a>
        </div>

        <p className="text-gray-600 text-sm mb-4">
          Cross-browser UI automation using Playwright with TypeScript.
        </p>

        <div className="flex flex-wrap gap-2">
          <span className="badge-ui">UI</span>
          <span className="badge-tool">Playwright</span>
          <span className="badge-lang">TypeScript</span>
        </div>
      </div>

      {/* Playwright API Project */}
      <div className="bg-white rounded-lg shadow p-6
                      transition transform hover:-translate-y-1 hover:shadow-lg">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-semibold">
            Playwright API Testing
          </h3>

          <a
            href="https://github.com/your-username/playwright-api"
            target="_blank"
            className="text-xs border border-gray-300 rounded px-3 py-1
                       text-gray-700 hover:bg-gray-100 transition"
          >
            GitHub
          </a>
        </div>

        <p className="text-gray-600 text-sm mb-4">
          REST API automation using Playwright test runner and APIRequestContext.
        </p>

        <div className="flex flex-wrap gap-2">
          <span className="badge-api">API</span>
          <span className="badge-tool">Playwright</span>
          <span className="badge-tool">Postman</span>
        </div>
      </div>

      {/* k6 Performance Project */}
      <div className="bg-white rounded-lg shadow p-6
                      transition transform hover:-translate-y-1 hover:shadow-lg">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-semibold">
            k6 Performance Testing
          </h3>

          <a
            href="https://github.com/your-username/k6-performance"
            target="_blank"
            className="text-xs border border-gray-300 rounded px-3 py-1
                       text-gray-700 hover:bg-gray-100 transition"
          >
            GitHub
          </a>
        </div>

        <p className="text-gray-600 text-sm mb-4">
          Load and stress testing using k6 with real-time performance metrics.
        </p>

        <div className="flex flex-wrap gap-2">
          <span className="badge-perf">Performance</span>
          <span className="badge-tool">k6</span>
          <span className="badge-lang">JavaScript</span>
        </div>
      </div>

    </div>

  </div>
</section>


{/* Skills Section */}
<section id="skills" className="bg-white scroll-mt-20">
  <div className="max-w-6xl mx-auto px-6 py-12">

    {/* Section Title */}
    <h2 className="text-2xl font-bold mb-6">
      My Skills
    </h2>

    <div className="space-y-10">

      {/* Automation & Testing */}
      <div>
        <h3 className="text-lg font-semibold mb-4">
          Automation & Testing
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          {/* Cypress */}
          <div className="bg-gray-50 rounded-lg shadow p-6 text-center
                          transition transform hover:-translate-y-1 hover:shadow-lg">
            <p className="font-medium mb-3">Cypress</p>
            <div className="flex justify-center gap-2">
              <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">UI</span>
            </div>
          </div>

          {/* Playwright */}
          <div className="bg-gray-50 rounded-lg shadow p-6 text-center
                          transition transform hover:-translate-y-1 hover:shadow-lg">
            <p className="font-medium mb-3">Playwright</p>
            <div className="flex justify-center gap-2">
              <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">UI</span>
              <span className="bg-yellow-100 text-yellow-700 text-xs px-3 py-1 rounded-full">API</span>
            </div>
          </div>

          {/* Playwright API */}
          <div className="bg-gray-50 rounded-lg shadow p-6 text-center
                          transition transform hover:-translate-y-1 hover:shadow-lg">
            <p className="font-medium mb-3">Playwright API Testing</p>
            <div className="flex justify-center gap-2">
              <span className="bg-yellow-100 text-yellow-700 text-xs px-3 py-1 rounded-full">API</span>
            </div>
          </div>

          {/* Manual Testing */}
          <div className="bg-gray-50 rounded-lg shadow p-6 text-center
                          transition transform hover:-translate-y-1 hover:shadow-lg">
            <p className="font-medium mb-3">Manual Testing</p>
            <div className="flex justify-center gap-2">
              <span className="bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full">Functional</span>
            </div>
          </div>

        </div>
      </div>

      {/* Programming Languages */}
      <div>
        <h3 className="text-lg font-semibold mb-4">
          Programming Languages
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          {/* JavaScript */}
          <div className="bg-gray-50 rounded-lg shadow p-6 text-center
                          transition transform hover:-translate-y-1 hover:shadow-lg">
            <p className="font-medium mb-3">JavaScript</p>
            <div className="flex justify-center gap-2">
              <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">Automation</span>
            </div>
          </div>

          {/* TypeScript */}
          <div className="bg-gray-50 rounded-lg shadow p-6 text-center
                          transition transform hover:-translate-y-1 hover:shadow-lg">
            <p className="font-medium mb-3">TypeScript</p>
            <div className="flex justify-center gap-2">
              <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">Automation</span>
            </div>
          </div>

        </div>
      </div>

      {/* Performance & Tools */}
      <div>
        <h3 className="text-lg font-semibold mb-4">
          Performance & Tools
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          {/* k6 */}
          <div className="bg-gray-50 rounded-lg shadow p-6 text-center
                          transition transform hover:-translate-y-1 hover:shadow-lg">
            <p className="font-medium mb-3">k6</p>
            <div className="flex justify-center gap-2">
              <span className="bg-red-100 text-red-700 text-xs px-3 py-1 rounded-full">Performance</span>
            </div>
          </div>

          {/* Postman */}
          <div className="bg-gray-50 rounded-lg shadow p-6 text-center
                          transition transform hover:-translate-y-1 hover:shadow-lg">
            <p className="font-medium mb-3">Postman</p>
            <div className="flex justify-center gap-2">
              <span className="bg-yellow-100 text-yellow-700 text-xs px-3 py-1 rounded-full">API</span>
            </div>
          </div>

          {/* GitHub */}
          <div className="bg-gray-50 rounded-lg shadow p-6 text-center
                          transition transform hover:-translate-y-1 hover:shadow-lg">
            <p className="font-medium mb-3">GitHub</p>
            <div className="flex justify-center gap-2">
              <span className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full">Version Control</span>
            </div>
          </div>

        </div>
      </div>

      {/* Test Management */}
      <div>
        <h3 className="text-lg font-semibold mb-4">
          Test Management
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          <div className="bg-gray-50 rounded-lg shadow p-6 text-center
                          transition transform hover:-translate-y-1 hover:shadow-lg">
            <p className="font-medium mb-3">Jira</p>
            <div className="flex justify-center gap-2">
              <span className="bg-indigo-100 text-indigo-700 text-xs px-3 py-1 rounded-full">Tracking</span>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg shadow p-6 text-center
                          transition transform hover:-translate-y-1 hover:shadow-lg">
            <p className="font-medium mb-3">TestRail</p>
            <div className="flex justify-center gap-2">
              <span className="bg-indigo-100 text-indigo-700 text-xs px-3 py-1 rounded-full">Test Cases</span>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg shadow p-6 text-center
                          transition transform hover:-translate-y-1 hover:shadow-lg">
            <p className="font-medium mb-3">Xray</p>
            <div className="flex justify-center gap-2">
              <span className="bg-indigo-100 text-indigo-700 text-xs px-3 py-1 rounded-full">Test Management</span>
            </div>
          </div>

        </div>
      </div>

    </div>

  </div>
</section>



{/* Contact Section */}
<section id="contact" className="scroll-mt-20">
  <div className="max-w-6xl mx-auto px-6 py-12">

    <h2 className="text-2xl font-bold mb-8">
      Contact
    </h2>

    <div className="bg-white rounded-lg shadow p-6 max-w-md space-y-4">

      {/* Email */}
      <div>
        <p className="font-medium">Email</p>
        <a
          href="mailto:dinusha@email.com"
          className="text-blue-600 hover:underline"
        >
          dinusha@email.com
        </a>
      </div>

      {/* LinkedIn */}
      <div>
        <p className="font-medium">LinkedIn</p>
        <a
          href="https://www.linkedin.com/in/your-linkedin-username"
          target="_blank"
          className="text-blue-600 hover:underline"
        >
          linkedin.com/in/your-linkedin-username
        </a>
      </div>

    </div>

  </div>
</section>

{/* Footer */}
<footer className="bg-white border-t">
  <div className="max-w-6xl mx-auto px-6 py-6 text-center text-gray-500">
    © {new Date().getFullYear()} Dinusha. All rights reserved.
  </div>
</footer>


    </main>
  );
}

