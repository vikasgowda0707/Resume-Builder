// src/pages/Details.jsx
import { useState } from "react";
import { useFormData } from "../context/FormContext";

// Import forms (make sure file names & exports match exactly!)
import PersonalInfoForm from "../components/forms/PersonalInfoForm";
import WorkExperienceForm from "../components/forms/WorkExperiencrForm";
import EducationForm from "../components/forms/EducationForm";
import SkillsForm from "../components/forms/SkillsForm";
import ProjectsForm from "../components/forms/ProjectsForm";
import CertificationsForm from "../components/forms/CertificationForm";
import LangHobbiesForm from "../components/forms/LanguagesHobbiesForm";

export default function Details() {
  const [activeSection, setActiveSection] = useState("personal");
  const { formData, setFormData } = useFormData();

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg p-6 border-r sticky top-0 h-screen hidden md:block">
        <ul className="space-y-2">
          {[
            { key: "personal", label: "Personal Info" },
            { key: "work", label: "Work Experience" },
            { key: "education", label: "Education" },
            { key: "skills", label: "Key Skills" },
            { key: "projects", label: "Projects" },
            { key: "certifications", label: "Certifications" },
            { key: "langHobbies", label: "Languages & Hobbies" },
          ].map((section) => (
            <li
              key={section.key}
              className={`border-b border-gray-300 shadow-lg cursor-pointer px-4 py-2 rounded-md transition-all duration-200 ${
                activeSection === section.key
                  ? "bg-blue-500 text-white shadow"
                  : "text-gray-700 hover:bg-blue-100 hover:text-blue-600"
              }`}
              onClick={() => setActiveSection(section.key)}
            >
              {section.label}
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Sections Bar */}
      <div className="md:hidden fixed top-[56px] left-0 right-0 bg-white shadow overflow-x-auto z-40">
        <div className="flex space-x-4 px-4 py-2 min-w-max">
          {[
            { key: "personal", label: "Personal Info" },
            { key: "work", label: "Work Exp" },
            { key: "education", label: "Education" },
            { key: "skills", label: "Skills" },
            { key: "projects", label: "Projects" },
            { key: "certifications", label: "Certs" },
            { key: "langHobbies", label: "Lang & Hobbies" },
          ].map((section) => (
            <button
              key={section.key}
              onClick={() => setActiveSection(section.key)}
              className={`px-3 py-1 rounded-md text-sm font-medium whitespace-nowrap transition ${
                activeSection === section.key
                  ? "bg-blue-500 text-white shadow"
                  : "bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-600"
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>

      {/* Right Content */}
      <div className="flex-1 p-10">
        {activeSection === "personal" && (
          <PersonalInfoForm setActiveSection={setActiveSection} />
        )}
        {activeSection === "work" && (
          <WorkExperienceForm setActiveSection={setActiveSection} />
        )}
        {activeSection === "education" && (
          <EducationForm setActiveSection={setActiveSection} />
        )}
        {activeSection === "skills" && (
          <SkillsForm setActiveSection={setActiveSection} />
        )}
        {activeSection === "projects" && (
          <ProjectsForm setActiveSection={setActiveSection} />
        )}
        {activeSection === "certifications" && (
          <CertificationsForm setActiveSection={setActiveSection} />
        )}
        {activeSection === "langHobbies" && (
          <LangHobbiesForm setActiveSection={setActiveSection} />
        )}
      </div>
    </div>
  );
}
