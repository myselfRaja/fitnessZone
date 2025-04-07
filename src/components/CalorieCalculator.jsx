import React, { useState } from "react";

const CombinedCalculator = () => {
  // State for Calorie Calculator
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [gender, setGender] = useState("male");
  const [activity, setActivity] = useState("1.2");
  const [calories, setCalories] = useState(null);

  // State for BMI Calculator
  const [bmi, setBMI] = useState(null);
  const [bmiStatus, setBMIStatus] = useState("");

  // Calorie Calculation
  const calculateCalories = (e) => {
    e.preventDefault();
    if (!age || !weight || !height) {
      alert("Please fill all fields!");
      return;
    }

    let bmr =
      gender === "male"
        ? 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age
        : 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;

    const dailyCalories = (bmr * parseFloat(activity)).toFixed(2);
    setCalories(dailyCalories);
  };

  // BMI Calculation
  const calculateBMI = (e) => {
    e.preventDefault();
    if (!weight || !height) {
      alert("Please enter weight and height!");
      return;
    }

    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBMI(bmiValue);

    if (bmiValue < 18.5) setBMIStatus("Underweight");
    else if (bmiValue >= 18.5 && bmiValue < 24.9) setBMIStatus("Normal weight");
    else if (bmiValue >= 25 && bmiValue < 29.9) setBMIStatus("Overweight");
    else setBMIStatus("Obese");
  };

  const styles = {
    container: {
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: "20px",
      margin: "30px auto",
      padding: "20px",
      maxWidth: "1000px",
      background: "linear-gradient(135deg, #f4f4f4, #e2e8f0)",
      borderRadius: "12px",
      boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
    },
    calculatorBox: {
      flex: "1",
      padding: "20px",
      background: "#ffffff",
      borderRadius: "10px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
      minWidth: "280px",
      maxWidth: "450px",
      margin: "10px",
      boxSizing: "border-box",
      overflowY: "auto",
      maxHeight: "350px",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    },
    input: {
      padding: "10px",
      borderRadius: "6px",
      border: "2px solid #ccc",
      marginBottom: "8px",
      fontSize: "14px",
      outline: "none",
      transition: "border-color 0.3s",
    },
    button: {
      padding: "10px",
      borderRadius: "6px",
      backgroundColor: "#ffA500",
      color: "#fff",
      fontWeight: "bold",
      cursor: "pointer",
      border: "none",
      transition: "background-color 0.3s, transform 0.3s",
      marginTop: "10px",
    },
    result: {
      marginTop: "15px",
      padding: "10px",
      borderRadius: "8px",
      backgroundColor: "#d4edda",
      color: "#155724",
      fontWeight: "bold",
      boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    },
    // Responsive for laptop and mobile
    "@media (max-width: 1024px)": {
      container: {
        flexDirection: "column",
        alignItems: "center",
      },
      calculatorBox: {
        width: "100%",
        marginBottom: "20px",
        maxHeight: "none", // Laptop pe overflow ko remove karte hain
      },
    },
  };

  return (
    <div style={styles.container}>
      {/* Calorie Calculator */}
      <div style={styles.calculatorBox}>
        <h2>Calorie Calculator</h2>
        <form onSubmit={calculateCalories} style={styles.form}>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Age"
            style={styles.input}
            required
          />
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Weight (kg)"
            style={styles.input}
            required
          />
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Height (cm)"
            style={styles.input}
            required
          />
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            style={styles.input}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <select
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
            style={styles.input}
          >
            <option value="1.2">Sedentary</option>
            <option value="1.375">Lightly active</option>
            <option value="1.55">Moderately active</option>
            <option value="1.725">Very active</option>
            <option value="1.9">Super active</option>
          </select>
          <button type="submit" style={styles.button}>Calculate Calories</button>
        </form>
        {calories && <div style={styles.result}>Daily Calories: {calories} kcal</div>}
      </div>

      {/* BMI Calculator */}
      <div style={styles.calculatorBox}>
        <h2>BMI Calculator</h2>
        <form onSubmit={calculateBMI} style={styles.form}>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Weight (kg)"
            style={styles.input}
            required
          />
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Height (cm)"
            style={styles.input}
            required
          />
          <button type="submit" style={styles.button}>Calculate BMI</button>
        </form>
        {bmi && (
          <div style={styles.result}>
            Your BMI: {bmi} ({bmiStatus})
          </div>
        )}
      </div>
    </div>
  );
};

export default CombinedCalculator;
