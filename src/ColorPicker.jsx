import React, { useState } from "react";

export const ColorPicker = () => {
  const [color, setColor] = useState("#FFFFFF");
  const [message, setMessage] = useState("");

  const copyToClipboard = (text) => {
    const result = window.navigator.clipboard.writeText(color);

    result
      .then(() => {
        setMessage(`Copied to clipboard!`);
      })
      .finally(() => {
        setTimeout(() => {
          setMessage("");
        }, 2000);
      });
  };

  function handleColorChange(e) {
    setColor(e.target.value);
  }

  return (
    <div className="color-picker-container">
      <h1>Color Picker</h1>
      <div
        className="color-display"
        style={{ backgroundColor: color }}
        onClick={copyToClipboard}
      >
        {message}
        <p>Selected Color: {color}</p>
      </div>
      <label>Pick a Color:</label>
      <input type="color" value={color} onChange={handleColorChange} />
    </div>
  );
};
