import React, { useState } from "react";
import './TextUtilStyle.css';

const TextManipulator = () => {
  const [text, setText] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleUpperCase = () => {
    setText(text.toUpperCase());
  };

  const handleLowerCase = () => {
    setText(text.toLowerCase());
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(text);
  };

  const handleClearText = () => {
    setText("");
  };

  const handleToggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app-container ${darkMode ? "dark-mode" : "light-mode"}`}>
      <textarea
        placeholder="Enter text..."
        value={text}
        onChange={handleInputChange}
        style={{ width: '450px',height :'100px' , margin:'10px' }}
      ></textarea>
      <div className="button-container">
        <button type="button" className="btn btn-primary" onClick={handleUpperCase}>Convert to Upper Case</button>
        <button type="button" className="btn btn-primary" onClick={handleLowerCase}>Lower Case</button>
        <button type="button" className="btn btn-primary" onClick={handleCopyText}>Copy Text</button>
        <button type="button" className="btn btn-primary" onClick={handleClearText}>Clear Text</button>
        <button type="button" className="btn btn-primary" onClick={handleToggleMode}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </div>
  );
};

export default TextManipulator;
