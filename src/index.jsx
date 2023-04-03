/**
 * This code has refactored from the following code:
 * 
 * ReactCompass - a carefully crafted Compass component for React.
 * https://github.com/virtyaluk/react-compass
 *
 * Copyright (c) 2016 Bohdan Shtepan
 * http://modern-dev.com/
 *
 * Licensed under the MIT license.
 *
 * @flow
 */


import React, { useEffect, useState } from 'react';

import './style.css';

import styleNormalizer from 'react-style-normalizer';

export default function Compass({ directionNames=['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'] }) {

  const [compass, setCompass] = useState(0);

  useEffect(() => {
    start()
  }, []);

  const start = async () => {
    window.addEventListener("deviceorientationabsolute", onOrientationEventAbsolute, true);
    function onOrientationEventAbsolute(event) {
      const compass = Math.abs(event.alpha - 360);
      setCompass(compass)
    }
  }

  const directionName = (dir) => {
      let sections = directionNames.length,
          sect = 360 / sections,
          x = Math.floor((dir + sect / 2) / sect);

      x = x >= sections ? 0 : x;

      return directionNames[x];
  }

  const formatCompass = (direction) => {
    return Number(Number(direction).toFixed(0))
  }

  return (
    <div className="center compass" >
      <div className="compass__windrose"
        style={styleNormalizer({ transform: `rotate(-${compass}deg)` })}>
        {[...Array(10)].map((k, i) => <div className="compass__mark" key={i + 1}></div>)}
        <div className="compass__mark--direction-h"></div>
        <div className="compass__mark--direction-v"></div>
      </div>
      <div className="compass__arrow-container">
        <div className="compass__arrow"></div>
        <div className="compass__labels">
          <span></span>

        </div>
      </div>
      <div className="degrees">
        <span>{formatCompass(compass)}<sup>o</sup></span> <span>{directionName(formatCompass(compass))}</span>
      </div>

    </div>
  )
}
