import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

/*App Component */

export default function App() {
  return (
    <div>
      <Steps />
    </div>
  );
}

/*Steps Component */

function Steps() {
  /*state variables and functions */

  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  /*Function to handle the state function */

  function handlePrevious() {
    /*  if (step > 1) setStep(step - 1); */
    if (step > 1) setStep((step) => step - 1);
  }

  /*Function to handle the state function */

  function handleNext() {
    /* if (step < 3) setStep(step + 1);  better to pass the state as a call back function when updating state based on current state*/
    if (step < 3) setStep((step) => step + 1);
  }

  return (
    <div>
      {/* <button className="close" onClick={() => setIsOpen(!isOpen)}> */}
      <button className="close" onClick={() => setIsOpen((isOpen) => !isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          {/* Instead of writing the step no and message directly,
           we can use a separate component for the message and pass it as childen prop
          <div>
            <p className="message">
              Step{step}: {messages[step - 1]}
            </p>
      </div>*/}
          <StepMessage step={step}>{messages[step - 1]}</StepMessage>
          <div className="buttons">
            {/*****Calling the Button component twice with different values *****/}
            {/* Passing children prop.
           We can call  a component just like an html tag with opening and closing tags 
           eg: <button>Previous</button> instead of <button />*/}
            <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
              <span>👈</span>Previous
            </Button>

            <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
              Next<span>👉</span>
              {/* made it as children prop*/}
              {/* passing as props eg :- emoji="👉" text="Next"*/}
            </Button>

            {/* Instead of writing button tag with properties twice , 
            we created a button component and passed the properties to the comp while calling the components
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button> 
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>*/}
          </div>
        </div>
      )}
    </div>
  );
}

/*Message  Component*/
function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3> Step {step}: </h3>
      {children}
    </div>
  );
}

/*Button Component */

function Button({ bgColor, textColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
      {/*<span>{emoji}</span>
      {text}
      Instead of passing the emoji and text as separate props ,
      we pass it as children props*/}
    </button>
  );
}
