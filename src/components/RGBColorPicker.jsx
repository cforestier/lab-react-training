import { useState } from 'react';
import SingleColorPicker from './SingleColorPicker';

function RGBColorPicker() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const getBackgroundColor = (red, green, blue) =>
    `rgb(${red}, ${green}, ${blue})`;

  return (
    <div>
      <SingleColorPicker
        color="R"
        value={red}
        onChange={setRed}
        backgroundColor={getBackgroundColor(red, 0, 0)}
      />
      <SingleColorPicker
        color="G"
        value={green}
        onChange={setGreen}
        backgroundColor={getBackgroundColor(0, green, 0)}
      />
      <SingleColorPicker
        color="B"
        value={blue}
        onChange={setBlue}
        backgroundColor={getBackgroundColor(0, 0, blue)}
      />
      <div className="single-color-container">
        <div
          style={{
            width: 10,
            height: '10px',
            backgroundColor: getBackgroundColor(red, green, blue),
          }}
        ></div>
        <label>{getBackgroundColor(red, green, blue)}</label>
      </div>
    </div>
  );
}

export default RGBColorPicker;
