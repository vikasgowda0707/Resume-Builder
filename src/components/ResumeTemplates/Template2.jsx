// src/components/ResumeTemplates/Template2.jsx
export default function Template2({ data }) {
  if (!data || !data.personalInfo) {
    return <div className="text-center text-red-600">⚠️ No data found</div>;
  }

  return (
    <div className="w-full h-full mx-auto bg-white shadow-lg font-sans flex flex-col">
      {/* Header */}
      <div className="p-6 text-center border-b-4 border-blue-600">
        <h1 className="text-4xl font-bold text-gray-900">
          {data.personalInfo.firstName} {data.personalInfo.lastName}
        </h1>
        <p className="text-lg text-blue-700">
          {data.personalInfo.role || "Professional"}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-6 mt-4 text-sm text-gray-700">
          <p className="break-words">📧 {data.personalInfo.email}</p>
          <p>📞 {data.personalInfo.phone}</p>
          <p>
            📍 {data.personalInfo.city}, {data.personalInfo.state}
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1">
        {/* Left Sidebar */}
        <div className="w-1/3 bg-gray-100 p-6">
          {/* Profile Picture */}
          {data.personalInfo.profilePic && (
            <img
              src={data.personalInfo.profilePic}
              alt="Profile"
              className="w-28 h-28 mx-auto rounded-full object-cover border-4 border-blue-600 mb-6"
            />
          )}

          {/* Objective */}
          {data.personalInfo.objective && (
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-blue-700 border-b pb-2 mb-2">
                Objective
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                {data.personalInfo.objective}
              </p>
            </div>
          )}

          {/* Skills */}
          {data.skills?.length > 0 && (
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-blue-700 border-b pb-2 mb-2">
                Skills
              </h2>
              <ul className="space-y-2">
                {data.skills.map((skill, i) => (
                  <li key={i} className="text-sm">
                    <span className="font-medium">{skill}</span>
                    <div className="w-full bg-gray-300 h-2 rounded mt-1">
                      <div className="bg-blue-600 h-2 rounded w-3/4"></div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Languages */}
          {data.languages?.length > 0 && (
            <div>
              <h2 className="text-lg font-semibold text-blue-700 border-b pb-2 mb-2">
                Languages
              </h2>
              <ul className="list-disc list-inside text-sm text-gray-700">
                {data.languages.map((lang, i) => (
                  <li key={i}>{lang}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Right Section */}
        <div className="w-2/3 p-6 flex flex-col justify-between">
          {/* Work Experience */}
          {data.experience?.length > 0 && (
            <div className="mb-6">
              <h2 className="text-xl font-bold text-blue-700 border-b pb-2 mb-2">
                Work Experience
              </h2>
              <div className="space-y-4">
                {data.experience.map((exp, i) => (
                  <div key={i} className="relative pl-6">
                    <div className="absolute left-0 top-2 w-2 h-2 bg-blue-600 rounded-full"></div>
                    <p className="font-semibold">{exp.jobTitle}</p>
                    <p className="text-gray-600">{exp.organization}</p>
                    <p className="text-sm text-gray-500">
                      {exp.startYear} - {exp.endYear}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education */}
          {data.education?.length > 0 && (
            <div className="mb-6">
              <h2 className="text-xl font-bold text-blue-700 border-b pb-2 mb-2">
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
              <h2 className="text-xl font-bold text-blue-700 border-b pb-2 mb-2">
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
              <h2 className="text-xl font-bold text-blue-700 border-b pb-2 mb-2">
                Certifications
              </h2>
              <ul className="list-disc list-inside text-gray-700 text-sm">
                {data.certifications.map((cert, i) => (
                  <li key={i}>{cert}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Hobbies */}
          {data.hobbies?.length > 0 && (
            <div>
              <h2 className="text-xl font-bold text-blue-700 border-b pb-2 mb-2">
                Hobbies
              </h2>
              <p className="text-gray-700">{data.hobbies.join(", ")}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
