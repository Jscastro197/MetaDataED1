import React from 'react';
import * as d3 from 'd3';

export const Piechart = () => {
  const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
  
  const w = 500;
  const h = 100;
  
  return (
    <div>
      <svg width={w} height={h}>
        {dataset.map((d, i) => (
          <rect
            key={i}
            x={i * 30}
            y={h - 3 * d}
            width={25}
            height={d * 3}
            fill="navy"
          />
        ))}
        {dataset.map((d, i) => (
          <text
            key={i}
            x={i * 30}
            y={h - 3 * d - 3}
          >
            {d}
          </text>
        ))}
      </svg>
    </div>
  );
};

