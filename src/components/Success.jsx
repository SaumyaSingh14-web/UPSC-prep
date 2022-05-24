import React from "react";
import { marksObtained } from "../constants/constant";

function Success() {
  const marks = marksObtained;
  return (
    <div>
      <div className="text-center mt-6 text-lg font-bold">
        You have secured <span className="text-orange-600">{marks}/100</span> marks in previous quiz
      </div>
    </div>
  );
}

export default Success;