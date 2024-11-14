import { useState } from 'react';
import Konva from 'konva';
import { Rect } from 'react-konva';
import type { RectangleProps } from './Rectangle.type';

export default function ColoredRect({
  x,
  y,
  width,
  height,
  customRef,
}: RectangleProps) {
  const [color, setColor] = useState('green');

  const handleClick = () => {
    setColor(Konva.Util.getRandomColor());
  };

  return (
    <Rect
      ref={(node) => {
        if (customRef) {
          customRef.current = node;
        }
      }}
      x={x}
      y={y}
      width={width}
      height={height}
      fill={color}
      shadowBlur={5}
      onClick={handleClick}
    />
  );
}
