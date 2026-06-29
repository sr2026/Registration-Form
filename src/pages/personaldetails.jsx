import "./PersonalDetails.css";
import Input from "../component/Input";
import { FaUser } from "react-icons/fa";

function PersonalDetails({ formData, handleChange, errors }) {
  return (
    <div className="personal-details">

      <div className="page-title">

        <div className="page-icon">
          <FaUser />
        </div>

        <div>
          <h2>Personal Details</h2>
          <p>Please enter your personal information.</p>
        </div>

      </div>

      <Input
        label="Full Name"
        name="name"
        placeholder="Enter your full name"
        value={formData.name}
        onChange={handleChange}
        error={errors.name}
      />

      <Input
        label="Email Address"
        type="email"
        name="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
      />

      <Input
        label="Phone Number"
        type="tel"
        name="phone"
        placeholder="Enter your phone number"
        value={formData.phone}
        onChange={handleChange}
        error={errors.phone}
      />

    </div>
  );
}

export default PersonalDetails;