import { useFormData } from "../../context/FormContext";

export default function WorkExperienceForm({ setActiveSection }) {
  const { formData, setFormData } = useFormData();

  return (
    <div className="bg-white shadow-md rounded-lg p-8">
      <h2 className="text-2xl font-bold border-b-2 border-blue-600 pb-2 mb-6">
        Work Experience
      </h2>

      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        {formData.experience.map((exp, index) => (
          <div key={index} className="border p-4 rounded-md shadow-sm bg-gray-50">
            <h3 className="font-semibold text-lg mb-4">
              Experience {index + 1}
            </h3>

            {/* Job Title + Organization */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor={`jobTitle-${index}`} className="block text-gray-600">
                  Job Title
                </label>
                <input
                  id={`jobTitle-${index}`}
                  name={`jobTitle-${index}`}
                  type="text"
                  placeholder="Enter Job Title"
                  value={exp.jobTitle}
                  onChange={(e) => {
                    const updated = [...formData.experience];
                    updated[index].jobTitle = e.target.value;
                    setFormData({ ...formData, experience: updated });
                  }}
                  className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label htmlFor={`organization-${index}`} className="block text-gray-600">
                  Organization Name
                </label>
                <input
                  id={`organization-${index}`}
                  name={`organization-${index}`}
                  type="text"
                  placeholder="Enter Organization Name"
                  value={exp.organization}
                  onChange={(e) => {
                    const updated = [...formData.experience];
                    updated[index].organization = e.target.value;
                    setFormData({ ...formData, experience: updated });
                  }}
                  className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400"
                />
              </div>
            </div>

            {/* Start Year + End Year */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor={`startYear-${index}`} className="block text-gray-600">
                  Start Year
                </label>
                <select
                  id={`startYear-${index}`}
                  name={`startYear-${index}`}
                  value={exp.startYear}
                  onChange={(e) => {
                    const updated = [...formData.experience];
                    updated[index].startYear = e.target.value;
                    setFormData({ ...formData, experience: updated });
                  }}
                  className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400"
                >
                  <option value="">Select year</option>
                  {Array.from({ length: 2025 - 1960 + 1 }, (_, i) => 1960 + i).map(
                    (year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    )
                  )}
                </select>
              </div>
              <div>
                <label htmlFor={`endYear-${index}`} className="block text-gray-600">
                  End Year
                </label>
                <select
                  id={`endYear-${index}`}
                  name={`endYear-${index}`}
                  value={exp.endYear}
                  onChange={(e) => {
                    const updated = [...formData.experience];
                    updated[index].endYear = e.target.value;
                    setFormData({ ...formData, experience: updated });
                  }}
                  className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400"
                >
                  <option value="">Select year</option>
                  {Array.from({ length: 2025 - 1960 + 1 }, (_, i) => 1960 + i).map(
                    (year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    )
                  )}
                </select>
              </div>
            </div>
          </div>
        ))}

        {/* Add new experience */}
        <button
          type="button"
          onClick={() =>
            setFormData({
              ...formData,
              experience: [
                ...formData.experience,
                { jobTitle: "", organization: "", startYear: "", endYear: "" },
              ],
            })
          }
          className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
        >
          + Add New
        </button>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          <button
            type="button"
            className="px-4 py-2 border rounded-md text-gray-600"
            onClick={() => setActiveSection("personal")}
          >
            Back
          </button>
          <button
            type="button"
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            onClick={() => setActiveSection("education")}
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}
