// src/pages/MyResume.jsx
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import html2pdf from "html2pdf.js";
import { useFormData } from "../context/FormContext";

// Templates
import Template1 from "../components/ResumeTemplates/Template1";
import Template2 from "../components/ResumeTemplates/Template2";
import Template3 from "../components/ResumeTemplates/Template3";
import Template4 from "../components/ResumeTemplates/Template4";
import Template5 from "../components/ResumeTemplates/Template5";

export default function MyResume() {
  const { formData } = useFormData();
  const navigate = useNavigate();

  // keep fallback and be flexible about incoming shape
  const normalized = {
    firstName: formData.firstName || "",
    lastName: formData.lastName || "",
    profilePic: formData.profilePic || "",
    role: formData.role || "",
    email: formData.email || "",
    phone: formData.mobile || formData.phone || "",
    city: formData.city || "",
    state: formData.state || "",
    objective: formData.objective || "",
    experience: Array.isArray(formData.experience) ? formData.experience : [],
    education: Array.isArray(formData.education) ? formData.education : [],
    skills: Array.isArray(formData.skills) ? formData.skills : [],
    projects: Array.isArray(formData.projects) ? formData.projects : [],
    certifications: Array.isArray(formData.certifications) ? formData.certifications : [],
    languages: Array.isArray(formData.languages) ? formData.languages : [],
    hobbies: Array.isArray(formData.hobbies) ? formData.hobbies : [],
    // backward-compatible object some templates expect
    personalInfo: {
      firstName: formData.firstName || "",
      lastName: formData.lastName || "",
      profilePic: formData.profilePic || "",
      email: formData.email || "",
      phone: formData.mobile || formData.phone || "",
      city: formData.city || "",
      state: formData.state || "",
      objective: formData.objective || "",
    },
    selectedTemplate: formData.selectedTemplate || null,
  };

  // Template selection state (template1..template5)
  const initialTemplate = formData.selectedTemplate
    ? `template${formData.selectedTemplate}`
    : "template1";
  const [selectedTemplate, setSelectedTemplate] = useState(initialTemplate);
  const [fileName, setFileName] = useState("my_resume");
  const resumeRef = useRef(null);

  // A4 pixel size approx at 96dpi (used for clone before PDF)
  const A4_PX_WIDTH = Math.round(210 * (96 / 25.4)); // ~794
  const A4_PX_HEIGHT = Math.round(297 * (96 / 25.4)); // ~1123

  // Responsive scale for preview (so it fits on small screens)
  const [scale, setScale] = useState(1);
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth - 40; // leave small margin
      if (screenWidth < A4_PX_WIDTH) {
        // don't let it get too small
        const s = Math.max(0.35, screenWidth / A4_PX_WIDTH);
        setScale(s);
      } else {
        setScale(1);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Render chosen template and pass normalized data
  const renderTemplate = () => {
    const data = normalized;
    switch (selectedTemplate) {
      case "template1":
        return <div className="w-full h-full">{/* wrapper to help height */}<Template1 data={data} /></div>;
      case "template2":
        return <div className="w-full h-full"><Template2 data={data} /></div>;
      case "template3":
        return <div className="w-full h-full"><Template3 data={data} /></div>;
      case "template4":
        return <div className="w-full h-full"><Template4 data={data} /></div>;
      case "template5":
        return <div className="w-full h-full"><Template5 data={data} /></div>;
      default:
        return <div className="w-full h-full"><Template1 data={data} /></div>;
    }
  };

  // Generate PDF using a cloned node (removes preview scale, enforces exact A4 px, waits for images)
// Generate PDF directly from the original node (remove scaling for capture)
const handleDownload = async () => {
  const element = resumeRef.current;
  if (!element) return;

  // Temporarily remove transform scale (otherwise PDF is blank/cutoff)
  const originalTransform = element.style.transform;
  element.style.transform = "none";

  const opt = {
    margin: [0, 0, 0, 0], // no extra margin
    filename: `${fileName?.trim() || "resume"}.pdf`,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: {
      scale: 2,
      useCORS: true,
      scrollX: 0,
      scrollY: 0,
      windowWidth: element.scrollWidth,  // capture full width
      windowHeight: element.scrollHeight, // capture full height
    },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
  };

  try {
    await html2pdf().set(opt).from(element).save();
  } catch (err) {
    console.error("PDF generation failed", err);
  } finally {
    // Restore preview scaling
    element.style.transform = originalTransform;
  }
};



  return (
    <div className="p-4 md:p-8 bg-gray-100 min-h-screen">
      {/* Controls: Back, filename, template selector, download */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 mb-6">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate("/details")}
            className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800"
          >
            ← Back to Edit
          </button>

          <input
            type="text"
            value={fileName}
            onChange={(e) => setFileName(e.target.value)}
            placeholder="Enter file name"
            className="border px-3 py-2 rounded w-40"
          />
        </div>

        <div className="flex items-center gap-3">
          {/* Styled selector */}
          <div className="relative">
            <select
              value={selectedTemplate}
              onChange={(e) => setSelectedTemplate(e.target.value)}
              className="appearance-none border px-4 py-2 rounded shadow pr-8"
              aria-label="Select resume template"
            >
              <option value="template1">Template 1 — Professional</option>
              <option value="template2">Template 2 — Modern</option>
              <option value="template3">Template 3 — Classic</option>
              <option value="template4">Template 4 — Creative</option>
              <option value="template5">Template 5 — Minimal</option>
            </select>
            {/* small down arrow */}
            <div className="pointer-events-none absolute right-2 top-2 text-gray-500">▾</div>
          </div>

          <button
            onClick={handleDownload}
            className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 shadow"
          >
            ⬇ Save PDF
          </button>
        </div>
      </div>

      {/* Preview: centered, fixed A4 size, scales on small screens */}
      <div className="flex justify-center overflow-auto">
        <div
          ref={resumeRef}
          className="bg-white shadow-lg origin-top"
          style={{
            width: "210mm",
            minHeight: "297mm",
            padding: "12mm",
            boxSizing: "border-box",
            transform: `scale(${scale})`,
            transformOrigin: "top center",
            background: "white",
          }}
        >
          {/* wrapper to encourage templates to fill height */}
          <div style={{ width: "100%", height: "100%" }}>{renderTemplate()}</div>
        </div>
      </div>
    </div>
  );
}
