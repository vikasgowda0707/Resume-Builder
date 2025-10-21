// src/context/FormContext.jsx
import { createContext, useContext, useState } from "react";

const FormContext = createContext();

export function FormProvider({ children }) {
  const [formData, setFormData] = useState({
    // Personal Info 
    profilePic: "",
    firstName: "",
    lastName: "",
    role: "",
    email: "",
    mobile: "",
    city: "",
    state: "",
    postalCode: "",
    objective: "",

    // Work Experience
    experience: [
      {
        jobTitle: "",
        organization: "",
        startYear: "",
        endYear: "",
      },
    ],

    // Education
    education: [
      {
        type: "",
        university: "",
        marks: "",
        startYear: "",
        endYear: "",
      },
    ],

    // Skills
    skills: [],

    // Projects
    projects: [
      {
        title: "",
        description:
          "",
      },
    ],

    // Certifications
    certifications: [],

    // Languages & Hobbies
    languages: [""],
    hobbies: [],
  });

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
}

export function useFormData() {
  return useContext(FormContext);
}
