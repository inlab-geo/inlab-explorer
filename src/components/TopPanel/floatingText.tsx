import React, { useState, useEffect } from 'react';

interface Props {
  interval?: number;
}

const messages = [
  'Click the top menu bar to switch between views.',
  'Click tree nodes to expand or collapse.',
  'Long-press on nodes for more details.'
];

const FloatingText: React.FC<Props> = ({ interval = 3000 }) => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, interval);

    return () => clearInterval(timer);
  }, [messages, interval]);

  return (
    <div className="floating-text-container">
        {messages.map((message, index) => (
            <div 
                key={index}
                className={`floating-text ${index === currentMessageIndex ? 'active' : ''}`}
            >
                {message}
            </div>
        ))}
    </div>
  );
};

export default FloatingText;
