"use client";
import { useState } from "react";
import { RgbaColorPicker } from "react-colorful";
const ColorPicker = () => {
  const [color, setColor] = useState({ r: 200, g: 150, b: 35, a: 0.5 });
  console.log(color);
  return (
    <div>
      <RgbaColorPicker color={color} onChange={setColor} />
    </div>
  );
};

export default ColorPicker;
