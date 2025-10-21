import { useFormData } from "../../context/FormContext";

export default function ProjectsForm({ setActiveSection }) {
  const { formData, setFormData } = useFormData();

  return (
    <div className="bg-white shadow-md rounded-lg p-8">
      <h2 className="text-2xl font-bold border-b-2 border-blue-600 pb-2 mb-6">
        Projects
      </h2>

      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        {formData.projects.map((proj, index) => (
          <div
            key={index}
            className="border p-4 rounded-md shadow-sm bg-gray-50"
          >
            <h3 className="font-semibold text-lg mb-4">
              Project {index + 1}
            </h3>

            {/* Title */}
            <div className="mb-4">
              <label
                htmlFor={`proj-title-${index}`}
                className="block text-gray-600"
              >
                Project Title
              </label>
              <input
                id={`proj-title-${index}`}
                name={`proj-title-${index}`}
                type="text"
                placeholder="Enter Project Title"
                value={proj.title}
                onChange={(e) => {
                  const updated = [...formData.projects];
                  updated[index].title = e.target.value;
                  setFormData({ ...formData, projects: updated });
                }}
                className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Description */}
            <div>
              <label
                htmlFor={`proj-desc-${index}`}
                className="block text-gray-600"
              >
                Description
              </label>
              <textarea
                id={`proj-desc-${index}`}
                name={`proj-desc-${index}`}
                rows="3"
                placeholder="Write short project description"
                value={proj.description}
                onChange={(e) => {
                  const updated = [...formData.projects];
                  updated[index].description = e.target.value;
                  setFormData({ ...formData, projects: updated });
                }}
                className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400"
              ></textarea>
            </div>
          </div>
        ))}

        {/* Add new project */}
        <button
          type="button"
          onClick={() =>
            setFormData({
              ...formData,
              projects: [...formData.projects, { title: "", description: "" }],
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
            onClick={() => setActiveSection("skills")}
          >
            Back
          </button>
          <button
            type="button"
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            onClick={() => setActiveSection("certifications")}
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}
