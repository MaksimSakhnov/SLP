import { Image } from 'react-konva';
import train from '@/assets/train.png';
import { WagonetProps } from './Wagonet.type';

const image = new window.Image();
image.src = train;

export default function Wagonet({
  x,
  y,
  width,
  height,
  customRef,
}: WagonetProps) {
  return (
    <Image
      image={image}
      ref={(node) => {
        if (customRef) {
          customRef.current = node;
        }
      }}
      x={x}
      y={y}
      width={width}
      height={height}
    />
  );
}
