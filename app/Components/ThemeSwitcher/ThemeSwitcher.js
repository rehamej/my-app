// app/Components/ColorPaletteSwitcher.js
import React, { useState, useEffect } from 'react';

const colorPalettes = {
  palette1: {
    bodyBg: 'rgb(242 227 229)',
    fontColor: '#ca3d83',
    headingColor: '#681b32',
    buttonBg: '#ec4899',
    buttonColor: '#fff',
  },
  palette2: {
    bodyBg: '#f0f4f8',
    fontColor: '#333',
    headingColor: '#111',
    buttonBg: '#007bff',
    buttonColor: '#fff',
  },
  palette3: {
    bodyBg: '#fff3e6',
    fontColor: '#e67e22',
    headingColor: '#d35400',
    buttonBg: '#e74c3c',
    buttonColor: '#fff',
  },
};

const ColorPaletteSwitcher = () => {
  const [palette, setPalette] = useState('palette1');

  useEffect(() => {
    const currentPalette = colorPalettes[palette];
    document.body.style.backgroundColor = currentPalette.bodyBg;
    document.body.style.color = currentPalette.fontColor;
    document.querySelectorAll('h2').forEach(el => {
      el.style.color = currentPalette.headingColor;
    });
    document.querySelectorAll('button').forEach(el => {
      el.style.backgroundColor = currentPalette.buttonBg;
      el.style.color = currentPalette.buttonColor;
    });
  }, [palette]);

  return (
    <div className="gap-4 flex mx-4 my-2 text-xs justify-center">
      <button onClick={() => setPalette('palette1')}>Palette 1</button>
      <button onClick={() => setPalette('palette2')}>Palette 2</button>
      <button onClick={() => setPalette('palette3')}>Palette 3</button>
    </div>
  );
};

export default ColorPaletteSwitcher;
