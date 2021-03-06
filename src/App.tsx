import React, { useState, useEffect, useRef } from "react";
import { changePost, setGreen } from "./utils/animations";
import { MAX_BAR_QUANTITY, MIN_BAR_QUANTITY, INITIAL_BAR_ARR, BLUE_COLOR, GREEN_COLOR } from "./constants";
import { Bars, Steps } from "./types";
import { getRandomInt } from "./utils/getRandomInt";
import { insertionSort, bubbleSort, selectionSort } from "./utils";
import Social from "./components/Social";

// Components
import LoadingBar from "./components/LoadingBar";
import OrderCanvas from "./components/OrderCanvas";
import Navbar from "./components/Navbar";
import UserOptions from "./components/UserOptions";
import InputRange from "react-input-range";

const App = (): JSX.Element => {
  const [bars, setBars] = useState<Bars>(INITIAL_BAR_ARR);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<string>("bubble");
  const [loadingPorcentage, setLoadingPorcentage] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [ms, setMs] = useState({ value: 500 });

  const isPausedAnimationRef = useRef(false);
  const animationIntervalRef = useRef(500);
  const canceledRef = useRef(false);

  const calculatePos = () => {
    setBars(bars.map((barObject, index) => {
      barObject.id = index;
      barObject.left = (index * 45);
      return barObject;
    }));
  };

  useEffect(() => { calculatePos(); }, []);

  const reset = () => {
    const newBars: Bars = bars.map((barObject) => {
      barObject.color = BLUE_COLOR;
      return barObject;
    });
    setBars(newBars);
    calculatePos();
    setLoadingPorcentage(0);
  };

  const salt = () => {
    reset();
    setBars(barsObjects => barsObjects.map(barObject => ({ ...barObject, height: getRandomInt(20, 300) })));
  };

  const addHandler = (): void => {
    if (bars.length < MAX_BAR_QUANTITY) {
      bars.push({
        id: bars.length,
        color: BLUE_COLOR,
        height: getRandomInt(20, 300),
        left: 0
      });
      setBars([...bars]);
      reset();
    }
  };

  const dropHandler = (): void => { if (bars.length > MIN_BAR_QUANTITY) { bars.pop(); setBars([...bars]); reset(); } };

  const doSort = (): Steps => {
    if (selectedAlgorithm === "bubble") {
      return bubbleSort(bars);
    } else if (selectedAlgorithm === "selection") {
      return selectionSort(bars);
    } else {
      return insertionSort(bars);
    }
  };

  const callAnimation = async (type: string, id1: number, id2: number) => {
    if (type === "green") {
      await setGreen(id1, id2, bars, setBars, !isPausedAnimationRef.current ? animationIntervalRef.current : 0); // LAs que compara
    } else {
      await changePost(id1, id2, bars, setBars, !isPausedAnimationRef.current ? animationIntervalRef.current : 0); // Las que intercambiara
    }
  };


  const sortedFinished = () => {
    const newBars = bars.map((barObject) => {
      barObject.color = GREEN_COLOR;
      return barObject;
    });
    setBars(newBars);
  };

  const startSort = async () => {
    reset();
    setIsAnimating(true);
    const steps: Steps = doSort();
    const totalSteps = steps.length;
    let stepPassed = 0;
    for (let index = 0; index < steps.length;) {
      if (!isPausedAnimationRef.current) {
        await callAnimation("green", steps[index].first.id1, steps[index].first.id2);
        if (steps[index].second) {
          await callAnimation("", steps[index].second?.id1 || 0, steps[index].second?.id2 || 0);
        }
        stepPassed++;
        setLoadingPorcentage((stepPassed / totalSteps) * 100);
        index++;
      } else {
        if (canceledRef.current) {
          break;
        } else {
          do {
            await new Promise(resolve => {
              setTimeout(() => {
                console.log("Waiting...");
                resolve(null);
              }, isPausedAnimationRef.current ? 100 : 1);
            });
          } while (isPausedAnimationRef.current && !canceledRef.current);
        }

      }
    }
    if (!canceledRef.current) sortedFinished();
    setIsAnimating(false);
    isPausedAnimationRef.current = false;
    canceledRef.current = false;
  };


  const stopSort = () => { canceledRef.current = true; reset(); };

  return (
    <div className="app">
      <Navbar isAnimating={isAnimating} selectedAlgorithm={selectedAlgorithm} setSelectedAlgorithm={setSelectedAlgorithm} />
      <div className="delay-title text-center">
        Delay (ms): {animationIntervalRef.current}
      </div>
      <InputRange
        step={50}
        maxValue={500}
        minValue={100}
        value={ms.value}
        onChange={(value) => {
          animationIntervalRef.current = +value;
          animationIntervalRef.current = +value;
          setMs({ value: +value });
        }}
      />
      <h1 className="text-center">Visualizing Sort Algorithms</h1>
      <OrderCanvas interval={animationIntervalRef.current} bars={bars} />
      <LoadingBar interval={animationIntervalRef.current} loadingPorcentage={loadingPorcentage} />
      <UserOptions
        stopSort={stopSort} isPaused={isPausedAnimationRef.current}
        resume={() => isPausedAnimationRef.current = false}
        pause={() => isPausedAnimationRef.current = true}
        isAnimating={isAnimating} startSort={startSort}
        salt={salt} reset={reset} addHandler={addHandler}
        dropHandler={dropHandler} />

      <Social />


    </div>

  );
};
export default App;