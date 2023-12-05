import React, { useState, useEffect } from 'react';

const TitleUpdaterComponent = () => {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You typed: ${inputValue}`;

    // Optional: Cleanup function
    return () => {
      document.title = 'React App'; // Resetting title when component unmounts or before next effect runs
    };
  }, [inputValue]); // Effect runs every time inputValue changes

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type something..."
      />
    </div>
  );
};

export default TitleUpdaterComponent;
