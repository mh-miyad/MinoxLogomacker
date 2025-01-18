"use client";

import { useState } from "react";
import { RgbaColorPicker } from "react-colorful";

// Utility functions to convert RGBA to HEX and HSL
const rgbaToHex = ({
  r,
  g,
  b,
  a,
}: {
  r: number;
  g: number;
  b: number;
  a: number;
}) => {
  const toHex = (value: number) => value.toString(16).padStart(2, "0");
  const alphaHex = Math.round(a * 255)
    .toString(16)
    .padStart(2, "0");
  return `#${toHex(r)}${toHex(g)}${toHex(b)}${alphaHex}`;
};

const rgbaToHsl = ({
  r,
  g,
  b,
  a,
}: {
  r: number;
  g: number;
  b: number;
  a: number;
}) => {
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0,
    s = 0,
    l = (max + min) / 2;

  if (max !== min) {
    const delta = max - min;
    s = l > 0.5 ? delta / (2 - max - min) : delta / (max + min);

    switch (max) {
      case r:
        h = (g - b) / delta + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / delta + 2;
        break;
      case b:
        h = (r - g) / delta + 4;
        break;
    }

    h /= 6;
  }

  h = Math.round(h * 360);
  s = Math.round(s * 100);
  l = Math.round(l * 100);

  return `hsl(${h}, ${s}%, ${l}%, ${a})`;
};

const ColorPicker = () => {
  const [color, setColor] = useState({ r: 200, g: 150, b: 35, a: 0.5 });

  // Derived formats
  const hexColor = rgbaToHex(color);
  const hslColor = rgbaToHsl(color);
  const rgbaColor = `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;

  return (
    <div className="p-4 space-y-4 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-lg font-bold text-gray-800">Custom Color Picker</h2>
      <RgbaColorPicker color={color} onChange={setColor} />
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="font-medium text-gray-700">HEX:</span>
          <span className="px-2 py-1 bg-white rounded-md shadow">
            {hexColor}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-medium text-gray-700">HSL:</span>
          <span className="px-2 py-1 bg-white rounded-md shadow">
            {hslColor}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-medium text-gray-700">RGBA:</span>
          <span className="px-2 py-1 bg-white rounded-md shadow">
            {rgbaColor}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
