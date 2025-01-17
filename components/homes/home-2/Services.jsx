import { stepsData } from "@/data/steps";
import React from "react";

export default function Services() {
  return (
    <div className="row g-5">
      {stepsData.map((step, index) => (
        <div key={index} className="col-sm-6 col-lg-3">
          <p className="steps-1-title">
            <span className="steps-1-number">{step.number}</span> {step.title}
          </p>
          <div className="steps-1-text">{step.text}</div>
        </div>
      ))}
    </div>
  );
}
