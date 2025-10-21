// src/pages/PreviewPage.jsx
import Template1 from "../components/ResumeTemplates/Template1";
import Template2 from "../components/ResumeTemplates/Template2";
import Template3 from "../components/ResumeTemplates/Template3";
import Template4 from "../components/ResumeTemplates/Template4";
import Template5 from "../components/ResumeTemplates/Template5";
import { data } from "../components/ResumeTemplates/data";
import { Routes, Route } from "react-router-dom";

export default function PreviewPage() {
  return (
    <Routes>
      <Route path="template1" element={<Template1 data={data} />} />
      <Route path="template2" element={<Template2 data={data} />} />
      <Route path="template3" element={<Template3 data={data} />} />
      <Route path="template4" element={<Template4 data={data} />} />
      <Route path="template5" element={<Template5 data={data} />} />
    </Routes>
  );
}
