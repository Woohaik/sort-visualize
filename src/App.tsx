import React, { useState, useEffect } from 'react';
import Bar from "./components/Bar";
import { barWidth, CANVAS_SIZE, MAX_BAR_QUANTITY, MIN_BAR_QUANTITY } from './constants';
import { bubbleSort } from './utils/bubbleSort';
import { getRandomInt } from './utils/getRandomInt';
import { insertionSort } from './utils/insertionSort';
import { selectionSort } from './utils/selectionSort';

const App = () => {
  const barArrar = [
    {
      id: 0,
      color: "#0056ad",
      height: getRandomInt(20, 300),
      left: 100,
    },
    {
      id: 1,
      color: "#0056ad",
      height: getRandomInt(20, 300),
      left: 100,
    },
    {
      id: 2,
      color: "#0056ad",
      height: getRandomInt(20, 300),
      left: 100,
    },
    {
      id: 3,
      color: "#0056ad",
      height: getRandomInt(20, 300),
      left: 100,
    },
  ];

  const [bars, setBars] = useState(barArrar);

  const calculatePos = () => {
    setBars(bars.map((barObject, index) => {
      barObject.id = index;
      barObject.left = (index * 45);
      return barObject;
    }))
  }

  const reset = () => {
    let newBars = bars.map((barObject) => {
      barObject.color = "#0056ad";
      return barObject;
    })
    setBars(newBars);
    calculatePos();
  }
  useEffect(() => {
    calculatePos();
  }, []);


  const salt = () => setBars(barsObjects => barsObjects.map(barObject => ({ ...barObject, height: getRandomInt(20, 300) })));

  const addHandler = () => {
    if (bars.length < MAX_BAR_QUANTITY) {
      bars.push({
        id: bars.length,
        color: "#0056ad",
        height: getRandomInt(20, 300),
        left: 0
      });
      setBars([...bars])
      calculatePos();
    }
  };


  const dropHandler = () => {
    if (bars.length > MIN_BAR_QUANTITY) {
      bars.pop();
      setBars([...bars]);
      calculatePos();
    }
  };

  const widthOfContent = () => (bars.length * barWidth) + (bars.length - 1) * 10;

  const changePost = (id1: number, id2: number): Promise<void> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        let newArray = [...bars];
        const firstLeft = newArray.find(bar => bar.id === id1)?.left;
        const lastLeft = newArray.find(bar => bar.id === id2)?.left;
        const l1 = newArray.find(bar => bar.id === id1);
        const l2 = newArray.find(bar => bar.id === id2);
        if (l1 !== undefined) l1.left = lastLeft || -1;
        if (l2 !== undefined) l2.left = firstLeft || -1;
        setBars(newArray);
        resolve();
      }, 500)
    })
  }


  const setGreen = async (id: number, id2: number, id3 = -1): Promise<void> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        let newBars = bars.map((barObject) => {
          barObject.color = "#0056ad";
          return barObject;
        })
        let BarToGreen = newBars.find(bar => bar.id === id);
        let BarToGreen2 = newBars.find(bar => bar.id === id2);
        let BarToGreen3 = newBars.find(bar => bar.id === id3);
        if (BarToGreen !== undefined) BarToGreen.color = "#7da542";
        if (BarToGreen2 !== undefined) BarToGreen2.color = "#7da542";
        if (BarToGreen3 !== undefined) BarToGreen3.color = "#7da542";
        setBars(newBars);
        resolve();
      }, 500)
    });
  }

  const [selectedAlgorithm, setSelectedAlgorithm] = useState("bubble");

  const [loadingPorcentage, setLoadingPorcentage] = useState(0);

  const doSort = () => {
    if (selectedAlgorithm === "bubble") {
      return bubbleSort(bars);
    } else if (selectedAlgorithm === "selection") {
      return selectionSort(bars);
    } else {
      return insertionSort(bars);
    }
  };

  const startSort = async () => {
    const steps = doSort();
    const totalSteps = steps.length;
    let stepPassed = 0;
    for (let index = 0; index < steps.length; index++) {
      await setGreen(steps[index].first.id1, steps[index].first.id2); // LAs que compara
      if (steps[index].second) {
        await changePost(steps[index].second?.id1 || 0, steps[index].second?.id2 || 0) // Las que intercambiara
      }
      stepPassed++;
      setLoadingPorcentage((stepPassed / totalSteps) * 100);
    }
  };


  return (
    <div className="app">
      <nav className="navbar">
        <div onClick={() => setSelectedAlgorithm("bubble")} className={`navbar__item  ${selectedAlgorithm === "bubble" ? "selected" : ""}`}>
          Bubble Sort
        </div>
        <div onClick={() => setSelectedAlgorithm("selection")} className={`navbar__item  ${selectedAlgorithm === "selection" ? "selected" : ""}`}>
          Selection Sort
        </div>
        <div onClick={() => setSelectedAlgorithm("insertion")} className={`navbar__item  ${selectedAlgorithm === "insertion" ? "selected" : ""}`}>
          Insertion Sort
        </div>
      </nav>
      <div className="wrapper ">
        <div className="order-content" style={{ left: (CANVAS_SIZE - widthOfContent()) / 2, width: widthOfContent() }}>
          {
            bars.map((barObject, index) => {
              const size = {
                height: barObject.height,
                width: barWidth
              }
              return <Bar class={index > 3 ? "ease-in" : ""} key={index} left={barObject.left} size={size} color={barObject.color} />
            })
          }
        </div>
      </div>
      <div className="loading-bar">
        <div className="loading-bar-progress" style={{ width: `${loadingPorcentage}%` }}></div>
      </div>
      <div className="button-container">
        <button className="btn btn-sm changeValue" onClick={dropHandler}><i className="fas fa-minus"></i></button>
        <button className="btn btn-sm changeValue" onClick={startSort}>     <i className="fas fa-play"></i></button>
        <button className="btn btn-sm changeValue" onClick={addHandler}><i className="fas fa-plus"></i></button>
      </div>
      <div className="button-container">
        <button className=" btn changeValue" onClick={salt}>Salt</button>
        <button className="btn changeValue" onClick={reset}>Reset</button>
      </div>
    </div>
  )
}
export default App;