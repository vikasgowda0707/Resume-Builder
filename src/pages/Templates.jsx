// src/pages/Templates.jsx
import { useNavigate } from "react-router-dom";
import { useFormData } from "../context/FormContext"; // ✅ import context

export default function Templates() {
  const navigate = useNavigate();
  const { setFormData } = useFormData(); // ✅ get setFormData

  const handleUseTemplate = (id) => {
    setFormData((prev) => ({
      ...prev,
      selectedTemplate: id, // store selected template id
    }));
    navigate("/details");
  };

  const handlePreview = (id) => {
    navigate(`/preview/template${id}`);
  };

  // ✅ Template names
  const templateNames = {
    1: "Professional",
    2: "Modern",
    3: "Classic",
    4: "Minimal",
    5: "Creative",
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-4">Templates</h2>
      <p className="text-gray-600 mb-8">Choose Your Resume Template</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {[1, 2, 3, 4, 5].map((id) => (
          <div
            key={id}
            className="relative border rounded-lg shadow-md overflow-hidden hover:shadow-xl transition group"
          >
            {/* Preview Image */}
            <div
              className="h-80 bg-cover bg-center"
              style={{ backgroundImage: `url(/images/Template${id}.png)`  }}
            >
              <span className="sr-only  ">{templateNames[id]}</span>

            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col gap-1 items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <button
                onClick={() => handleUseTemplate(id)}
                className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-700"
              >
                Use Template
              </button>
              <button
                onClick={() => handlePreview(id)}
                className="bg-gray-200 text-gray-900 px-5 py-2 rounded-lg shadow-md hover:bg-gray-300"
              >
                Preview
              </button>
            </div>

            {/* Template Name */}
            <div className="p-3 text-center ">
              <p className="font-semibold text-gray-800 text-lg italic ">
                {templateNames[id]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}






// src/pages/Templates.jsx
// import { useNavigate } from "react-router-dom";
// import { useFormData } from "../context/FormContext"; // ✅ import context

// export default function Templates() {
//   const navigate = useNavigate();
//   const { setFormData } = useFormData(); // ✅ get setFormData

//   const handleUseTemplate = (id) => {
//     setFormData((prev) => ({
//       ...prev,
//       selectedTemplate: id, // store selected template id
//     }));
//     navigate("/details");
//   };

//   const handlePreview = (id) => {
//     navigate(`/preview/template${id}`);
//   };

//   return (
//     <div className="p-8">
//       <h2 className="text-3xl font-bold mb-4">Templates</h2>
//       <p className="text-gray-600 mb-8">Choose Your Resume Template</p>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {[1, 2, 3, 4, 5].map((id) => (
//           <div
//             key={id}
//             className="relative border rounded-lg shadow-md overflow-hidden hover:shadow-xl transition group"
//           >
//             {/* Preview Image */}
//             <div
//               className="h-48 bg-cover bg-center"
//               style={{ backgroundImage: `url(/images/template${id}.png)` }}
//             >
//               {/* fallback if image not found */}
//               <span className="sr-only">Template{id}</span>
//             </div>

//             {/* Hover Overlay */}
//             <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col gap-1 items-center justify-center opacity-0 group-hover:opacity-100 transition">
//               <button
//                 onClick={() => handleUseTemplate(id)}
//                 className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-700"
//               >
//                 Use Template
//               </button>
//               <button
//                 onClick={() => handlePreview(id)}
//                 className="bg-gray-200 text-gray-900 px-5 py-2 rounded-lg shadow-md hover:bg-gray-300"
//               >
//                 Preview
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
