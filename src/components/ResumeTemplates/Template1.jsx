// src/components/ResumeTemplates/Template1.jsx
export default function Template1({ data }) {
  if (!data || !data) {
    return <div className="text-center text-red-600">⚠️ No data found</div>;
  }

  return (
    <div className="w-full h-full mx-auto bg-white shadow-lg font-sans flex flex-col">
      {/* Header */}
      <div className="bg-blue-700 text-white p-6 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold">
            {data.firstName} {data.lastName}
          </h1>
          <p className="text-lg">{data.role || "Professional"}</p>
        </div>
        {data.profilePic && (
          <img
            src={data.profilePic}
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-white object-cover"
          />
        )}
      </div>

      {/* Body */}
      <div className="flex-1 flex">
        {/* Left Sidebar */}
        <div className="w-1/3 bg-gray-100 p-6 flex flex-col justify-start">
          {/* Contact Info */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">
              <span className="inline-block w-full border-b-2 border-blue-700 pb-2">
                Contact
              </span>
            </h2>
            <p className="font-semibold">Email:</p>
            <p className="mb-2 break-words">{data.email}</p>
            <p className="font-semibold">Phone:</p>
            <p className="mb-2">{data.phone}</p>
            <p className="font-semibold">Address:</p>
            <p>
              {data.city}, {data.state}
            </p>
          </div>

          {/* Skills */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">
              <span className="inline-block w-full border-b-2 border-blue-700 pb-2">
                Skills
              </span>
            </h2>
            <ul className="list-disc list-inside space-y-1">
              {data.skills?.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>

          {/* Languages */}
          {data.languages?.length > 0 && (
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-2">
                <span className="inline-block w-full border-b-2 border-blue-700 pb-2">
                  Languages
                </span>
              </h2>
              <ul className="list-disc list-inside space-y-1">
                {data.languages.map((lang, i) => (
                  <li key={i}>{lang}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Hobbies */}
          {data.hobbies?.length > 0 && (
            <div>
              <h2 className="text-lg font-semibold mb-2">
                <span className="inline-block w-full border-b-2 border-blue-700 pb-2">
                  Hobbies
                </span>
              </h2>
              <ul className="list-disc list-inside space-y-1">
                {data.hobbies.map((hobb, i) => (
                  <li key={i}>{hobb}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Right Content */}
        <div className="w-2/3 p-6 flex flex-col justify-between">
          <div>
            {/* Objective */}
            {data.objective && (
              <div className="mb-6">
                <h2 className="text-xl font-bold text-blue-700 mb-2">
                  <span className="inline-block w-full border-b-2 border-blue-700 pb-2">
                    Objective
                  </span>
                </h2>
                <p className="text-gray-700 leading-relaxed">{data.objective}</p>
              </div>
            )}

            {/* Work Experience */}
            {data.experience?.length > 0 && (
              <div className="mb-6">
                <h2 className="text-xl font-bold text-blue-700 mb-2">
                  <span className="inline-block w-full border-b-2 border-blue-700 pb-2">
                    Work Experience
                  </span>
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
                <h2 className="text-xl font-bold text-blue-700 mb-2">
                  <span className="inline-block w-full border-b-2 border-blue-700 pb-2">
                    Education
                  </span>
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
                <h2 className="text-xl font-bold text-blue-700 mb-2">
                  <span className="inline-block w-full border-b-2 border-blue-700 pb-2">
                    Projects
                  </span>
                </h2>
                {data.projects.map((proj, idx) => (
                  <div key={idx} className="mb-2">
                    <p className="font-semibold">{proj.title}</p>
                    <p className="text-sm text-gray-700">{proj.description}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Certifications */}
            {data.certifications?.length > 0 && (
              <div className="mb-6">
                <h2 className="text-xl font-bold text-blue-700 mb-2">
                  <span className="inline-block w-full border-b-2 border-blue-700 pb-2">
                    Certifications
                  </span>
                </h2>
                <ul className="list-disc list-inside text-gray-700">
                  {data.certifications.map((cert, idx) => (
                    <li key={idx}>{cert}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
