import { useFormData } from "../../context/FormContext";
import { useNavigate } from "react-router-dom";

export default function LanguagesHobbiesForm({ setActiveSection }) {
  const { formData, setFormData } = useFormData();
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow-md rounded-lg p-8">
      <h2 className="text-2xl font-bold border-b-2 border-blue-600 pb-2 mb-6">
        Languages & Hobbies
      </h2>

      <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
        {/* Languages */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Languages</h3>
          {formData.languages.map((lang, index) => (
            <div key={index} className="mb-3">
              <label
                htmlFor={`lang-${index}`}
                className="block text-gray-600"
              >
                Language {index + 1}
              </label>
              <input
                id={`lang-${index}`}
                name={`lang-${index}`}
                type="text"
                placeholder="Enter Language"
                value={lang}
                onChange={(e) => {
                  const updated = [...formData.languages];
                  updated[index] = e.target.value;
                  setFormData({ ...formData, languages: updated });
                }}
                className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400"
              />
            </div>
          ))}

          {/* Add Language */}
          <button
            type="button"
            onClick={() =>
              setFormData({
                ...formData,
                languages: [...formData.languages, ""],
              })
            }
            className="px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-700 text-sm"
          >
            + Add Language
          </button>
        </div>

        {/* Hobbies */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Hobbies</h3>
          {formData.hobbies.map((hobby, index) => (
            <div key={index} className="mb-3">
              <label
                htmlFor={`hobby-${index}`}
                className="block text-gray-600"
              >
                Hobby {index + 1}
              </label>
              <input
                id={`hobby-${index}`}
                name={`hobby-${index}`}
                type="text"
                placeholder="Enter Hobby"
                value={hobby}
                onChange={(e) => {
                  const updated = [...formData.hobbies];
                  updated[index] = e.target.value;
                  setFormData({ ...formData, hobbies: updated });
                }}
                className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400"
              />
            </div>
          ))}

          {/* Add Hobby */}
          <button
            type="button"
            onClick={() =>
              setFormData({
                ...formData,
                hobbies: [...formData.hobbies, ""],
              })
            }
            className="px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-700 text-sm"
          >
            + Add Hobby
          </button>
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-6">
          <button
            type="button"
            className="px-4 py-2 border rounded-md text-gray-600"
            onClick={() => setActiveSection("certifications")}
          >
            Back
          </button>
          <button
            type="button"
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            onClick={() => navigate("/myresume")}
          >
            Preview Resume
          </button>
        </div>
      </form>
    </div>
  );
}
