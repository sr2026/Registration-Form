import "./Review.css";
import { FaClipboardCheck } from "react-icons/fa";

function Review({ formData }) {
  return (
    <div className="review">

      <h2>Review Your Details</h2>
      <p>Please verify all the information before submitting.</p>

      <div className="review-section">
        <h3>Personal Details</h3>

        <div className="review-item">
          <span>Full Name</span>
          <strong>{formData.name}</strong>
        </div>

        <div className="review-item">
          <span>Email</span>
          <strong>{formData.email}</strong>
        </div>

        <div className="review-item">
          <span>Phone Number</span>
          <strong>{formData.phone}</strong>
        </div>
      </div>

      <div className="review-section">
        <h3>Address Details</h3>

        <div className="review-item">
          <span>Address</span>
          <strong>{formData.address}</strong>
        </div>

        <div className="review-item">
          <span>City</span>
          <strong>{formData.city}</strong>
        </div>

        <div className="review-item">
          <span>State</span>
          <strong>{formData.state}</strong>
        </div>

        <div className="review-item">
          <span>Pincode</span>
          <strong>{formData.pincode}</strong>
        </div>
      </div>

      <div className="review-section">
        <h3>Education Details</h3>

        <div className="review-item">
          <span>College</span>
          <strong>{formData.college}</strong>
        </div>

        <div className="review-item">
          <span>Degree</span>
          <strong>{formData.degree}</strong>
        </div>

        <div className="review-item">
          <span>Branch</span>
          <strong>{formData.branch}</strong>
        </div>

        <div className="review-item">
          <span>CGPA</span>
          <strong>{formData.cgpa}</strong>
        </div>
      </div>

      <div className="review-section">
        <h3>Experience Details</h3>

        <div className="review-item">
          <span>Company</span>
          <strong>{formData.company}</strong>
        </div>

        <div className="review-item">
          <span>Job Role</span>
          <strong>{formData.role}</strong>
        </div>

        <div className="review-item">
          <span>Experience</span>
          <strong>{formData.experience} Years</strong>
        </div>
      </div>

    </div>
  );
}

export default Review;