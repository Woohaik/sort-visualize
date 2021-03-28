import React, { useState, useEffect, useRef } from "react";
import { changePost, setGreen } from "./utils/animations";
import { MAX_BAR_QUANTITY, MIN_BAR_QUANTITY, INITIAL_BAR_ARR } from "./constants";
import { Bars, Steps } from "./types";
import { getRandomInt } from "./utils/getRandomInt";
import { insertionSort, bubbleSort, selectionSort } from "./utils";
import gitHubLogo from "./assets/github.png";

// Components
import LoadingBar from "./components/LoadingBar";
import OrderCanvas from "./components/OrderCanvas";
import Navbar from "./components/Navbar";
import UserOptions from "./components/UserOptions";
import InputRange from "react-input-range";

const App = () => {
  const [bars, setBars] = useState<Bars>(INITIAL_BAR_ARR);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<string>("bubble");
  const [loadingPorcentage, setLoadingPorcentage] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [animationInterval, setAnimationIntervar] = useState({ value: 500 });
  const animationIntervalRef = useRef(500);


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
      barObject.color = "#0056ad";
      return barObject;
    });
    setBars(newBars);
    calculatePos();
    setLoadingPorcentage(0);
  };

  const salt = () => setBars(barsObjects => barsObjects.map(barObject => ({ ...barObject, height: getRandomInt(20, 300) })));

  const addHandler = (): void => {
    if (bars.length < MAX_BAR_QUANTITY) {
      bars.push({
        id: bars.length,
        color: "#0056ad",
        height: getRandomInt(20, 300),
        left: 0
      });
      setBars([...bars]);
      reset();
    }
  };

  const dropHandler = (): void => { if (bars.length > MIN_BAR_QUANTITY) { bars.pop(); setBars([...bars]); reset(); } };

  const doSort = (): Steps => {
    setLoadingPorcentage(0);
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
      await setGreen(id1, id2, bars, setBars, animationIntervalRef.current); // LAs que compara
    } else {
      console.log("f");
      await changePost(id1, id2, bars, setBars, animationIntervalRef.current); // Las que intercambiara
    }
  };


  const sortedFinished = () => {
    const newBars = bars.map((barObject) => {
      barObject.color = "#a02bc6";
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

      await callAnimation("green", steps[index].first.id1, steps[index].first.id2);

      if (steps[index].second) {
        await callAnimation("", steps[index].second?.id1 || 0, steps[index].second?.id2 || 0);

      }
      stepPassed++;
      setLoadingPorcentage((stepPassed / totalSteps) * 100);
      index++;
    }
    sortedFinished();
    setIsAnimating(false);
  };
  return (
    <div className="app">

      <Navbar selectedAlgorithm={selectedAlgorithm} setSelectedAlgorithm={setSelectedAlgorithm} />
      <div className="delay-title text-center">
        Delay (ms):
      </div>
      <InputRange

        step={50}
        maxValue={500}
        minValue={100}
        value={animationInterval.value}
        onChange={(value) => {
          animationIntervalRef.current = +value;
          setAnimationIntervar({ value: + value });
        }}
      />
      <h1 className="text-center">Visualizing Sort Algorithms</h1>

      <OrderCanvas interval={animationInterval.value} bars={bars} />
      <LoadingBar interval={animationInterval.value} loadingPorcentage={loadingPorcentage} />
      <UserOptions isAnimating={isAnimating} startSort={startSort} salt={salt} reset={reset} addHandler={addHandler} dropHandler={dropHandler} />
      <a className="repo" href="https://github.com/Woohaik">
        <img src={gitHubLogo} alt="this is car image" />
        <div>
          Woohaik
          <div className="fs-12 fc-transparent">
            Wilfredo Hernández
          </div>
        </div>
      </a>

    </div>
  );
};
export default App;