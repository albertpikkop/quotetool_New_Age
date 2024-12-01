import React from 'react';

export function CubeAnimation() {
  return (
    <div className="cube-container">
      <div className="cube">
        <div className="face front">
          <div className="hexagon"></div>
        </div>
        <div className="face back">
          <div className="hexagon"></div>
        </div>
        <div className="face right">
          <div className="hexagon"></div>
        </div>
        <div className="face left">
          <div className="hexagon"></div>
        </div>
        <div className="face top">
          <div className="hexagon"></div>
        </div>
        <div className="face bottom">
          <div className="hexagon"></div>
        </div>
      </div>
      <div className="floating-particle"></div>
    </div>
  );
}