import "./Address.css";
import Input from "../component/Input";
import { FaMapMarkerAlt } from "react-icons/fa";

function Address({ formData, handleChange, errors }) {
  return (
    <div className="address">

      <h2>Address Details</h2>
      <p>Please enter your address information.</p>

      <Input
        label="Address"
        name="address"
        placeholder="Enter your address"
        value={formData.address}
        onChange={handleChange}
        error={errors.address}
      />

      <Input
        label="City"
        name="city"
        placeholder="Enter your city"
        value={formData.city}
        onChange={handleChange}
        error={errors.city}
      />

      <Input
        label="State"
        name="state"
        placeholder="Enter your state"
        value={formData.state}
        onChange={handleChange}
        error={errors.state}
      />

      <Input
        label="Pincode"
        name="pincode"
        placeholder="Enter your pincode"
        value={formData.pincode}
        onChange={handleChange}
        error={errors.pincode}
      />

    </div>
  );
}

export default Address;