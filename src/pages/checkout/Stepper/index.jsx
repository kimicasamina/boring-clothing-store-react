import React, { useState, useRef, useEffect } from "react";
import CheckoutForm from "../Form";

const listOfSteps = [
  "Customer Info",
  "Shipping Info",
  "Payment",
  "Confirmation",
];

export default function Stepper({ checkoutToken }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);
  const [margins, setMargins] = useState({
    marginLeft: 0,
    marginRight: 0,
  });

  const stepRef = useRef([]);

  useEffect(() => {
    setMargins({
      marginLeft: stepRef.current[0].offsetWidth / 2,
      marginRight: stepRef.current[listOfSteps.length - 1].offsetWidth / 2,
    });
  }, [stepRef, listOfSteps.length]);

  if (!listOfSteps.length) {
    return <></>;
  }

  const handleNext = () => {
    setCurrentStep((prevStep) => {
      if (prevStep === listOfSteps.length) {
        setIsComplete(true);
        return prevStep;
      } else {
        return prevStep + 1;
      }
    });
  };

  const calculateProgressBarWidth = () => {
    return ((currentStep - 1) / (listOfSteps.length - 1)) * 100;
  };

  return (
    <div className="stepper-container">
      <div className="stepper">
        {listOfSteps.map((step, index) => {
          return (
            <div
              className={`step ${
                currentStep > index + 1 || isComplete ? "complete" : ""
              } ${currentStep === index + 1 ? "active" : ""} `}
              key={index}
              ref={(el) => (stepRef.current[index] = el)}
            >
              <div className="step-number">
                {currentStep > index + 1 || isComplete ? (
                  <span>&#10003;</span>
                ) : (
                  index + 1
                )}
              </div>
              <div className="step-name">{step.name}</div>

              <div
                className="progress-bar"
                style={{
                  width: `calc(100% - ${
                    margins.marginLeft + margins.marginRight
                  }px)`,
                  left: margins.marginLeft,
                  right: margins.marginRight,
                }}
              >
                <div
                  className="progress"
                  style={{ width: `${calculateProgressBarWidth()}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>

      <CheckoutForm
        currentStep={currentStep}
        handleNext={handleNext}
        checkoutToken={checkoutToken}
      />
    </div>
  );
}

// <div className="flex flex-col gap-y-8">
//   {/* <ActiveComponent /> */}
//   {currentStep === 1 && <CustomerInfo handleNext={handleNext} />}
//   {currentStep === 2 && <ShippingAddress handleNext={handleNext} />}
//   {currentStep === 3 && <Payment handleNext={handleNext} />}
//   {currentStep === 4 && <Confirmation handleNext={handleNext} />}
//   {!isComplete && (
//     <button
//       className="btn bg-purple-dark text-light-base mx-auto w-[100px]"
//       onClick={() => handleNext()}
//     >
//       {currentStep === listOfSteps.length ? "Finish" : "Next"}
//     </button>
//   )}
// </div>
