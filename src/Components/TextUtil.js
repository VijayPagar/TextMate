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
      <h1 className="heading">TextMate : Crafting Words, Your Way! </h1>
      <textarea
        className="text-area"
        placeholder="Enter text..."
        value={text}
        onChange={handleInputChange}
      ></textarea>
      <div className="button-container">
        <button type="button" className="btn btn-primary" onClick={handleUpperCase}>Upper Case</button>
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
