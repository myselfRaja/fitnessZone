import React, { useState } from "react";

const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState(null);
  const [status, setStatus] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault();
    if (!weight || !height) {
      alert("Please enter both weight and height!");
      return;
    }

    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBMI(bmiValue);

    if (bmiValue < 18.5) setStatus("Underweight");
    else if (bmiValue >= 18.5 && bmiValue < 24.9) setStatus("Normal weight");
    else if (bmiValue >= 25 && bmiValue < 29.9) setStatus("Overweight");
    else setStatus("Obese");
  };

  return (
    <div
      style={styles.container}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
     
      <form onSubmit={calculateBMI} style={styles.form}>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Enter weight in kg"
          required
          style={styles.input}
          onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
          onBlur={(e) => Object.assign(e.target.style, styles.input)}
        />
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Enter height in cm"
          required
          style={styles.input}
          onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
          onBlur={(e) => Object.assign(e.target.style, styles.input)}
        />
        <button
          type="submit"
          style={styles.button}
          onMouseEnter={(e) =>
            Object.assign(e.target.style, styles.buttonHover)
          }
          onMouseLeave={(e) => Object.assign(e.target.style, styles.button)}
        >
          Calculate BMI
        </button>
      </form>
      {bmi && (
        <div style={styles.result}>
          <h3>Your BMI: {bmi}</h3>
          <p>Status: {status}</p>
        </div>
      )}
    </div>
  );
};

const styles = {
    container: {
      maxWidth: "450px",
      margin: "30px auto",
      padding: "25px",
      borderRadius: "12px",
      background: "linear-gradient(135deg, #f4f4f4, #e2e8f0)",
      textAlign: "center",
      boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
      transition: "transform 0.3s, box-shadow 0.3s",
    },
  
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "15px",
      marginBottom: "20px",
    },
  
    input: {
      padding: "12px",
      borderRadius: "8px",
      border: "2px solid #ccc",
      fontSize: "16px",
      transition: "border-color 0.3s, box-shadow 0.3s",
    },
  
    inputFocus: {
      borderColor: "#007bff",
      boxShadow: "0 0 8px rgba(0, 123, 255, 0.5)",
      outline: "none",
    },
  
    button: {
      padding: "12px 20px",
      borderRadius: "8px",
      backgroundColor: "#ffA500",
      color: "#fff",
      fontWeight: "bold",
      fontSize: "16px",
      border: "none",
      cursor: "pointer",
      transition: "background-color 0.3s, transform 0.3s",
      boxShadow: "0 4px 8px rgba(6, 159, 123, 0.2)",
    },
  
    buttonHover: {
      backgroundColor: "#DC4D01",
      transform: "translateY(-3px)",
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
    },
  
    result: {
      marginTop: "20px",
      padding: "15px",
      borderRadius: "8px",
      backgroundColor: "#d4edda",
      color: "#155724",
      fontWeight: "bold",
      boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
      transition: "transform 0.3s",
      animation: "fadeIn 0.5s ease",
    },
  
    "@keyframes fadeIn": {
      from: { opacity: 0, transform: "scale(0.9)" },
      to: { opacity: 1, transform: "scale(1)" },
    },
  };
  

export default BMICalculator;
