import { useFormData } from "../../context/FormContext";

export default function EducationForm({ setActiveSection }) {
  const { formData, setFormData } = useFormData();

  return (
    <div className="bg-white shadow-md rounded-lg p-8">
      <h2 className="text-2xl font-bold border-b-2 border-blue-600 pb-2 mb-6">
        Education Details
      </h2>

      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        {formData.education.map((edu, index) => (
          <div
            key={index}
            className="border p-4 rounded-md shadow-sm bg-gray-50"
          >
            <h3 className="font-semibold text-lg mb-4">
              Education {index + 1}
            </h3>

            {/* Type + University */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor={`type-${index}`} className="block text-gray-600">
                  Type
                </label>
                <select
                  id={`type-${index}`}
                  name={`type-${index}`}
                  value={edu.type}
                  onChange={(e) => {
                    const updated = [...formData.education];
                    updated[index].type = e.target.value;
                    setFormData({ ...formData, education: updated });
                  }}
                  className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400"
                >
                  <option value="">Select Type</option>
                  <option value="Post Graduation">Post Graduation</option>
                  <option value="Graduation">Graduation</option>
                  <option value="PUC">PUC</option>
                  <option value="SSLC">SSLC</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor={`university-${index}`}
                  className="block text-gray-600"
                >
                  University
                </label>
                <input
                  id={`university-${index}`}
                  name={`university-${index}`}
                  type="text"
                  placeholder="Enter University"
                  value={edu.university}
                  onChange={(e) => {
                    const updated = [...formData.education];
                    updated[index].university = e.target.value;
                    setFormData({ ...formData, education: updated });
                  }}
                  className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400"
                />
              </div>
            </div>

            {/* Marks */}
            <div className="mb-4">
              <label
                htmlFor={`marks-${index}`}
                className="block text-gray-600"
              >
                Marks
              </label>
              <input
                id={`marks-${index}`}
                name={`marks-${index}`}
                type="number"
                placeholder="Enter Marks"
                value={edu.marks}
                onChange={(e) => {
                  const updated = [...formData.education];
                  updated[index].marks = e.target.value;
                  setFormData({ ...formData, education: updated });
                }}
                className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Start Year + End Year */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor={`startYear-${index}`}
                  className="block text-gray-600"
                >
                  Start Year
                </label>
                <select
                  id={`startYear-${index}`}
                  name={`startYear-${index}`}
                  value={edu.startYear}
                  onChange={(e) => {
                    const updated = [...formData.education];
                    updated[index].startYear = e.target.value;
                    setFormData({ ...formData, education: updated });
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
                <label
                  htmlFor={`endYear-${index}`}
                  className="block text-gray-600"
                >
                  End Year
                </label>
                <select
                  id={`endYear-${index}`}
                  name={`endYear-${index}`}
                  value={edu.endYear}
                  onChange={(e) => {
                    const updated = [...formData.education];
                    updated[index].endYear = e.target.value;
                    setFormData({ ...formData, education: updated });
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

        {/* Add new education */}
        <button
          type="button"
          onClick={() =>
            setFormData({
              ...formData,
              education: [
                ...formData.education,
                { type: "", university: "", marks: "", startYear: "", endYear: "" },
              ],
            })
          }
          className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
        >
          + Add New
        </button>

        {/* Navigation */}
        <div className="flex justify-between mt-6">
          <button
            type="button"
            className="px-4 py-2 border rounded-md text-gray-600"
            onClick={() => setActiveSection("work")}
          >
            Back
          </button>
          <button
            type="button"
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            onClick={() => setActiveSection("skills")}
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}
