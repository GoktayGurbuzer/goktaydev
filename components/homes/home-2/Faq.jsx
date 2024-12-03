"use client";
import { faqs } from "@/data/faqs";
import React, { useState } from "react";

export default function Faq() {
  const [currentIndex, setCurrentIndex] = useState(-1);

  return (
      <dl className="accordion-1 wow fadeInUp">
        {faqs.map((elm, index) => (
            <React.Fragment key={index}>
              <dt
                  onClick={() => {
                    setCurrentIndex((prev) => (prev === index ? -1 : index));
                  }}
                  className={currentIndex === index ? "active" : ""}
              >
                <a>
                  <span>{elm.question}</span>
                  <i className={`icon-${currentIndex === index ? "minus" : "plus"}`} />
                </a>
              </dt>
                <dd className={`black ${currentIndex === index ? "expanded" : "collapsed"}`}>
                    {elm.answer}
                </dd>
            </React.Fragment>
        ))}
      </dl>
  );
}
