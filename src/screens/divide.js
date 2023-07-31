import React from "react";
import { useParams } from "react-router-dom";

function Divide() {
  const { a, b } = useParams();

  // Convert the URL parameters to numbers
  const numA = parseFloat(a);
  const numB = parseFloat(b);

  // Check if the division is valid (non-zero divisor)
  const isValidDivision = numB !== 0;

  // Calculate the result or display an error message if division is not possible
  const result = isValidDivision ? numA / numB : "Division by zero is not allowed";

  return (
    <h2>
      {isValidDivision ? `${numA} ÷ ${numB} = ${result}` : result}
    </h2>
  );
}

export default Divide;
