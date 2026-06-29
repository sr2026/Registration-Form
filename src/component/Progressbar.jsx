import "./ProgressBar.css";

function ProgressBar({ step }) {

  const steps = [
    "Personal",
    "Address",
    "Education",
    "Experience",
    "Review",
  ];

  return (
    <div className="progress-container">

      {steps.map((item, index) => {

        const currentStep = index + 1;

        return (

          <div className="progress-item" key={index}>

            <div
              className={
                currentStep < step
                  ? "circle completed"
                  : currentStep === step
                  ? "circle active"
                  : "circle"
              }
            >
              {currentStep < step ? "✓" : currentStep}
            </div>

            <span>{item}</span>

            {index !== steps.length - 1 && (

              <div
                className={
                  currentStep < step
                    ? "line completed-line"
                    : "line"
                }
              ></div>

            )}

          </div>

        );

      })}

    </div>
  );
}

export default ProgressBar;