import { useFormData } from "../../context/FormContext";

export default function SkillsForm({ setActiveSection }) {
  const { formData, setFormData } = useFormData();

  return (
    <div className="bg-white shadow-md rounded-lg p-8">
      <h2 className="text-2xl font-bold border-b-2 border-blue-600 pb-2 mb-6">
        Key Skills
      </h2>

      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        {formData.skills.map((skill, index) => (
          <div key={index}>
            <label
              htmlFor={`skill-${index}`}
              className="block text-gray-600"
            >
              Skill {index + 1}
            </label>
            <input
              id={`skill-${index}`}
              name={`skill-${index}`}
              type="text"
              placeholder={`Enter Skill ${index + 1}`}
              value={skill}
              onChange={(e) => {
                const updated = [...formData.skills];
                updated[index] = e.target.value;
                setFormData({ ...formData, skills: updated });
              }}
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400"
            />
          </div>
        ))}

        {/* Add new skill */}
        <button
          type="button"
          onClick={() =>
            setFormData({
              ...formData,
              skills: [...formData.skills, ""],
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
            onClick={() => setActiveSection("education")}
          >
            Back
          </button>
          <button
            type="button"
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            onClick={() => setActiveSection("projects")}
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}
