import useImage from 'use-image';
import { Image } from 'react-konva';
import type { OptionProps } from './Option.type';

export default function Option({
  x,
  y,
  width,
  height,
  customRef,
  url,
}: OptionProps) {
  const [image] = useImage(url);

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
