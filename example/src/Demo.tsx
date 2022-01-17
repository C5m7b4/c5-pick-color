import React, { useState, useEffect } from 'react';
import ColorPickerWrapper, { ColorPicker, themes } from '../../src';
import './Demo.css';

const Demo: React.FC = () => {
  const [color, setColor] = useState('#00ff00');
  const [showPicker, setShowPicker] = useState(false);

  useEffect(() => {}, []);

  return (
    <div className="wrapper">
      <div className="demo-title">Welcome to our Color Picker Demo</div>
      <div className="demo-buttons">
        <button
          className="demo-btn1"
          onClick={() => setShowPicker(!showPicker)}
        >
          Cick Me for Color Picker
        </button>
      </div>
      <div style={{ width: '100%', textAlign: 'center' }}>
        <ColorPickerWrapper
          color={color}
          onChange={(e) => setColor(e.toString())}
        />
      </div>
      {showPicker && (
        <ColorPicker
          color={color}
          onChange={(e) => setColor(e.hex)}
          theme={themes.dark}
        />
      )}
    </div>
  );
};

export default Demo;
