// components/HelperBox.tsx

import React, { useState, useEffect, useRef } from 'react';

const HelperBox: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const helperBoxRef = useRef(null);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    // Function to handle click event
    const handleClickOutside = (event: MouseEvent) => {
      if (helperBoxRef.current && !helperBoxRef.current.contains(event.target as Node)) {
        setIsHovered(false);
      }
    };

    // Attach click event listener
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div
      ref={helperBoxRef}
      className="helper-box"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={handleMouseOver}
    >
      ?
      {isHovered && (
        <div className="tooltip">
          <h4 className="tooltip-title">Navigate Around the Explorer</h4>
          <p className="tooltip-text">Click the top menu bar to toggle between "CoFI Methods", "CoFI Examples", and "Espresso Problems".</p>
          <p className="tooltip-text">Click the central tree boxes to expand or collapse their branches.</p>
          <p className="tooltip-text">Long-press the boxes to display a pop-up window with additional details.</p>
        </div>
      )}
    </div>
  );
};

export default HelperBox;
