import { Image, Layer, Stage } from 'react-konva';
import Option from '@/components/Option';
import Wagonet from '@/components/Wagonet';
import backgroundImage from '@/assets/background.png';
import type { GameLayerProps } from '@/components/GameLayer/GameLayer.type';

const background = new window.Image();
background.src = backgroundImage;

export default function GameLayer({
  wagonetCoords,
  wagonetRef,
  pictureSecond,
  pictureFirst,
}: GameLayerProps) {
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Image
          image={background}
          x={0}
          y={0}
          width={window.innerWidth}
          height={window.innerHeight}
        />
        <Option
          x={window.innerWidth - 400}
          y={50}
          width={200}
          height={100}
          url={`${process.env.REACT_APP_BASE_URL}/uploads/${pictureFirst}`}
        />
        <Option
          x={window.innerWidth - 400}
          y={window.innerHeight - 200}
          width={200}
          height={100}
          url={`${process.env.REACT_APP_BASE_URL}/uploads/${pictureSecond}`}
        />
        <Wagonet
          x={wagonetCoords.x}
          y={wagonetCoords.y}
          height={200}
          width={300}
          customRef={wagonetRef}
        />
      </Layer>
    </Stage>
  );
}
