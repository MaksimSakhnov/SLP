import { useEffect, useRef, useState } from 'react';
import GameLayer from '@/components/GameLayer';
import type { GameLayerContainerProps } from './GameLayerContainer.type';

export default function GameLayerContainer({
  direction,
  setIsMoving,
  setOpenResult,
  setDirection,
  pictureFirst,
  pictureSecond,
}: GameLayerContainerProps) {
  const wagonetY = window.innerHeight / 2 - 100;

  const wagonetRef = useRef<any>();

  const [wagonetCoords, setWagonetCoords] = useState<{ x: number; y: number }>({
    x: 50,
    y: wagonetY,
  });

  useEffect(() => {
    if (direction === 'noChange') {
      window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
      setIsMoving(true);

      if (wagonetRef.current) {
        wagonetRef.current.to({
          x: window.innerWidth - 200,
          y: 50,
          duration: 2,
          onFinish: () => {
            setOpenResult(true);
            setTimeout(() => {
              setWagonetCoords({ x: window.innerWidth - 200, y: 50 });
              setDirection(null);
              setIsMoving(false);
            }, 500);
          },
          onUpdate: () => {
            console.log('upd');
          },
        });
      }
    } else if (direction === 'change') {
      window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
      setIsMoving(true);
      if (wagonetRef.current) {
        wagonetRef.current.to({
          x: window.innerWidth - 200,
          y: window.innerHeight - 200,
          duration: 2,
          onFinish: () => {
            setOpenResult(true);

            setTimeout(() => {
              setWagonetCoords({
                x: window.innerWidth - 200,
                y: window.innerHeight - 200,
              });
              setDirection(null);
              setIsMoving(false);
            }, 500);
          },
        });
      }
    } else {
      setWagonetCoords({ x: 50, y: wagonetY });
    }
  }, [direction, wagonetY]);

  return (
    <GameLayer
      pictureFirst={pictureFirst}
      pictureSecond={pictureSecond}
      wagonetCoords={wagonetCoords}
      wagonetRef={wagonetRef}
    />
  );
}
