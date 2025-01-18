"use client";

import { useState } from "react";
import { RgbaColorPicker } from "react-colorful";

const ColorPicker = () => {
  const [color, setColor] = useState({ r: 200, g: 150, b: 35, a: 0.5 });

  // // Derived formats
  // const hexColor = rgbaToHex(color);
  // const hslColor = rgbaToHsl(color);
  // const rgbaColor = `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;

  return (
    <div className=" space-y-4 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto">
      <RgbaColorPicker color={color} onChange={setColor} />
    </div>
  );
};

export default ColorPicker;
