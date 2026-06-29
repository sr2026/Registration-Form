import { useState } from "react";
import "./App.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ProgressBar from "./component/ProgressBar";
import Button from "./component/Button";

import PersonalDetails from "./pages/PersonalDetails";
import Address from "./pages/Address";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Review from "./pages/Review";


function App() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({

    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    college: "",
    degree: "",
    branch: "",
    cgpa: "",
    company: "",
    role: "",
    experience: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({...prevData,[name]: value,}));

    setErrors((prevErrors) => ({...prevErrors,[name]: "",}));
  };

  const validateStep = () => {
    let newErrors = {};

    switch (step) {
      case 1:
        if (!formData.name.trim()) {
          newErrors.name = "Full Name is required";
        } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
          newErrors.name = "Only letters and spaces are allowed";
        }

        if (!formData.email.trim()) {
          newErrors.email = "Email is required";
        } else if (
          !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(
            formData.email
          )
        ) {
          newErrors.email = "Enter a valid email address";
        }

        if (!formData.phone.trim()) {
          newErrors.phone = "Phone Number is required";
        } else if (!/^[0-9]{10}$/.test(formData.phone)) {
          newErrors.phone = "Phone Number must contain exactly 10 digits";
        }
        break;

      case 2:
        if (!formData.address.trim()) {
          newErrors.address = "Address is required";
        }

        if (!formData.city.trim()) {
          newErrors.city = "City is required";
        }

        if (!formData.state.trim()) {
          newErrors.state = "State is required";
        }

        if (!formData.pincode.trim()) {
          newErrors.pincode = "Pincode is required";
        } else if (!/^[0-9]{6}$/.test(formData.pincode)) {
          newErrors.pincode = "Pincode must contain exactly 6 digits";
        }
        break;

      case 3:
        if (!formData.college.trim()) {
          newErrors.college = "College Name is required";
        }

        if (!formData.degree.trim()) {
          newErrors.degree = "Degree is required";
        }

        if (!formData.branch.trim()) {
          newErrors.branch = "Branch is required";
        }

        if (!formData.cgpa.trim()) {
          newErrors.cgpa = "CGPA is required";
        } else {
          const cgpa = parseFloat(formData.cgpa);

          if (isNaN(cgpa) || cgpa < 0 || cgpa > 10) {
            newErrors.cgpa = "CGPA must be between 0 and 10";
          }
        }
        break;

      case 4:
        if (!formData.company.trim()) {
          newErrors.company = "Company Name is required";
        }

        if (!formData.role.trim()) {
          newErrors.role = "Job Role is required";
        }

        if (!formData.experience.trim()) {
          newErrors.experience = "Experience is required";
        } else if (Number(formData.experience) < 0) {
          newErrors.experience = "Experience cannot be negative";
        }
        break;

      default:
        break;
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep()) {
      if (step < 5) {
        setStep(step + 1);
      }
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = () => {
    toast.success("Registration Successful!");

    console.log(formData);

    setTimeout(() => {setStep(1);

      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        pincode: "",
        college: "",
        degree: "",
        branch: "",
        cgpa: "",

        company: "",
        role: "",
        experience: "",
      });

      setErrors({});
    }, 1500);
  };

  return (
    <>
      <div className="container">
        <h1>Registration Form</h1>

        <ProgressBar step={step} />

        {step === 1 && (
          <PersonalDetails
            formData={formData}
            handleChange={handleChange}
            errors={errors}
          />
        )}

        {step === 2 && (
          <Address
            formData={formData}
            handleChange={handleChange}
            errors={errors}
          />
        )}

        {step === 3 && (
          <Education
            formData={formData}
            handleChange={handleChange}
            errors={errors}
          />
        )}

        {step === 4 && (
          <Experience
            formData={formData}
            handleChange={handleChange}
            errors={errors}
          />
        )}

        {step === 5 && <Review formData={formData} />}

        <div className="button-container">
          {step > 1 && (
            <Button
              text="Previous"
              onClick={prevStep}
            />
          )}

          {step < 5 ? (
            <Button
              text="Next"
              onClick={nextStep}
            />
          ) : (
            <Button
              text="Submit"
              onClick={handleSubmit}
            />
          )}
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />
    </>
  );
}

export default App;