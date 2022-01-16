import React, { useState, useEffect } from 'react';

import { Color, ColorObject } from '../types';
import { initColor } from '../components/ColorPicker/helper';

const useColor = (color: Color) => {
  const [col, setCol] = useState<ColorObject>(initColor(color));

  useEffect(() => {
    setCol(initColor(color));
  }, [color]);

  return col;
};

export default useColor;
