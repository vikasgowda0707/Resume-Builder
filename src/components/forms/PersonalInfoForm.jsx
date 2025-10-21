// src/components/forms/PersonalInfoForm.jsx
import { useFormData } from "../../context/FormContext";

export default function PersonalInfoForm({ setActiveSection }) {
  const { formData, setFormData } = useFormData();

  return (
    <div className="bg-white shadow-md rounded-lg p-8">
      <h2 className="text-2xl font-bold border-b-2 border-blue-600 pb-2 mb-6">
        Personal Info
      </h2>

      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        {/* Profile Picture */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden">
            <img
              src={formData.profilePic || "https://via.placeholder.com/150"}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            id="profilePic"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                  setFormData({ ...formData, profilePic: reader.result });
                };
                reader.readAsDataURL(file);
              }
            }}
          />
          <label
            htmlFor="profilePic"
            className="text-blue-600 mt-2 text-sm hover:underline cursor-pointer"
          >
            Change Profile Photo
          </label>
        </div>

        {/* First + Last Name */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-600">First Name</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="Enter first name"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label className="block text-gray-600">Last Name</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Enter last name"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
        </div>

        {/* Email + Mobile */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-600">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label className="block text-gray-600">Mobile</label>
            <input
            id="mobile"
              name="mobile"
              type="tel"
              placeholder="Enter 10-digit mobile"
              value={formData.mobile}
              onChange={(e) => {
                if (/^\d{0,10}$/.test(e.target.value)) {
                  setFormData({ ...formData, mobile: e.target.value });
                }
              }}
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
        </div>

        {/* City + State */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-600">City</label>
            <input
              type="text"
              placeholder="Enter city"
              value={formData.city}
              onChange={(e) =>
                setFormData({ ...formData, city: e.target.value })
              }
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-600">State</label>
            <input
              type="text"
              placeholder="Enter state"
              value={formData.state}
              onChange={(e) =>
                setFormData({ ...formData, state: e.target.value })
              }
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>

        {/* Postal Code */}
        <div>
          <label className="block text-gray-600">Postal Code</label>
          <input
            type="text"
            placeholder="Enter 6-digit postal code"
            value={formData.postalCode}
            onChange={(e) => {
              if (/^\d{0,6}$/.test(e.target.value)) {
                setFormData({ ...formData, postalCode: e.target.value });
              }
            }}
            className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Objective */}
        <div>
          <label className="block text-gray-600">Objective</label>
          <textarea
            rows="4"
            placeholder="Write your career objective"
            value={formData.objective}
            onChange={(e) =>
              setFormData({ ...formData, objective: e.target.value })
            }
            className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-6">
          <button
            type="button"
            className="px-4 py-2 border rounded-md text-gray-600"
            disabled
          >
            Back
          </button>
          <button
            type="button"
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            onClick={() => setActiveSection("work")}
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}
