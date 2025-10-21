// src/components/ResumeTemplates/Template3.jsx
export default function Template3({ data }) {
  if (!data || !data.personalInfo) {
    return <div className="text-center text-red-600">⚠️ No data found</div>;
  }

  return (
    <div className="w-full h-full mx-auto bg-white shadow-md font-serif flex flex-col p-10">
      {/* Header */}
      <div className="flex justify-between items-end border-b-2 border-black pb-4 mb-6">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">
            {data.personalInfo.firstName} {data.personalInfo.lastName}
          </h1>
          <p className="text-lg text-gray-700">
            {data.personalInfo.role || "Professional"}
          </p>
        </div>
        <div className="text-right text-sm text-gray-600 space-y-1">
          <p className="flex flex-col sm:flex-row sm:justify-end sm:gap-2 break-words">
            {data.personalInfo.email}
          </p>
          <p>{data.personalInfo.phone}</p>
          <p>
            {data.personalInfo.city}, {data.personalInfo.state}
          </p>
        </div>
      </div>

      {/* Objective */}
      {data.personalInfo.objective && (
        <div className="mb-6">
          <h2 className="text-xl font-bold border-b border-gray-400 pb-2 mb-2">
            Objective
          </h2>
          <p className="text-gray-700">{data.personalInfo.objective}</p>
        </div>
      )}

      {/* Work Experience */}
      {data.experience?.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-bold border-b border-gray-400 pb-2 mb-2">
            Work Experience
          </h2>
          {data.experience.map((exp, i) => (
            <div key={i} className="mb-4">
              <p className="font-semibold text-lg">{exp.jobTitle}</p>
              <p className="italic text-gray-700">{exp.organization}</p>
              <p className="text-sm text-gray-600 mb-1">
                {exp.startYear} - {exp.endYear}
              </p>
              <p className="text-sm text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                vitae magna vel arcu malesuada posuere. {/* placeholder description */}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {data.education?.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-bold border-b border-gray-400 pb-2 mb-2">
            Education
          </h2>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b">
                <th className="py-1">Degree</th>
                <th className="py-1">University</th>
                <th className="py-1">Year</th>
                <th className="py-1">Marks</th>
              </tr>
            </thead>
            <tbody>
              {data.education.map((edu, i) => (
                <tr key={i} className="border-b text-sm">
                  <td className="py-1">{edu.type}</td>
                  <td className="py-1">{edu.university}</td>
                  <td className="py-1">
                    {edu.startYear} - {edu.endYear}
                  </td>
                  <td className="py-1">{edu.marks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Skills */}
      {data.skills?.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-bold border-b border-gray-400 pb-2 mb-2">
            Skills
          </h2>
          <div className="grid grid-cols-2 gap-2 text-sm">
            {data.skills.map((skill, i) => (
              <p key={i}>• {skill}</p>
            ))}
          </div>
        </div>
      )}

      {/* Projects */}
      {data.projects?.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-bold border-b border-gray-400 pb-2 mb-2">
            Projects
          </h2>
          {data.projects.map((proj, i) => (
            <div key={i} className="mb-2">
              <p className="font-semibold">{proj.title}</p>
              <p className="text-sm text-gray-700">{proj.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* Certifications */}
      {data.certifications?.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-bold border-b border-gray-400 pb-2 mb-2">
            Certifications
          </h2>
          <ul className="list-disc list-inside text-sm text-gray-700">
            {data.certifications.map((cert, i) => (
              <li key={i}>{cert}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
