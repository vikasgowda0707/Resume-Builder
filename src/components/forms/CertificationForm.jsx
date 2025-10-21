import { useFormData } from "../../context/FormContext";

export default function CertificationsForm({ setActiveSection }) {
  const { formData, setFormData } = useFormData();

  return (
    <div className="bg-white shadow-md rounded-lg p-8">
      <h2 className="text-2xl font-bold border-b-2 border-blue-600 pb-2 mb-6">
        Certifications
      </h2>

      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        {formData.certifications.map((cert, index) => (
          <div key={index}>
            <label
              htmlFor={`cert-${index}`}
              className="block text-gray-600"
            >
              Certification {index + 1}
            </label>
            <input
              id={`cert-${index}`}
              name={`cert-${index}`}
              type="text"
              placeholder="Enter Certification"
              value={cert}
              onChange={(e) => {
                const updated = [...formData.certifications];
                updated[index] = e.target.value;
                setFormData({ ...formData, certifications: updated });
              }}
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400"
            />
          </div>
        ))}

        {/* Add new certification */}
        <button
          type="button"
          onClick={() =>
            setFormData({
              ...formData,
              certifications: [...formData.certifications, ""],
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
            onClick={() => setActiveSection("projects")}
          >
            Back
          </button>
          <button
            type="button"
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            onClick={() => setActiveSection("langHobbies")}
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}
