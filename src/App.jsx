import React, { useState } from 'react'
import "./App.css"

const App = () => {

  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setbmi] = useState(null);
  const [bmiStatus, setBmiStatus] = useState("");
  const [errorMessage,setErrorMessage] = useState("");

  const calculateBmi = () => {
    const isValidHeight= /^\d+$/.test(height);
    const isValidWeight= /^\d+$/.test(weight);

    if (isValidHeight && isValidWeight) {
      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters);
      setbmi(bmiValue.toFixed(2));
      if (bmiValue < 18.5) {   
        setBmiStatus("Underweight");
      }
      else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        setBmiStatus("Normal weight");
      }
      else if (bmiValue >= 25 && bmiValue < 29.9) {
        setBmiStatus("Over weight");
      }
      else {
        setBmiStatus("Obese")
      }
      setErrorMessage("")
    }
    else {
      setbmi(null);
      setBmiStatus("");
      setErrorMessage("Please enter valid numeric values")
    }
  };

  const clearAll=()=>{
    setHeight("");
    setWeight("");
    setbmi(null);
    setBmiStatus("");
  }
  return (
    <>
      <div className="bmi-calculator">
        <div className="box"></div>
        <div className="data">
          <h1>BMI Calculator</h1>

          {errorMessage && <p className='error'>{errorMessage}</p>}
          <div className="input-container">
            <label htmlFor='height'>Height (cm):</label>
            <input type="text" id='height' value={height} onChange={(e) => setHeight(e.target.value)} />
          </div>
          <div className="input-container">
            <label htmlFor='weight'>Weight (kg):</label>
            <input type="text" id='weight' value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <button onClick={calculateBmi}>Calculate BMI</button>
          <button onClick={clearAll}>Clear</button>
          {bmi !== null && (
            <div className='result'>
              <p>Your B;MI is: {bmi}</p>
              <p>Ststus: {bmiStatus}</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default App