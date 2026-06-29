import "./Education.css";
import Input from "../component/Input";
import { FaGraduationCap } from "react-icons/fa";

function Education({ formData, handleChange, errors }) {
  return (
    <div className="education">

      <h2>Education Details</h2>
      <p>Please enter your educational information.</p>

      <Input
        label="College Name"
        name="college"
        placeholder="Enter your college name"
        value={formData.college}
        onChange={handleChange}
        error={errors.college}
      />

      <Input
        label="Degree"
        name="degree"
        placeholder="Enter your degree"
        value={formData.degree}
        onChange={handleChange}
        error={errors.degree}
      />

      <Input
        label="Branch"
        name="branch"
        placeholder="Enter your branch"
        value={formData.branch}
        onChange={handleChange}
        error={errors.branch}
      />

      <Input
        label="CGPA"
        name="cgpa"
        placeholder="Enter your CGPA"
        value={formData.cgpa}
        onChange={handleChange}
        error={errors.cgpa}
      />

    </div>
  );
}

export default Education;