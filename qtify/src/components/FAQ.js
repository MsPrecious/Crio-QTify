import React, { useState } from 'react';
import '../App.css';

const FAQ = () => {
  const [accordion1Expanded, setAccordion1Expanded] = useState(false);
  const [accordion2Expanded, setAccordion2Expanded] = useState(false);

  const toggleAccordion1 = () => {
    setAccordion1Expanded(!accordion1Expanded);
  };

  const toggleAccordion2 = () => {
    setAccordion2Expanded(!accordion2Expanded);
  };

  return (
    <div className="faq-section">
      <div className="filter-line" style={{ backgroundColor: '#5cb55c' }} />
      <div className="centered-heading">FAQs</div>

      <div className="accordion">
        <div className="accordion-header" onClick={toggleAccordion1}>
          Is Qtify free to use?
          <span className="accordion-icon">{accordion1Expanded ? "/\\" : "\\/"}</span>
        </div>
        {accordion1Expanded && (
          <div className="accordion-content">
            Yes! It's 100% free, has 0% ads!
          </div>
        )}
      </div>

      <div className="accordion">
        <div className="accordion-header" onClick={toggleAccordion2}>
          Can I download and listen to songs offline?
          <span className="accordion-icon">{accordion2Expanded ? "/\\" : "\\/"}</span>
        </div>
        {accordion2Expanded && (
          <div className="accordion-content">
            Sorry, unfortunately we don't provide the service to download any songs.
          </div>
        )}
      </div>
    </div>
  );
};

export default FAQ;
