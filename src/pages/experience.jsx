import "./Experience.css";
import Input from "../component/Input";
import { FaBriefcase } from "react-icons/fa";

function Experience({ formData, handleChange, errors }) {
  return (
    <div className="experience">

      <h2>Experience Details</h2>
      <p>Please enter your work experience.</p>

      <Input
        label="Company Name"
        name="company"
        placeholder="Enter company name"
        value={formData.company}
        onChange={handleChange}
        error={errors.company}
      />

      <Input
        label="Job Role"
        name="role"
        placeholder="Enter your job role"
        value={formData.role}
        onChange={handleChange}
        error={errors.role}
      />

      <Input
        label="Years of Experience"
        type="number"
        name="experience"
        placeholder="Enter years of experience"
        value={formData.experience}
        onChange={handleChange}
        error={errors.experience}
      />

    </div>
  );
}

export default Experience;