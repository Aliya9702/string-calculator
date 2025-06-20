// REACT //
import React, { useState } from "react";

// UTILS //
import { add } from "./calculator/stringCalculator";

function App() {
  // Define States
  const [input, setInput] = useState("");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState("");

  // Helper Function
  /**
   * Handles the calculation when the user clicks the "Calculate" button.
   *
   * - It tries to compute the sum using the `add()` function.
   * - If successful, it updates the `result` and clears any previous error.
   * - If an error occurs (e.g. negative numbers), it clears the result and shows the error message.
   */
  const handleCalculate = () => {
    try {
      // Try to calculate the sum using the input string
      const sum = add(input);

      // If successful, set the result and clear any error
      setResult(sum);
      setError("");
    } catch (err: any) {
      // If an error occurs, clear the result and set the error message
      setResult(null);
      setError(err.message);
    }
  };

  return (
    <div style={styles.container}>
      {/* App Title */}
      <h1>String Calculator</h1>

      {/* Input Textarea: accepts user input for calculation */}
      <textarea
        style={styles.textarea}
        rows={5}
        placeholder="Enter string, e.g. 1,2 or //[*][%]\n1*2%3"
        value={input}
        onChange={(e) => setInput(e.target.value)} // Updates the input state as user types
      />

      {/* Calculate Button: triggers the add function on click */}
      <button onClick={handleCalculate} style={styles.button}>
        Calculate
      </button>

      {/* Error Message: displayed only if there’s an error (e.g., negative numbers) */}
      {error && <p style={styles.error}>{error}</p>}

      {/* Result Message: displayed if there's a valid result and no error */}
      {result !== null && !error && (
        <p style={styles.result}>Result: {result}</p>
      )}
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    maxWidth: 500,
    margin: "50px auto",
    padding: 20,
    textAlign: "center",
    fontFamily: "Arial",
  },
  textarea: {
    width: "100%",
    padding: 10,
    fontSize: "1rem",
    marginBottom: 10,
  },
  button: {
    padding: "10px 20px",
    fontSize: "1rem",
    cursor: "pointer",
  },
  result: {
    marginTop: 20,
    color: "green",
    fontWeight: "bold",
  },
  error: {
    marginTop: 20,
    color: "red",
    fontWeight: "bold",
  },
};

export default App;
