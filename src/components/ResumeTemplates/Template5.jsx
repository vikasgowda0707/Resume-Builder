// src/components/ResumeTemplates/Template4.jsx
export default function Template4({ data }) {
  if (!data || !data.personalInfo) {
    return <div className="text-center text-red-600">⚠️ No data found</div>;
  }

  return (
    <div className="w-full h-[297mm] mx-auto flex shadow-lg font-sans">
      {/* Left Banner */}
      <div className="w-1/3 bg-gradient-to-b from-purple-700 to-blue-600 text-white p-6 flex flex-col items-center">
        {/* Profile */}
        {data.personalInfo.profilePic && (
          <img
            src={data.personalInfo.profilePic}
            alt="Profile"
            className="w-28 h-28 rounded-full border-4 border-white object-cover mb-4"
          />
        )}
        <h1 className="text-2xl font-bold text-center">
          {data.personalInfo.firstName} {data.personalInfo.lastName}
        </h1>
        <p className="text-sm text-gray-200">{data.personalInfo.role}</p>

        {/* Contact */}
        <div className="mt-6 w-full">
          <h2 className="text-lg font-semibold border-b border-gray-200 pb-2 mb-2">
            Contact
          </h2>
          <p className="text-sm py-1 flex flex-col sm:flex-row sm:gap-2 break-words">
            📧 {data.personalInfo.email}
          </p>
          <p className="text-sm py-1">📞 {data.personalInfo.phone}</p>
          <p className="text-sm py-1">
            📍 {data.personalInfo.city}, {data.personalInfo.state}
          </p>
        </div>

        {/* Skills */}
        <div className="mt-6 w-full">
          <h2 className="text-lg font-semibold border-b border-gray-200 pb-2 mb-2">
            Skills
          </h2>
          <ul className="list-disc list-inside text-sm space-y-1">
            {data.skills?.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </div>

        {/* Languages */}
        {data.languages?.length > 0 && (
          <div className="mt-6 w-full">
            <h2 className="text-lg font-semibold border-b border-gray-200 pb-2 mb-2">
              Languages
            </h2>
            <ul className="list-disc list-inside text-sm space-y-1">
              {data.languages.map((lang, i) => (
                <li key={i}>{lang}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Hobbies */}
        {data.hobbies?.length > 0 && (
          <div className="mt-6 w-full">
            <h2 className="text-lg font-semibold border-b border-gray-200 pb-2 mb-2">
              Hobbies
            </h2>
            <ul className="list-disc list-inside text-sm space-y-1">
              {data.hobbies.map((lang, i) => (
                <li key={i}>{lang}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Right Content */}
      <div className="w-2/3 bg-white p-8 flex flex-col justify-between">
        {/* Objective */}
        {data.personalInfo.objective && (
          <div className="mb-6">
            <h2 className="text-xl font-bold text-purple-700 border-b-2 border-purple-700 pb-2 mb-2">
              Objective
            </h2>
            <p className="text-gray-700">{data.personalInfo.objective}</p>
          </div>
        )}

        {/* Work Experience */}
        {data.experience?.length > 0 && (
          <div className="mb-6">
            <h2 className="text-xl font-bold text-purple-700 border-b-2 border-purple-700 pb-2 mb-2">
              Work Experience
            </h2>
            {data.experience.map((exp, i) => (
              <div
                key={i}
                className="mb-4 p-4 border-l-4 border-purple-600 bg-gray-50"
              >
                <p className="font-semibold text-lg">{exp.jobTitle}</p>
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
            <h2 className="text-xl font-bold text-purple-700 border-b-2 border-purple-700 pb-2 mb-2">
              Education
            </h2>
            {data.education.map((edu, i) => (
              <div key={i} className="mb-3 p-3 bg-purple-50 rounded">
                <p className="font-semibold">{edu.type}</p>
                <p className="text-gray-700">{edu.university}</p>
                <p className="text-sm text-gray-600">
                  {edu.startYear} - {edu.endYear} | Marks: {edu.marks}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Projects */}
        {data.projects?.length > 0 && (
          <div className="mb-6">
            <h2 className="text-xl font-bold text-purple-700 border-b-2 border-purple-700 pb-2 mb-2">
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
            <h2 className="text-xl font-bold text-purple-700 border-b-2 border-purple-700 pb-2 mb-2">
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
    </div>
  );
}
