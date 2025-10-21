// src/components/ResumeTemplates/Template3.jsx
export default function Template3({ data }) {
  if (!data || !data.personalInfo) {
    return <div className="text-center text-red-600">⚠️ No data found</div>;
  }

  return (
    <div className="w-full h-full mx-auto bg-white shadow-lg font-serif flex flex-col">
      {/* Header */}
      <div className="p-6 border-b-4 border-black">
        <h1 className="text-4xl font-bold text-gray-900">
          {data.personalInfo.firstName} {data.personalInfo.lastName}
        </h1>
        <p className="text-lg text-gray-700">
          {data.personalInfo.role || "Professional"}
        </p>
      </div>

      {/* Body */}
      <div className="flex flex-1">
        {/* Left Sidebar */}
        <div className="w-1/3 bg-gray-100 p-6">
          {/* Contact */}
          <div className="mb-6">
            <h2 className="text-lg font-bold border-b border-black pb-2 mb-2">
              Contact
            </h2>
            <p className="py-2 flex flex-col sm:flex-row sm:gap-2 break-words">
              <span className="font-semibold">Email:</span>{" "}
              {data.personalInfo.email}
            </p>
            <p className="py-2">
              <span className="font-semibold">Phone:</span>{" "}
              {data.personalInfo.phone}
            </p>
            <p className="py-2">
              <span className="font-semibold">Address:</span>{" "}
              {data.personalInfo.city}, {data.personalInfo.state}
            </p>
          </div>

          {/* Skills */}
          {data.skills?.length > 0 && (
            <div className="mb-6">
              <h2 className="text-lg font-bold border-b border-black pb-2 mb-2">
                Skills
              </h2>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {data.skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Languages */}
          {data.languages?.length > 0 && (
            <div className="mb-6">
              <h2 className="text-lg font-bold border-b border-black pb-2 mb-2">
                Languages
              </h2>
              <ul className="list-disc list-inside text-gray-700">
                {data.languages.map((lang, i) => (
                  <li key={i}>{lang}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Hobbies */}
          {data.hobbies?.length > 0 && (
            <div className="mb-6">
              <h2 className="text-lg font-bold border-b border-black pb-2 mb-2">
                Hobbies
              </h2>
              <ul className="list-disc list-inside text-gray-700">
                {data.hobbies.map((lang, i) => (
                  <li key={i}>{lang}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Right Section */}
        <div className="w-2/3 p-6 flex flex-col justify-between">
          {/* Objective */}
          {data.personalInfo.objective && (
            <div className="mb-6">
              <h2 className="text-xl font-bold border-b border-black pb-2 mb-2">
                Objective
              </h2>
              <p className="text-gray-700">{data.personalInfo.objective}</p>
            </div>
          )}

          {/* Work Experience */}
          {data.experience?.length > 0 && (
            <div className="mb-6">
              <h2 className="text-xl font-bold border-b border-black pb-2 mb-2">
                Work Experience
              </h2>
              {data.experience.map((exp, i) => (
                <div key={i} className="mb-3">
                  <p className="font-semibold">{exp.jobTitle}</p>
                  <p className="text-gray-600">{exp.organization}</p>
                  <p className="text-sm text-gray-500">
                    {exp.startYear} - {exp.endYear}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Education */}
          {data.education?.length > 0 && (
            <div className="mb-6">
              <h2 className="text-xl font-bold border-b border-black pb-2 mb-2">
                Education
              </h2>
              {data.education.map((edu, i) => (
                <div key={i} className="mb-3">
                  <p className="font-semibold">{edu.type}</p>
                  <p>{edu.university}</p>
                  <p className="text-sm text-gray-500">
                    {edu.startYear} - {edu.endYear} | Marks: {edu.marks}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Projects */}
          {data.projects?.length > 0 && (
            <div className="mb-6">
              <h2 className="text-xl font-bold border-b border-black pb-2 mb-2">
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
              <h2 className="text-xl font-bold border-b border-black pb-2 mb-2">
                Certifications
              </h2>
              <ul className="list-disc list-inside text-gray-700 text-sm">
                {data.certifications.map((cert, i) => (
                  <li key={i}>{cert}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
