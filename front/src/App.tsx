import { useEffect, useState } from 'react';
import { levelsApi } from '@/services/api/levels/levelsApi';
import GameLayerContainer from '@/containers/GameLayerContainer';
import Actions from '@/components/Actions/Actions';
import Result from '@/components/Result/Result';
import type { DirectionType } from '@/shared/types';
import type { ILevelApi } from '@/services/api/levels/levelsApi.type';
import styles from './App.module.scss';

export const App = () => {
  const [currentLevel, setCurrentLevel] = useState<ILevelApi | null>(null);
  const [direction, setDirection] = useState<DirectionType>(null);
  const [choice, setChoice] = useState<DirectionType>(null);
  const [isMoving, setIsMoving] = useState(false);
  const [openResult, setOpenResult] = useState(false);
  const [currentLevelIndex, setCurrentLevelIndex] = useState<number>(0);
  const [levelsCount, setLevelsCount] = useState<number>(0);
  const [allLevels, setAllLevels] = useState<Array<ILevelApi>>([]);

  function fetchLevels() {
    levelsApi.getLevels().then((data) => {
      setLevelsCount(data.length);
      setAllLevels(data);
      setCurrentLevel(data[currentLevelIndex]);
    });
  }

  useEffect(() => {
    fetchLevels();
  }, []);

  function makeChoice(direction: DirectionType) {
    setDirection(direction);
    setChoice(direction);
    levelsApi
      .updateLevel({
        text: currentLevel.text,
        picture_first: currentLevel.picture_first,
        picture_second: currentLevel.picture_second,
        id: currentLevel.id,
        statistic_first:
          direction === 'noChange'
            ? currentLevel.statistic_first + 1
            : currentLevel.statistic_first,
        statistic_second:
          direction === 'change'
            ? currentLevel.statistic_second + 1
            : currentLevel.statistic_second,
      })
      .then(() => fetchLevels());
  }

  function nextLevel() {
    setCurrentLevel(allLevels[currentLevelIndex + 1]);
    setCurrentLevelIndex(currentLevelIndex + 1);
  }

  if (currentLevel)
    return (
      <div className={styles.container}>
        <h1>{currentLevel.text}</h1>
        {openResult && (
          <Result
            statisticFirst={currentLevel.statistic_first}
            statisticSecond={currentLevel.statistic_second}
            setOpenResult={setOpenResult}
            choice={choice}
          />
        )}

        <GameLayerContainer
          setIsMoving={setIsMoving}
          setOpenResult={setOpenResult}
          setDirection={setDirection}
          direction={direction}
          pictureFirst={currentLevel.picture_first}
          pictureSecond={currentLevel.picture_second}
        />
        <Actions
          makeChoice={makeChoice}
          isMoving={isMoving}
          nextLevel={nextLevel}
          disabledNextLevel={currentLevelIndex === levelsCount - 1}
        />
      </div>
    );
  return null;
};
