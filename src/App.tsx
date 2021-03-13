import React, { useState, useEffect } from 'react';
import Bar from "./components/Bar";
import { getRandomInt } from './utils/getRandomInt';


const App = () => {
  const CANVAS_SIZE = 800;
  const barWidth = 35;
  const MAX_BAR_QUANTITY = 20;
  const MIN_BAR_QUANTITY = 4;
  const barArrar = [
    {
      color: "#0056ad",
      height: getRandomInt(20, 300),
      left: "calc(50% - 10px)",
    },
    {
      color: "#0056ad",
      height: getRandomInt(20, 300),
      left: "calc(50% - 10px)",
    },
    {
      color: "#0056ad",
      height: getRandomInt(20, 300),
      left: "calc(50% - 10px)",
    },
    {
      color: "#0056ad",
      height: getRandomInt(20, 300),
      left: 0,
    },
  ];

  const [bars, setBars] = useState(barArrar);
  const calculatePos = () => {
    setBars(bars.map((barObject, index) => {
      barObject.left = (index * 45);
      return barObject;
    }))
  }

  useEffect(() => {
    calculatePos();
  }, []);

  const salt = () => setBars(barsObjects => barsObjects.map(barObject => ({ ...barObject, height: getRandomInt(20, 300) })))

  const addHandler = () => {
    if (bars.length < MAX_BAR_QUANTITY) {
      bars.push({
        color: "#0056ad",
        height: getRandomInt(20, 300),
        left: 0
      });
      setBars([...bars])
      calculatePos();
    }
  }
  const dropHandler = () => {
    if (bars.length > MIN_BAR_QUANTITY) {
      bars.pop();
      setBars([...bars]);
      calculatePos();
    }
  }

  const widthOfContent = () => (bars.length * barWidth) + (bars.length - 1) * 10;

  const startSort = () => {
    const first = [...bars][0];
    const last = [...bars][bars.length - 1];
    let newArray = [...bars];
    newArray[0] = last;
    newArray[bars.length - 1] = first;
    setBars(newArray);
  }

  return (
    <div className="app">
      <div className="wrapper ">
        <div className="order-content" style={{ left: (CANVAS_SIZE - widthOfContent()) / 2, width: widthOfContent() }}>

          {

            bars.map((barObject, index) => {
              const size = {
                height: barObject.height,
                width: barWidth
              }

              return <Bar class={index > 3 ? "ease-in" : ""} key={index} left={barObject.left} size={size} color="#0056ad" />
            })
          }
        </div>
      </div>
      <div className="button-container">
        <button className="changeValue" onClick={dropHandler}>Drop</button>
        <button className="changeValue" onClick={salt}>Salt</button>
        <button className="changeValue" onClick={addHandler}>Add</button>
      </div>
      <div className="button-container">
        <button className="changeValue" onClick={startSort}>Play</button>
      </div>
    </div>
  )
}

export default App
